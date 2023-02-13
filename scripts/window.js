class Window {
    constructor(id, z_index) {
        this.id = id;
        this.x = 3 + this.id * 2;
        this.y = 25 + this.id * 5;
        this.window_width = 85;
        this.window_height = 27.5;
        this.z_index = z_index;
        this.is_full_size = false;
    }

    create() {
        const element = `
                        <div class="bl_window bl_window_${this.id}">
                            <div class="bl_windowBar">
                                <div class="bl_windowBar_inner">
                                    <button class="el_window_button hp_red" onClick="closeWindow()"><i class="fas fa-circle"></i></button>
                                    <button class="el_window_button hp_yellow"><i class="fas fa-circle"></i></button>
                                    <button class="el_window_button hp_green" onClick="changeWindowSize()"><i class="fas fa-circle"></i></button>
                                </div>
                            </div>
                            <div class="bl_window_inner"></div>
                        </div>
                        `
        $('.bl_window_wrapper').append(element);
        const window = $(`.bl_window_${this.id}`);
        window.css({'width': `${this.window_width}%`, 'height': `${this.window_height}%`, 'left': `${this.x}%`, 'top': `${this.y}%`});
    }

    isFullsize() {
        this.is_full_size = !this.is_full_size;
    }

    changeSize() {
        const window = $(`.bl_window_${this.id}`);
        if (this.is_full_size) {
            window.css({'width': `100%`, 'height': `100%`, 'left': '0', 'top': '0'});
        } else {
            window.css({'width': `${this.window_width}%`, 'height': `${this.window_height}%`, 'left': `${this.x}%`, 'top': `${this.y}%`});
        }
    }

    get zIndex() {
        return this.z_index;
    }
}