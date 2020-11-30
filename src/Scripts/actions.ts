import { sectionState } from "./enum"
import { sectionStore } from "../stores"


export function swipeControl(node, section:sectionState) {

  node.addEventListener("mousewheel", handleSwipeControl)
  node.addEventListener("mousedown", handleSwipeControl)
  node.addEventListener("mouseup", handleSwipeControl)
  node.addEventListener("touchstart", handleSwipeControl)
  node.addEventListener("touchend", handleSwipeControl)

  let sw_prevY: number;
  function handleSwipeControl(e) {
    let changedTouch = 0;
    let eventType = e.type;
    const distance = 35;
    let direction: string;
    const sectionSize = Object.entries(sectionState).length/2;
    if(eventType === 'touchstart' || eventType === 'touchend') changedTouch = e.changedTouches[0].clientY
    else if(eventType === 'mousedown' || eventType === 'mouseup') changedTouch = e.clientY
    
    if(sw_prevY - distance > changedTouch) direction = "up";
    if(sw_prevY + distance < changedTouch) direction = "down";

    if(eventType === 'touchstart' || eventType === 'mousedown') sw_prevY = changedTouch
    if(eventType === 'touchend' || eventType === 'mouseup') {
      if(direction === "up" && section < sectionSize - 1) {
        sectionStore.update((): sectionState => section + 1)
      }
      if(direction === "down" && section > 0) {
        sectionStore.update((): sectionState => section - 1)
      }
    }
  }

  return {
    update(newSection) {
      section = newSection;
    },
    destroy() {
			node.removeEventListener('mousedown', handleSwipeControl);
			node.removeEventListener('mouseup', handleSwipeControl);
			node.removeEventListener('touchstart', handleSwipeControl);
			node.removeEventListener('touchend', handleSwipeControl);
			node.removeEventListener('mousewheel', handleSwipeControl);
    }
  }

}