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

var cursor = $(".cursor"),
		follower = $(".cursor-follower");

var posX = 0,
		posY = 0;
var mouseX = 0,
		mouseY = 0;

TweenMax.to({}, 0.016, {
	repeat: -1,
	onRepeat: function(){
		posX += (mouseX - posX) / 9;
		posY += (mouseY - posY) / 9;
		
		TweenMax.set(follower, {
			css: {
				left: posX - 12,
				top: posY - 12
			}
		});
		TweenMax.set(cursor, {
			css: {
				left: mouseX,
				top: mouseY
			}
		});
	}	
})

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