function changeColor() {
    const text_color = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
    const background_color = getComputedStyle(document.documentElement).getPropertyValue('--background-color');
    document.documentElement.style.setProperty('--text-color', background_color);
    document.documentElement.style.setProperty('--background-color', text_color);
}

let LASI_ID = 0;
let windows = []
let display_order = []

function createWindow() {
    if (windows.length < 5) {
        windows.push(new Window(LASI_ID, display_order.length + 1));
        display_order.push(LASI_ID++);
        windows[windows.length - 1].create();
    }
}

function closeWindow() {
    const window = $(`.bl_window_${display_order[display_order.length - 1]}`);
    window.remove();
    windows.pop();
    display_order.pop();
}

function changeWindowSize() {
    const window = windows[display_order[display_order.length - 1]];
    window.isFullsize();
    window.changeSize();
}