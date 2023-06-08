class Window {
  constructor(id, z_index) {
    this.id = id;
    this.x = 3 + this.id * 2;
    this.y = 25 + this.id * 5;
    this.window_width = 750;
    this.window_height = 450;
    this.z_index = z_index;
    this.is_full_size = false;
    this.is_hide = false;
  }

  create() {
    const element = `
                        <div class="bl_window bl_window_${this.id}" onClick="ChangeWindowDisplayOrder(${this.id})">
                            <div class="bl_windowBar">
                                <div class="bl_windowBar_inner">
                                    <button class="el_window_button hp_red" onClick="closeWindow(arguments[0], ${this.id})"><i class="fas fa-circle"></i></button>
                                    <button class="el_window_button hp_yellow" onClick="hideWindow(arguments[0], ${this.id})"><i class="fas fa-circle"></i></button>
                                    <button class="el_window_button hp_green" onClick="changeWindowSize(${this.id})"><i class="fas fa-circle"></i></button>
                                </div>
                            </div>
                            <div class="bl_window_inner"></div>
                        </div>
                        `;
    $(".bl_window_wrapper").append(element);
    const window = $(`.bl_window_${this.id}`);
    window.css({
      width: `${this.window_width}px`,
      height: `${this.window_height}px`,
      left: `${this.x}%`,
      top: `${this.y}%`,
    });
  }

  changeSize() {
    this.is_full_size = !this.is_full_size;
    const window = $(`.bl_window_${this.id}`);
    if (this.is_full_size) {
      window.css({ width: `100%`, height: `100%`, left: "0", top: "0" });
    } else {
      window.css({
        width: `${this.window_width}%`,
        height: `${this.window_height}%`,
        left: `${this.x}%`,
        top: `${this.y}%`,
      });
    }
  }

  hidden() {
    this.is_hide = !this.is_hide;
    const window = $(`.bl_window_${this.id}`);
    if (this.is_hide) {
      window.css({ visibility: "hidden" });
    } else {
      window.css({ visibility: "visible" });
    }
  }

  remove() {
    const window = $(`.bl_window_${this.id}`);
    window.remove();
  }

  get Id() {
    return this.id;
  }

  get zIndex() {
    return this.z_index;
  }

  set zIndex(z_index) {
    this.z_index = z_index;
    const window = $(`.bl_window_${this.id}`);
    window.css({ "z-index": this.z_index });
  }
}
