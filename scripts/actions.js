function changeColor() {
    const text_color = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
    const background_color = getComputedStyle(document.documentElement).getPropertyValue('--background-color');
    const window_background_color = getComputedStyle(document.documentElement).getPropertyValue('--window-background-color').replace(' ', '') === '#21212b' ? '#dddddd' : '#21212b';
    const window_inner_background_color = getComputedStyle(document.documentElement).getPropertyValue('--window-inner-background-color').replace(' ', '') === '#282a36' ? '#efefef' : '#282a36';

    document.documentElement.style.setProperty('--text-color', background_color);
    document.documentElement.style.setProperty('--background-color', text_color);
    document.documentElement.style.setProperty('--window-background-color', window_background_color);
    document.documentElement.style.setProperty('--window-inner-background-color', window_inner_background_color);
}

let LASI_ID = 0;
let windows = [];
let display_order = [];
let hidden_windows = [];

function createWindow() {
    if (hidden_windows.length) {
        hidden_windows.forEach((window) => {
            window.hidden(window.Id);
        });
        hidden_windows = [];
    } else if (windows.length < 5) {
        windows.push(new Window(LASI_ID, display_order.length + 1));
        display_order.push(LASI_ID++);
        windows[windows.length - 1].create();
    }
}

function closeWindow(e, id) {
    e.stopPropagation();
    const window = $(`.bl_window_${id}`);
    window.remove();
    windows.splice(id, 1);
    display_order.splice(display_order.indexOf(id), 1);
    display_order.forEach((v, i) => {
        windows.forEach((window) => {
            if (window.id == v) window.zIndex = i;
        });
    });
}

function changeWindowSize(e, id) {
    const window = windows[id];
    window.changeSize();
}

function hideWindow(e, id) {
    e.stopPropagation();
    const window = windows[id];
    window.hidden();
    hidden_windows.push(window)
}

function ChangeWindowDisplayOrder(id) {
    display_order = display_order.slice(0, id).concat(display_order.slice(id + 1));
    display_order.push(id);
    display_order.forEach((v, i) => {
        windows.forEach((window) => {
            if (window.id == v) window.zIndex = i;
        });
    });
}