# @mate-ui
> 基于 `pnpm + workspace + changeset` 构建的面向企业级多端兼容适配的一体化前端解决方案。<br/>
> 所有项目统一维护在 `packages` 目录下，同时配套api示例文档 `docs`，以及开发调试的沙盒环境 `examples`。<br/>

## 特性
- 全面支持 `typescript` (目前支持核心库)
- 以 `pnpm` 作为构建工具，并搭配 `workspace` 无缝解决工程复杂依赖
- 完善的工程化规范，包含但不限于 `husky`/`eslint`/`pretter`/`commitlint`
- 采用 `changeset` 进行多包版本管理，自动维护 `CHANGELOG` 日志
- 采用 `vuepress` 构建完善的实例文档系统
- 采用 `rollup` 构建核心库，以及采用 `webpack` 构建组件库

## 介绍
> 采用最流行的构建工具，最高效的设计理念，最简单上手的 `pnpm + workspace + changeset` 解决方案。<br/>
> 主要技术栈如下：
- 核心库采用 `typescript + rollup` 构建开发
- 组件库采用 `es6 + vue + webpack` 构建开发
- 文档库采用 `vuepress + vue + webpack` 构建开发

## 脚本
- 项目工程相关
```sh
  "preinstall": "npx only-allow pnpm"
  "prepare": "husky install"
```
- 开发文档相关
```sh
  "dev": "pnpm run -C examples serve"
  "docs:dev": "pnpm run -C docs dev"
  "docs:build": "pnpm run -C docs build"
```
- 格式化相关
```sh
  "lint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx,.json --max-warnings 0"
  "lint:fix": "eslint --fix . --ext .vue,.js,.ts,.jsx,.tsx,.json"
  "lint:utils": "eslint --fix \"./packages/utils/**\" --ext .js,.ts,.json"
  "markdownlint": "markdownlint \"./packages/**/*.md\""
  "markdownlint:fix": "markdownlint --fix \"**/*.md\""
  "format:code": "prettier -w . --cache --plugin-search-dir=."
  "pretty-quick": "pretty-quick --staged"
```
- 变更相关
```sh
  "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md"
```
- 构建相关
```sh
  "clean": "pnpm run --filter \"./packages/**\" -r --parallel clean"
  "build:type": "pnpm run --filter type build"
  "build": "pnpm run --filter \"./packages/**\" -r --parallel build"
```

- 测试相关
```sh
  "test:type": "pnpm run --filter type test"
  "test": "pnpm run --filter \"./packages/**\" -r --parallel test"
```

- 版本相关
```sh
  "preversion": "changeset"
  "version": "changeset version && pnpm install --no-frozen-lockfile && pnpm run format:code"
```
- 发布相关
```sh
  "release": "pnpm run clean && pnpm run build && changeset publish"
  "release:nobuild": "changeset publish"
```

<font color=#f81d22>`2022, Mate UI, 即将梦想起航, 未来前端风向标。`</font>
