/**
 * @file draggable
 * @description 元素拖动指令
 */
export default {
  bind(el, binding) {
    if (binding.value !== undefined && !binding.value) return
    const header = el.querySelector('[drag-elem]')
    const container = el.querySelector('[drag-container]') || el
    header.style.cursor = 'move'
    // 获取原有属性(ie:currentStyle,firefox/chrome:getComputedStyle)
    const style = container.currentStyle || window.getComputedStyle(container, null)
    header.onmousedown = e => {
      // 鼠标按下，获取当前元素可视区的距离
      const x = e.clientX - header.offsetLeft
      const y = e.clientY - header.offsetTop
      // 获取到的值带px，正则匹配替换
      let styleL, styleT
      // 在ie中第一次获取到的值为组件自带50%，移动之后赋值为px
      if (style.left.includes('%')) {
        styleL = +document.body.clientWidth + (+style.left.replace(/%/g, '') / 100)
        styleT = +document.body.clientHeight + (+style.top.replace(/%/g, '') / 100)
      } else {
        styleL = +style.left.replace(/px/g, '')
        styleT = +style.top.replace(/px/g, '')
      }
      document.onmousemove = e => {
        el.setAttribute('dragging', true)
        // 通过事件委托，计算移动距离
        const l = e.clientX - x
        const t = e.clientY - y
        // 移动当前元素
        container.style.left = `${l + styleL}px`
        container.style.top = `${t + styleT}px`
        // 将位置传递出去
        // binding.value({ x: e.pageX, y: e.pageY })
      }
      document.onmouseup = () => {
        if (el.getAttribute('dragging') === 'true') {
          setTimeout(() => el.setAttribute('dragging', false), 0)
        }
        document.onmousemove = document.onmouseup = null
      }
    }
  }
}
