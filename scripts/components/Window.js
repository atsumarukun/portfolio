function WindowComponent(id, status) {
  return `
    <div class="ly_window bl_window bl_window_${id}" onClick="changeWindowDisplayOrder(${id})">
      <div class="ly_windowBar bl_windowBar">
        <button class="el_window_button hp_red" onClick="closeWindow(arguments[0], ${id})"><i class="fas fa-circle"></i></button>
        <button class="el_window_button hp_yellow" onClick="hideWindow(arguments[0], ${id})"><i class="fas fa-circle"></i></button>
        <button class="el_window_button hp_green" onClick="changeWindowSize(${id})"><i class="fas fa-circle"></i></button>
      </div>
      <div class="ly_window_inner bl_window_inner">
        <div class="ly_windowMenu bl_windowMenu">
        <button class="ly_windowMenuItem el_windowMenuItem" onClick="changeWindowBody(${id}, ${
    Window.Status.sns
  })">
          <i class="fa fa-globe"></i>
          <p>SNS</p>
        </button>
        <button class="ly_windowMenuItem el_windowMenuItem" onClick="changeWindowBody(${id}, ${
    Window.Status.about
  })">
          <i class="fas fa-user"></i>
          <p>About</p>
        </button>
        </div>
        <div class="ly_windowBody bl_windowBody">
          ${WindowBodyComponent(status)}
        </div>
      </div>
    </div>
  `;
}
