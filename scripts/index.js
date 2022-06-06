const animation_text = "atsumarukun";
const el_animation_text = document.getElementsByClassName("el_animation_text")[0];
arry = animation_text.split("");
for (var i = 0; i < arry.length; i++) {
    var js_animation_text = document.createElement("span");
    el_animation_text.appendChild(js_animation_text);
    js_animation_text.className = "js_animation_text";
    js_animation_text.textContent = arry[i];
}

const el_animation_underline = document.getElementsByClassName("el_animation_underline")[0];
const js_animation_underline = document.createElement("hr");
el_animation_underline.appendChild(js_animation_underline);
js_animation_underline.className = "js_animation_underline"

tl = new TimelineMax();
tl.staggerFromTo('.js_animation_text', 0.75, {opacity: 0, x:'5em', y: '1.2em', rotateZ: 180}, {opacity: 1, x:0, y:0, rotateZ: 0, ease: Power2.easeInOut}, 0.05)
.addLabel('time')
.to('.js_animation_underline',0.25, {width: '100%', ease: Power2.easeInOut}, 'time+=0.5')
.to('.js_animation_text',0.5, {y: '2rem', ease: Power2.easeInOut}, 'time+=0.85')
.to('.js_animation_underline',0.25, {x: "100%", ease: Power2.easeInOut}, 'time+=1')
.to('.ly_animation',0.75, {width: 0, ease: Power2.easeInOut}, 'time+=1.5')