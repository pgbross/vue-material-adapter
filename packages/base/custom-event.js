export function emitCustomEvent(el, evtType, evtData, shouldBubble = false) {
  if (el) {
    evtType = evtType.toLowerCase();

    const evt =
      typeof CustomEvent === 'function'
        ? new CustomEvent(evtType, {
            detail: evtData,
            bubbles: shouldBubble,
          })
        : createCustomEvent(evtType, shouldBubble, evtData);

    el.dispatchEvent(evt);
  }
}

// ===
// Private functions
// ===

const createCustomEvent = (evtType, shouldBubble, evtData) => {
  const evt = document.createEvent('CustomEvent');
  return evt.initCustomEvent(evtType, shouldBubble, false, evtData);
};
