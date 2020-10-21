// Sorting an array by the value of ID 
export function sortArrayByValue(arr, sortDirection) {
  function compare(a, b) {
    if (sortDirection === 'asc') {
      return a.id - b.id;
    } else if (sortDirection === 'desc') {
      return b.id - a.id;
    }
  }
  return arr.sort(compare);
}


// Toggle fullscreen display of the element
export function toggleFullscreen(element) {
  const fullscreenElement = document.fullscreenElement
    || document.mozFullScreenElement
    || document.webkitFullscreenElement;

  function activateFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();        // W3C spec
    }
    else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();     // Firefox
    }
    else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();  // Safari
    }
    else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();      // IE/Edge
    }
  }

  function deactivateFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }


  // Toggle
  if (fullscreenElement) { // Fullscreen is activated
    deactivateFullscreen();
  } else {
    activateFullscreen(element);
  }
}