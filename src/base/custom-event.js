export function emitCustomEvent(
  element,
  eventType,
  eventData,
  shouldBubble = false,
) {
  if (element) {
    eventType = eventType.toLowerCase();

    const event_ =
      typeof CustomEvent === 'function'
        ? new CustomEvent(eventType, {
            detail: eventData,
            bubbles: shouldBubble,
          })
        : createCustomEvent(eventType, shouldBubble, eventData);

    element.dispatchEvent(event_);
  }
}

// ===
// Private functions
// ===

const createCustomEvent = (eventType, shouldBubble, eventData) => {
  const event_ = document.createEvent('CustomEvent');
  return event_.initCustomEvent(eventType, shouldBubble, false, eventData);
};
