!function(e){e(document).on("click",function(e){console.log(e.target)}),e("#block-mainnavigation ul>.menu-item").on("click",function(n){n.preventDefault(),console.log(n.currentTarget),e(n.currentTarget).find(".menu")?e(n.currentTarget).find(".menu").toggleClass("active"):e(n.currentTarget).find(".active").removeClass("menu")})}(jQuery);
//# sourceMappingURL=maps/scripts.js.map
