# Seconds Formater

Convert a number in seconds to a formated duration string.

## Install

Via [npm](http://npmjs.com):

```sh
$ npm install seconds-formater
```

Via [Yarn](http://bower.io):

```sh
$ yarn add seconds-formater
```

## Usage

Import into the script

```js
var sf = require('format-duration');
```

Default format is: HH:MM:SS, change it if you want different output

```js
sf.convert(7).format(); // 00:00:07
sf.convert(451).format(); // 00:07:31
sf.convert(1518).format(); // 0:25:18
sf.convert(9518).format(); // 02:38:38
sf.convert(119518).format(); // 33:11:58
```

Foramt changed

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
sf.convert(-32).format('-MM:SS'); // -00:32

// Representing 451 seconds in different formats
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
sf.convert(9518).format('M:S'); // 158:38
sf.convert(9518).format('M:SS'); // 158:38
sf.convert(9518).format('MM:SS'); // 158:38
sf.convert(9518).format('-H:MM:SS'); // -2:38:38
sf.convert(-9518).format('H:MM:SS'); // -2:38:38
sf.convert(9518).format('HH:MM:SS'); // 02:38:38
sf.convert(9518).format('DD:HH:MM:SS'); // 00:2:38:38

// Representing 119518 seconds in different formats
sf.convert(119518).format('S'); // 119518
sf.convert(119518).format('M:S'); // 1991:58
sf.convert(119518).format('-M:SS'); // -1991:58
sf.convert(119518).format('MM:SS'); // 1991:58
sf.convert(-119518).format('H:MM:SS'); // -33:11:58
sf.convert(119518).format('HH:MM:SS'); // 33:11:58
sf.convert(119518).format('DD:HH:MM:SS'); // 01:09:11:58
sf.convert(119518).format('D:HH:MM:SS'); // 1:09:11:58

// Thext can also be used
sf.convert(119518).format('D day HH hours M min S s'); // 1 day 09 hours 11 min 58 s
sf.convert(119518).format('DDday Hhours Mmin Ss'); // 01day 9hours 11min 58s
sf.convert(119518).format('Dday Hhours Mmin Ss'); // 1day 9hours 11min 58s
sf.convert(119518).format('H hours M min S sec'); // 33 hours 11 min 58 sec
sf.convert(119518).format('M min S sec'); // 1991 min 58 sec
sf.convert(119518).format('S sec'); // 119518 sec
```

## License

[ISC](LICENSE.md)
