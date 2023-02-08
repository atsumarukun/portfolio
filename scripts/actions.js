function changeColor() {
    const text_color = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
    const background_color = getComputedStyle(document.documentElement).getPropertyValue('--background-color');
    document.documentElement.style.setProperty('--text-color', background_color);
    document.documentElement.style.setProperty('--background-color', text_color);
}