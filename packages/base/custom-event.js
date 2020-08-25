export function emitCustomEvent(el, evtType, evtData, shouldBubble = false) {
  const createCustomEvent = () => {
    const evt = document.createEvent('CustomEvent');
    return evt.initCustomEvent(evtType, shouldBubble, false, evtData);
  };

  const evt =
    typeof CustomEvent === 'function'
      ? new CustomEvent(evtType, {
          detail: evtData,
          bubbles: shouldBubble,
        })
      : createCustomEvent();

  el.dispatchEvent(evt);
}
