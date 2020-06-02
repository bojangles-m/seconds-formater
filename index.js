const SecondsFormater = (function () {
    /**
     * Add a leading zero to a number.
     * @param {Number} num
     * @param {Number} dig - With how many digits is number represented
     */
    const addZero = (num, dig) => {
        if (num / 10 >= 1) return num;

        const mask = 1000000;
        return (mask | num).toString().slice(-dig);
    };

    // Object with Arrays represents converted seconds to sec, min, hours, days
    let duration = {};

    /**
     * Converting seconds into days, hours, minutes and seconds
     * @param {Number} seconds - Time in seconds
     * @returns {Object[sec, min, hours, days]} in different formats
     */
    const converter = (seconds) => {
        duration = {};
        duration.s = calculate(Math.floor(seconds), 60);
        duration.m = calculate(duration.s[2], 60);
        duration.h = calculate(duration.m[2], 24);
        duration.d = calculate(duration.h[2], 365);
    };

    /**
     * Convert base units (milliseconds) to this unit.
     * @param {Number} n - Number of base units (miliseconds) to be converted.
     * @param {Number} m - The number by which to multiply the unit to obtain its equivalent in the base unit (milliseconds).
     * @returns {[Number, Number, [Number]} - The remainder after dividing base unit, Divided number, The transfer ot be divided in next step.
     */
    const calculate = (n, m) => {
        return [Math.floor(n % m), n, Math.floor(n / m)];
    };

    /**
     * Format the seconds into pretty format
     * @param {String} f - Presentation format of the seconds
     */
    const format = (f) => {
        const pattern = {
            s: /SS|S/,
            m: /MM|M/,
            h: /HH|H/,
            d: /DD|D/,
        };
        const defaultFormat = 'HH:MM:SS';

        let stringToFormat =
            typeof f === 'undefined' || typeof f !== 'string' || f.toString().length === 0
                ? defaultFormat
                : f.toString();

        /**
         * Raplace matched string wit number and adding leading zero if necessary
         * @param {String} str - string to be replaced with number
         * @param {Number} sec - replacement value
         * @param {Regular expression} regx - matching value in string
         */
        replace = (str, num, regx) => {
            const m = str.match(regx);
            return m === null ? str : str.replace(m[0], addZero(num, m[0].length));
        };

        /**
         * Replacing match with value
         * @param {String} str - replace with substring of seconds
         * @param {Number} sec - Replacing found match with seconds
         */
        replaceSeconds = (str, sec) => {
            return replace(str, sec, pattern.s);
        };

        /**
         * Replacing match with value
         * @param {String} str - replace with substring of minutes
         * @param {Number} min - Replacing found match with minutes
         */
        replaceMinutes = (str, min) => {
            return replace(str, min, pattern.m);
        };

        /**
         * Replacing match with value
         * @param {String} str - replace with substring of hours
         * @param {Number} hours - Replacing found match with hours
         */
        replaceHours = (str, hours) => {
            return replace(str, hours, pattern.h);
            // return str.replace(pattern.h, addZero(hours, 2));
        };

        /**
         * Replacing match with value
         * @param {String} str - replace with substring of days
         * @param {Number} days - Replacing found match with days
         */
        replaceDays = (str, days) => {
            // return str.replace(pattern.d, addZero(days, 2));
            return replace(str, days, pattern.d);
        };

        /**
         * The last Unit is not converted
         * Example:
         *      [DD:HH:MM:SS] | 12345 => 00:03:25:45
         *      [HH:MM:SS]    | 12345 => 03:25:45
         *      [MM:SS]       | 12345 => 205:45
         *      [SS]          | 12345 => 12345
         */
        let formatedString = stringToFormat;
        if (stringToFormat.search(pattern.s) !== -1) {
            if (stringToFormat.search(pattern.m) === -1) {
                duration.s[0] = duration.s[1];
            } else {
                if (stringToFormat.search(pattern.h) === -1) {
                    duration.m[0] = duration.m[1];
                } else {
                    if (stringToFormat.search(pattern.d) === -1) duration.h[0] = duration.h[1];
                }
            }
        }

        // Format every unit
        formatedString = replaceSeconds(formatedString, duration.s[0]);
        formatedString = replaceMinutes(formatedString, duration.m[0]);
        formatedString = replaceHours(formatedString, duration.h[0]);
        formatedString = replaceDays(formatedString, duration.d[0]);

        if (isNegative) formatedString = '-' + formatedString;

        return formatedString;
    };

    let isNegative = false;

    const init = (sec) => {
        seconds = Number(sec);

        if (isNaN(seconds)) {
            throw new TypeError('Parameters have Invalid value!');
        }

        isNegative = false;
        if (seconds < 0) {
            isNegative = true;
            seconds = -1 * seconds;
        }

        converter(seconds);

        return {
            format: format,
        };
    };

    return {
        convert: init,
    };
})();

module.exports = SecondsFormater;
