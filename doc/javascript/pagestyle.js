const colorButtons = [...document.querySelectorAll('.colorButton')];
document.addEventListener('click', e => {
    if (!colorButtons.includes(e.target)) return;
    document.body.style.background = e.target.textContent;
});