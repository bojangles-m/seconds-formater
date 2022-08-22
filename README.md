# Seconds Formater

Convert seconds into a formatted string from days to months to years.

Now supports TypeScript

## Install

```js
$ npm i seconds-formater

// OR
$ pnpm add seconds-formater

// OR
$ yarn add seconds-formater
```

## Usage

Import into the script

```js
var sf = require('seconds-formater');

// OR
import sf from 'seconds-formater';
```

Default format is: HH:MM:SS, change it if you want different output

```js
sf.convert(7).format(); // 00:00:07
sf.convert(451).format(); // 00:07:31
sf.convert(1518).format(); // 0:25:18
sf.convert(9518).format(); // 02:38:38
sf.convert(119518).format(); // 33:11:58
sf.convert(3159318).format(); // 877:35:18
sf.convert(73159318).format(); // 20322:01:58
```

Presentation format is changed after this call for every convert that follows

```js
// We change format
sf.change('-MM:SS');
sf.convert(1143).format(); // -19:03
sf.convert(8734).format(); // -145:34
sf.convert(111).format(); // -01:51
sf.convert(65423).format(); // -1090:23

// Back to default format
sf.reset();
sf.convert(783).format(); // 00:13:03
```

Formatted output set for every call.

```js
// 7 seconds in different formats
sf.convert(7).format('S'); // 7
sf.convert(7).format('SS'); // 07
sf.convert(7).format('M:SS'); // 0:07
sf.convert(7).format('MM:SS'); // 00:07
sf.convert(7).format('-MM:SS'); // -00:07

// Representing 32 seconds in different formats
sf.convert(32).format('S'); // 32
sf.convert(32).format('SS'); // 32
sf.convert(32).format('M:SS'); // 0:32
sf.convert(32).format('-MM:SS'); // -00:32
sf.convert(-32).format('MM:SS'); // -00:32

// Representing 451 seconds in different formats
sf.convert(451).format(); // 00:07:31
sf.convert(451).format('S'); // 451
sf.convert(451).format('SS'); // 451
sf.convert(451).format('-M:SS'); // -7:31
sf.convert(-451).format('MM:SS'); // -07:31

// Representing 1518 seconds in different formats
sf.convert(1518).format('M:SS'); // 25:18
sf.convert(1518).format('MM:SS'); // 25:18
sf.convert(-1518).format('H:MM:SS'); // -0:25:18
sf.convert(1518).format('HH:MM:SS'); // 00:25:18

// Representing 9518 seconds in different formats
sf.convert(9518).format(); // 02:38:38
sf.convert(9518).format('M:S'); // 158:38
sf.convert(9518).format('M:SS'); // 158:38
sf.convert(9518).format('MM:SS'); // 158:38
sf.convert(9518).format('-H:MM:SS'); // -2:38:38
sf.convert(-9518).format('H:MM:SS'); // -2:38:38
sf.convert(9518).format('HH:MM:SS'); // 02:38:38
sf.convert(9518).format('DD:HH:MM:SS'); // 00:02:38:38

// Representing 119518 seconds in different formats
sf.convert(119518).format('S'); // 119518
sf.convert(119518).format('M:S'); // 1991:58
sf.convert(119518).format('-M:SS'); // -1991:58
sf.convert(119518).format('MM:SS'); // 1991:58
sf.convert(-119518).format('H:MM:SS'); // -33:11:58
sf.convert(119518).format(); // 33:11:58
sf.convert(119518).format('DD:HH:MM:SS'); // 01:09:11:58
sf.convert(119518).format('D:HH:MM:SS'); // 1:09:11:58

// It can also be combined with the text
sf.convert(119518).format('D day HH hours M min S s'); // 1 day 09 hours 11 min 58 s
sf.convert(119518).format('DDday Hhours Mmin Ss'); // 01day 9hours 11min 58s
sf.convert(119518).format('Dday Hhours Mmin Ss'); // 1day 9hours 11min 58s
sf.convert(119518).format('H hours M min S sec'); // 33 hours 11 min 58 sec
sf.convert(119518).format('M min S sec'); // 1991 min 58 sec
sf.convert(119518).format('S sec'); // 119518 sec

// Representing 73159318, 3159318 seconds in different formats
sf.convert(3159318).format('-N:DD:HH:MM:SS'); // -1:06:13:35:18
sf.convert(3159318).format('N month D days HH hours M min S s'); // 1 month 6 days 13 hours 35 min 18 s

sf.convert(73159318).format('YY:NN:DD:HH:MM:SS'); // 02:04:06:18:01:58
sf.convert(73159318).format('Y years N month D days HH hours M min S s'); // 2 years 4 month 6 days 18 hours 1 min 58 s
```

## License

[MIT](LICENSE)
