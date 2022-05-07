
$(document).on("mousemove", function(e){		
	mouseX = e.pageX;
	mouseY = e.pageY;
});
$(".link").on("mouseenter",function(){
	cursor.addClass("active");
	follower.addClass("active");
});
$(".link").on("mouseleave",function(){
	cursor.removeClass("active");
	follower.removeClass("active");
});
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

