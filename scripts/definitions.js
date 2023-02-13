// window size
let WINDOW_WIDTH = window.innerWidth;
let WINDOW_HEIGHT = window.innerHeight;
let WINDOW_HALF_WIDTH = window.innerWidth / 2;
let WINDOW_HALF_HEIGHT = window.innerHeight / 2;

// mouse position
let MOUSE_X = 0;
let MOUSE_Y = 0;

// event function
function ResizeWindow() {
    WINDOW_WIDTH = window.innerWidth;
    WINDOW_HEIGHT = window.innerHeight;
    WINDOW_HALF_WIDTH = window.innerWidth / 2;
    WINDOW_HALF_HEIGHT = window.innerHeight / 2;
}

function DocumentMouseMove(event) {
    MOUSE_X = event.clientX - WINDOW_HALF_WIDTH;
    MOUSE_Y = event.clientY - WINDOW_HALF_HEIGHT
}

function DocumentTouchStart( event ) {
    if ( event.touches.length > 1 ) {
        event.preventDefault();
        MOUSE_X = event.touches[ 0 ].pageX - WINDOW_HALF_WIDTH;
        MOUSE_Y = event.touches[ 0 ].pageY - WINDOW_HALF_HEIGHT;
    }
}

function DocumentTouchMove( event ) {
    if ( event.touches.length == 1 ) {
        event.preventDefault();
        MOUSE_X = event.touches[ 0 ].pageX - WINDOW_HALF_WIDTH;
        MOUSE_Y = event.touches[ 0 ].pageY - WINDOW_HALF_HEIGHT;
    }
}

// add event
window.addEventListener('resize', ResizeWindow);
document.addEventListener('mousemove', DocumentMouseMove);
document.addEventListener('touchstart', DocumentTouchStart);
document.addEventListener('touchmove', DocumentTouchMove);