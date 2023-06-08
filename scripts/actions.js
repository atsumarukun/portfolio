function changeColor() {
  const text_color = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--text-color");
  const background_color = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--background-color");
  const window_background_color =
    getComputedStyle(document.documentElement)
      .getPropertyValue("--window-background-color")
      .replace(" ", "") === "#21212b"
      ? "#dddddd"
      : "#21212b";
  const window_inner_background_color =
    getComputedStyle(document.documentElement)
      .getPropertyValue("--window-inner-background-color")
      .replace(" ", "") === "#282a36"
      ? "#efefef"
      : "#282a36";

  document.documentElement.style.setProperty("--text-color", background_color);
  document.documentElement.style.setProperty("--background-color", text_color);
  document.documentElement.style.setProperty(
    "--window-background-color",
    window_background_color
  );
  document.documentElement.style.setProperty(
    "--window-inner-background-color",
    window_inner_background_color
  );
}

let LASI_ID = 0;
let windows = [];
let hidden_windows = [];

function createWindow() {
  if (hidden_windows.length) {
    hidden_windows.forEach((window) => {
      window.hidden(window.Id);
    });
    hidden_windows = [];
  } else if (windows.length < 5) {
    const window = new Window(LASI_ID++, windows.length + 1);
    windows.push(window);
    window.create();
  }
}

function closeWindow(e, id) {
  e.stopPropagation();
  const window = windows.find((window) => window.Id === id);
  window.remove();
  windows.splice(windows.indexOf(window), 1);
  delete window;
}

function changeWindowSize(id) {
  const window = windows.find((window) => window.Id === id);
  window.changeSize();
}

function hideWindow(e, id) {
  e.stopPropagation();
  const window = windows.find((window) => window.Id === id);
  window.hidden();
  hidden_windows.push(window);
}

function ChangeWindowDisplayOrder(id) {
  const window = windows.find((window) => window.Id === id);
  windows
    .slice(windows.indexOf(window) + 1)
    .forEach((window) => (window.zIndex -= 1));
  window.zIndex = windows.length;
}
