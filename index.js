//  Concern v1.2.1
//  https://github.com/bojangles-m/seconds-formater
//  (c) 2020-2020 Bojan Mazej
//  License: ISC

(function (factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? (module.exports = factory()) : null;
})(function () {
    
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
        duration.d = calculate(duration.h[2], 30);
        duration.n = calculate(duration.d[2], 12);
        duration.y = [duration.n[2]];
    };

    /**
     * Convert base units (milliseconds) to this unit.
     * @param {Number} n - Number of base units (milliseconds) to be converted.
     * @param {Number} m - The number by which to multiply the unit to obtain its equivalent in the base unit (milliseconds).
     * @returns {Array} [] - array of three numbers
     *      [
     *          Number = The remainder after dividing base unit
     *          Number = Divided number
     *          Number = Dividing transfer in the next step
     *      ]
     */
    const calculate = (n, m) => [Math.floor(n % m), n, Math.floor(n / m)];

    /**
     * The presentation format is changed after this call for every convert that follows
     * @param {String} format - presentation format
     */
    const changePresentationFormat = (format) => {
        if (!format && (typeof format !== 'string' || format.toString().length === 0)) return;

        presentInFormat = format;

        return properties;
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
            n: /NN|N/,
            y: /YY|Y/,
        };

        // set the presentation format
        _presentInFormat = presentInFormat;

        // set the format on the value of passed argument
        if (typeof f !== 'undefined' && typeof f === 'string' && f.toString().length > 0) _presentInFormat = f;

        /**
         * Replace matched string wit number and adding leading zero if necessary
         * @param {String} str - string to be replaced with number
         * @param {Number} sec - replacement value
         * @param {Regular expression} regex - matching value in string
         */
        replace = (str, num, regex) => {
            const m = str.match(regex);
            return m === null ? str : str.replace(m[0], addZero(num, m[0].length));
        };

        /**
         * Replacing match with value
         * @param {String} str - replace with substring of seconds
         * @param {Number} sec - Replacing found match with seconds
         */
        replaceSeconds = (str, sec) => replace(str, sec, pattern.s);

        /**
         * Replacing match with value
         * @param {String} str - replace with substring of minutes
         * @param {Number} min - Replacing found match with minutes
         */
        replaceMinutes = (str, min) => replace(str, min, pattern.m);

        /**
         * Replacing match with value
         * @param {String} str - replace with substring of hours
         * @param {Number} hours - Replacing found match with hours
         */
        replaceHours = (str, hours) => replace(str, hours, pattern.h);

        /**
         * Replacing match with value
         * @param {String} str - replace with substring of days
         * @param {Number} days - Replacing found match with days
         */
        replaceDays = (str, days) => replace(str, days, pattern.d);

        /**
         * Replacing match with value
         * @param {String} str - replace with substring of months
         * @param {Number} months - Replacing found match with months
         */
        replaceMonths = (str, months) => replace(str, months, pattern.n);

        /**
         * Replacing match with value
         * @param {String} str - replace with substring of years
         * @param {Number} years - Replacing found match with years
         */
        replaceYears = (str, years) => replace(str, years, pattern.y);

        /**
         * The last Unit is not converted
         * Example:
         *      [YY:NN:DD:HH:MM:SS] | 12345 => 00:00:00:03:25:45
         *      [NN:DD:HH:MM:SS]    | 12345 => 00:00:03:25:45
         *      [DD:HH:MM:SS]       | 12345 => 00:03:25:45
         *      [HH:MM:SS]          | 12345 => 03:25:45
         *      [MM:SS]             | 12345 => 205:45
         *      [SS]                | 12345 => 12345
         */
        if (_presentInFormat.search(pattern.s) !== -1) {
            if (_presentInFormat.search(pattern.m) === -1) {
                duration.s[0] = duration.s[1];
            } else {
                if (_presentInFormat.search(pattern.h) === -1) {
                    duration.m[0] = duration.m[1];
                } else {
                    if (_presentInFormat.search(pattern.d) === -1) {
                        duration.h[0] = duration.h[1];
                    } else {
                        if (_presentInFormat.search(pattern.n) === -1) {
                            duration.d[0] = duration.d[1];
                        } else {
                            if (_presentInFormat.search(pattern.y) === -1) {
                                duration.n[0] = duration.n[1];
                            }
                        }
                    }
                }
            }
        }

        // Format every unit
        let formattedString = _presentInFormat;
        formattedString = replaceSeconds(formattedString, duration.s[0]);
        formattedString = replaceMinutes(formattedString, duration.m[0]);
        formattedString = replaceHours(formattedString, duration.h[0]);
        formattedString = replaceDays(formattedString, duration.d[0]);
        formattedString = replaceMonths(formattedString, duration.n[0]);
        formattedString = replaceYears(formattedString, duration.y[0]);

        if (isNegative && formattedString[0] !== '-') formattedString = '-' + formattedString;

        return formattedString;
    };

    let isNegative = false;

    // Format of
    const defaultFormat = 'HH:MM:SS';
    let presentInFormat = defaultFormat;

    const resetFormat = () => { 
        presentInFormat = defaultFormat; 
        return properties;
    };

    const isInteger = (num) => /^-?[1-9][0-9]*$/.test(num.toString());
    
    const convert = (seconds) => {
        if(!isInteger(seconds)) seconds = 0;

        isNegative = false;
        if (seconds < 0) {
            isNegative = true;
            seconds = -1 * seconds;
        }

        converter(seconds);

        return properties;
    };

    const properties = {
        __proto__: null,
        convert,
        change: changePresentationFormat,
        reset: resetFormat,
        format,
    };

    return properties;
});
