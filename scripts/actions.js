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
  const window_text_color =
    getComputedStyle(document.documentElement)
      .getPropertyValue("--window-text-color")
      .replace(" ", "") === "#efefef"
      ? "#222222"
      : "#efefef";

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
  document.documentElement.style.setProperty(
    "--window-text-color",
    window_text_color
  );
}

let LASI_ID = 0;
let windows = [];
let hidden_windows = [];
let error_window = undefined;

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
  } else if (!error_window) {
    error_window = new ErrorWindow(LASI_ID++, windows.length + 1);
    error_window.create();
  }
}

function closeWindow(e, id) {
  e.stopPropagation();
  if (error_window && error_window.Id === id) {
    error_window.remove();
    error_window = undefined;
  } else if (!error_window) {
    const window = windows.find((window) => window.Id === id);
    window.remove();
    windows.splice(windows.indexOf(window), 1);
  }
}

function changeWindowSize(id) {
  if (!error_window) {
    const window = windows.find((window) => window.Id === id);
    window.changeSize();
  }
}

function hideWindow(e, id) {
  if (!error_window) {
    e.stopPropagation();
    const window = windows.find((window) => window.Id === id);
    window.hidden();
    hidden_windows.push(window);
  }
}

function changeWindowDisplayOrder(id) {
  if (!error_window) {
    const window = windows.find((window) => window.Id === id);
    windows
      .slice(windows.indexOf(window) + 1)
      .forEach((window) => (window.zIndex -= 1));
    window.zIndex = windows.length;
  }
}

function changeWindowBody(id, status) {
  if (!error_window) {
    const window = windows.find((window) => window.Id === id);
    window.Status = status;
  }
}
