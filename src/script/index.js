import { animateBackgroundColor } from './animateBackgroundColor'

/** @type EventListenerOrEventListenerObject */
const onDOMContentLoaded = () => {
  animateBackgroundColor(document.body, ['red', 'green', 'blue'])
}

/**
 * Wait for the DOM tree to fully load before
 * accessing any elements
 */
document.addEventListener('DOMContentLoaded', onDOMContentLoaded)
