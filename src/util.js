/* @flow */
export function createStyleSheet (): CSSStyleSheet {
  // Create the <style> tag
  const style: any = document.createElement('style')

  // Add a media (and/or media query) here if you'd like!
  style.setAttribute('media', 'screen')
  // style.setAttribute("media", "only screen and (max-width : 1024px)")

  // WebKit hack :(
  style.appendChild(document.createTextNode(''))

  // Add the <style> element to the page
  document.head.appendChild(style)

  return style.sheet
}

export function addCssRule (sheet: CSSStyleSheet, selector: any, rules: string, index: number = -1) {
  let ruleString: string = ''
  if (typeof rules === 'object') {
    ruleString = '{ '
    for (const key in rules) {
      ruleString += `${key}: ${rules[key]};`
    }
    ruleString += '}'
  } else if (typeof rules === 'string') {
    ruleString = `{ ${rules} }`
  }

  if (sheet.hasOwnProperty('insertRule')) {
    sheet.insertRule(`${selector} ${ruleString}`, index)
  }
}
