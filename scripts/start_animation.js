function topAnimation() {
    const title = 'atsumarukun';
    for (const i in title) {
        $('.js_topAnimation_ttl').append(`<span>${title[i]}</span>`);
    }

    const timeline = gsap.timeline();
    timeline.fromTo('.js_topAnimation_ttl span', 0.5, {x: 50, y: 50, rotation: 90}, {x: 0, y: 0, rotation: 0, stagger: 0.1, ease: Power1.easeOut})
    .to('.js_topAnimation_bg', 1.25, {x: '100%', ease: Power4.easeOut}, 1.75)
    .to('.js_topAnimation_ttl span', 1, {color: '#000000', stagger: 0.01, ease: Power4.easeOut}, 1.75)
    .to('.js_topAnimation_ttl', 1.5, {opacity: 0, ease: Power4.easeOut}, 3)
    .to('.js_topAnimation', 0.5, {opacity: 0, ease: Power4.easeOut}, 3.5)
    .to('.js_topAnimation', 0.01, {x: '100%'}, 4);
}

topAnimation();