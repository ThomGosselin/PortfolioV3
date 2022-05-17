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

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });