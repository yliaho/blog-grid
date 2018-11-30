/** @type KeyframeAnimationOptions */
const defaultKeyframeAnimationOptions = {
  // duration in ms
  duration: 1000,
  // alternate the loop clock- and counter clock wise
  direction: 'alternate',
  // repeat the animation infinitely
  iterations: Infinity
}

const defaultKeyframes = ['red', 'green', 'blue']

/**
 * Make a sweet ass `background-color` CSS animation for any element
 * @param {Element | HTMLElement} target the target element on which to apply backgroundColor animation
 * @param {Array<String> } colors the colors to iterate on
 * @param {KeyframeAnimationOptions} keyframeAnimationOptions
 */
export function animateBackgroundColor(
  target,
  colors = defaultKeyframes,
  keyframeAnimationOptions = defaultKeyframeAnimationOptions
) {
  if (!target) {
    console.error('no target specified')
    return
  }

  target.animate(
    colors.map(color => ({ backgroundColor: color })),
    keyframeAnimationOptions
  )
}
