// window size
let WINDOW_WIDTH = window.innerWidth;
let WINDOW_HEIGHT = window.innerHeight;
let WINDOW_HALF_WIDTH = window.innerWidth / 2;
let WINDOW_HALF_HEIGHT = window.innerHeight / 2;

// mouse position
let MOUSE_X = 0;
let MOUSE_Y = 0;

// event function
function resizeWindow() {
    WINDOW_WIDTH = window.innerWidth;
    WINDOW_HEIGHT = window.innerHeight;
    WINDOW_HALF_WIDTH = window.innerWidth / 2;
    WINDOW_HALF_HEIGHT = window.innerHeight / 2;
}

function documentMouseMove(event) {
    MOUSE_X = event.clientX - WINDOW_HALF_WIDTH;
    MOUSE_Y = event.clientY - WINDOW_HALF_HEIGHT
}

function documentTouchStart( event ) {
    if ( event.touches.length > 1 ) {
        event.preventDefault();
        MOUSE_X = event.touches[ 0 ].pageX - WINDOW_HALF_WIDTH;
        MOUSE_Y = event.touches[ 0 ].pageY - WINDOW_HALF_HEIGHT;
    }
}

function documentTouchMove( event ) {
    if ( event.touches.length == 1 ) {
        event.preventDefault();
        MOUSE_X = event.touches[ 0 ].pageX - WINDOW_HALF_WIDTH;
        MOUSE_Y = event.touches[ 0 ].pageY - WINDOW_HALF_HEIGHT;
    }
}

// add event
window.addEventListener('resize', resizeWindow);
document.addEventListener('mousemove', documentMouseMove);
document.addEventListener('touchstart', documentTouchStart);
document.addEventListener('touchmove', documentTouchMove);