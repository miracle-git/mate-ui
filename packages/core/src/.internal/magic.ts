export const fixed = (num: number) => {
  if (('' + num).indexOf('.') >= 0) {
    num = parseFloat(num.toFixed(8))
  }
  return num
}

export const degree = (max: number, min: number, step: number, symmetry: boolean) => {
  let maxi = parseInt((max / step + 1) + '') * step
  let mini = parseInt((min / step - 1) + '') * step
  if (max === 0) maxi = 0
  if (min === 0) mini = 0
  if (symmetry && maxi * mini < 0) {
    const temp = Math.max(Math.abs(maxi), Math.abs(mini))
    maxi = temp
    mini = -temp
  }
  return { maxi, mini }
}
