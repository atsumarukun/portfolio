const animation_text = "test";
const ly_animation_text = document.getElementsByClassName("ly_animation_text")[0];
arry = animation_text.split("");
for (var i = 0; i < arry.length; i++) {
    var el_animation_text = document.createElement("span");
    ly_animation_text.appendChild(el_animation_text);
    el_animation_text.className = "el_animation_text";
    el_animation_text.textContent = arry[i];
}

tl = new TimelineMax();
tl.staggerFromTo('.el_animation_text', 0.75, {opacity: 0, x:'5em', y: '1.2em', rotateZ: 180}, {opacity: 1, x:0, y:0, rotateZ: 0, ease: Power2.easeInOut}, 0.05)