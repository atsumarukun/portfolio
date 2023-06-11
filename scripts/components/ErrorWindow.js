function ErrorWindowComponent(id, text) {
  return `
      <div class="ly_window bl_window bl_window_${id}" onClick="changeWindowDisplayOrder(${id})">
        <div class="ly_windowBar bl_windowBar">
          <button class="el_window_button hp_red" onClick="closeWindow(arguments[0], ${id})"><i class="fas fa-circle"></i></button>
        </div>
        <div class="ly_window_inner bl_window_inner">
          <div class="ly_errorWindowBody bl_errorWindowBody">
            <p class="hp_red">エラー</p>
            <p>${text}</p>
          </div>
        </div>
      </div>
    `;
}
