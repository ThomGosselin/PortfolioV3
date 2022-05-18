var app = function () {
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
        body = document.querySelector('body');
        menu = document.querySelector('.menu-icon');
        menuItems = document.querySelectorAll('.nav__list-item');
        applyListeners();
    };
    var applyListeners = function applyListeners() {
        menu.addEventListener('click', function () {
            return toggleClass(body, 'nav-active');
        });
    };
    var toggleClass = function toggleClass(element, stringClass) {
        if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
    };
    init();
}
();

let buttonCV = document.querySelector(".buttonCV");
let CV = document.querySelector(".CV");
let close = document.querySelector(".close");
buttonCV.onclick = function(){
    buttonCV.classList.add('active');
    CV.classList.add('active');
}
close.onclick = function(){
    buttonCV.classList.remove('active');
    CV.classList.remove('active');
}