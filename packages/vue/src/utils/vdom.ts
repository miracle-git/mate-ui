import { $s } from '@mate-ui/util'

export function addClass(el, cls = '') {
  if (!el || !cls) return
  const classes = cls.split(' ')
  let current = el.className
  for (let i = 0, len = classes.length; i < len; i++) {
    const name = classes[i]
    if (!name) continue
    if (el.classList) {
      el.classList.add(name)
    } else if (!hasClass(el, name)) {
      current += ' ' + name
    }
  }
  if (!el.classList) {
    el.setAttribute('class', current)
  }
}

export function removeClass(el, cls) {
  if (!el || !cls) return
  const classes = cls.split(' ')
  let current = ' ' + el.className + ' '
  for (let i = 0, len = classes.length; i < len; i++) {
    const name = classes[i]
    if (!name) continue
    if (el.classList) {
      el.classList.remove(name)
    } else if (hasClass(el, name)) {
      current = current.replace(' ' + name + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.setAttribute('class', $s.trim(current))
  }
}

export function hasClass(el, cls) {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1) {
    throw new Error('类名不应该包含空格')
  }
  if (el.classList) {
    return el.classList.contains(cls)
  }
  return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
}
