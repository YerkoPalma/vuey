/* @flow */
export function createStyleSheet (): CSSStyleSheet {
  // Create the <style> tag
  let style: any = document.createElement('style')

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
    for(let key in rules) {
      ruleString += `${key}: ${rules[key]};`
    }
    ruleString += '}'
  } else if (typeof rules === 'string') {
  	ruleString = `{ ${rules} }`
  }

	if(sheet.hasOwnProperty('insertRule')) {
		sheet.insertRule(`${selector} ${ruleString}`, index)
	}
	else if(sheet.hasOwnProperty('addRule')) {
		sheet.addRule(selector, ruleString, index)
	}
}

export function addKeyframeAnimation(sheet: CSSStyleSheet, name: string, rules: Object) {
  // make the string
  let animation: string
  if (rules.from && rules.to) {
    animation =
    `@keyframes ${name} {
      from {
        ${rules.from}
      }
      to {
        ${rules.to}
      }
    }`
  }

  if(sheet.hasOwnProperty('insertRule')) {
		sheet.insertRule(animation, index)
	}
}
