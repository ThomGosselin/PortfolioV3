const cursor = document.querySelector(".cursor-inner");
        const cursor2 = document.querySelector(".cursor-outer");
        document.addEventListener("mousemove", e=>{
            cursor.style.top = e.pageY + "px";
            cursor.style.left = e.pageX + "px";
 
            cursor2.style.top = e.pageY + "px";
            cursor2.style.left = e.pageX + "px";
        })
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
}();