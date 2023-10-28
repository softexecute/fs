$(".menu-close-btn").click(function () {
    MenuBarToggle();
});
$(".menu-toggle-btn").click(function () {
    MenuBarToggle();
})
function MenuBarToggle() {
    $(".top-nav").toggleClass("nav-opened");
    $(".body-content").toggleClass("menu-opened");
}

jQuery("li.menu-item.has-children").click(function () {
/*    jQuery(this).children("ul").slideDown(500);*/
    jQuery(this).toggleClass("active");
})

jQuery(".menu-item.has-children").each(function () {
    if (jQuery(this).children("ul").children("li").length <= 0) {
        jQuery(this).hide();
    }
})
