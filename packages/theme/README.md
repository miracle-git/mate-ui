# @mate-ui/theme
[![npm](https://img.shields.io/npm/v/mate-ui.svg)](https://www.npmjs.com/package/mate-ui)

> Theme generator cli tool for Mate-UI.

## Usage

> Usage: mt [options]

|       Options            |            Usage         |
| ------------------------ | ------------------------ |
| -h, --help               | output usage information |
| -V, --version            | output the version number |
| -i, --init [filePath]     | init variables file |
| -w, --watch              | watch variables changes then build |
| -o, --output [filePath]   | output path |
| -m, --minimize           | compress file |
| -b, --browsers [items]   | set browsers |

## Installation
install local or global
```shell
npm i @mate-ui/theme -D
```

install `theme-grace`
```shell
npm i @mate-ui/theme-grace -D
```

## CLI
```shell
# init variables file
mt --init [file path]

# watch then build
mt --watch [--config variable file path] [--out theme path]

# build
mt [--config variable file path] [--out theme path] [--minimize]
```

## Node API
```javascript
var mt = require('@mate-ui/theme')

// watch mode
mt.watch({
  config: 'vars/path',
  out: 'dist/path'
})

// build
mt.run({
  config: 'vars/path',
  out: 'dist/path',
  minimize: true
})
```

## Options
### config
Variable file path, default `./mate-ui-vars.css`.

### out
Theme output path, default `./theme`.

### minimize
Compressed file.

### browsers
set browsers, default `['ie > 9', 'last 2 versions']`.

### watch
watch variable file changes then build.

### components
A lists of components that you want to generate themes for.  All by default.

## Config
You can configure some options in `@mate-ui/theme` by putting it in package.json:
```json
{
  "@mate-ui/theme": {
    "browsers": ["ie > 9", "last 2 versions"],
    "out": "./theme",
    "config": "./mate-ui-vars.css",
    "theme": "@mate-ui/theme-grace",
    "minimize": false,
    "components": ["button", "input"]
  }
}
```

## License
MIT
