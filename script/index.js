/**
 * Wait for the DOM tree to fully load before
 * accessing any elements
 */
document.addEventListener('DOMContentLoaded', () => {
  bodyBgAnimation(['red', 'green', 'blue'])
})

/**
 * Make a sweet ass animation for the `body` background-color
 * @param {Array<String>} colors the colors to iterate on
 */
function bodyBgAnimation(colors) {
  /** @type HTMLElement */
  const body = document.body

  /** @type KeyframeAnimationOptions */
  const keyframeAnimationOptions = {
    // duration in ms
    duration: 1000,
    // alternate the loop clock- and counter clock wise
    direction: 'alternate',
    // repeat the animation infinitely
    iterations: Infinity,
  }

  
  body.animate(
    colors.map(color => ({ backgroundColor: color })),
    keyframeAnimationOptions
  )
}