!function(e){e("#block-mainnavigation ul>.menu-item").on("click",function(t){t.stopPropagation(),e(t.currentTarget).children("ul").length>0&&(t.preventDefault(),e(t.currentTarget).toggleClass("menuDrop"),e(t.currentTarget).find(".menu").toggleClass("active"))}),e("#menuBar_btn").on("click",function(){e("#sidebar-first").toggleClass("sidebar_inactive"),e("#content").toggleClass("content_active"),e(".menuBar_btn").toggleClass("menuBar_btn_active")}),e(document).mouseup(function(t){var n=e("#sidebar-first");!n.is(t.target)&&0===n.has(t.target).length&&n.width()>0&&(n.removeClass("sidebar_inactive"),e("#content").removeClass("content_active"),e(".menuBar_btn").removeClass("menuBar_btn_active"),t.preventDefault())}),e("#caroussel").slick({dots:!0,infinite:!0,speed:500,fade:!0,cssEase:"linear",autoplay:!0,autoplaySpeed:5e3,dots:!1,prevArrow:!1,nextArrow:!1}),e("#footer_close").on("click",function(t){e("#footer_close").toggleClass("footer_open"),e("#block-views-block-frontpage-footer-block-1").toggleClass("views-frontpage-footer-closed")}),e(".atividade-box-layout").click(function(){console.log("funca"),e(".views-field-title span>a").click()})}(jQuery);
//# sourceMappingURL=maps/scripts.js.map
