# @mate-ui/vue
> 封装Vue之通用能力(包含directives,filters,i18n,mixins,router,utils)

- 由 `Typescript` 开发，支持完善的类型推断和检查
- 支持按需加载
- 支持 `ESModule`、`CommonJS`、`UMD`等规范

## 用法
- 安装
```sh
npm install @mate-ui/vue
```
- 引入
```sh
import { clickoutside, draggable, delay } from '@mate-ui/vue'
// 在组件中引入
export default {
  directives: { clickoutside, draggable },
  mixins: [delay]
}
```

- API

- directives 指令

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| clickoutside | 点击元素区域外指令 | - | - |
| draggable | 元素拖动指令 | - | - |

- mixins 混入

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| anchor | 锚点混入(scrollToAnchor) | - | - |
| classes | 样式混入(mtClass,mtStyle) | - | - |
| delay | 延时混入(delay) | - | - |
| emitter | 事件混入(broadcast,dispatch) | - | - |
