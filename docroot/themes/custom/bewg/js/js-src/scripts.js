
(function($){

    $("#block-mainnavigation ul>.menu-item").on("click",function(event){
        event.stopPropagation();
        //verificar se o elemento tem ul, se tiver da prevent
        if ( $(event.currentTarget).children("ul").length > 0) {
            event.preventDefault();
            $(event.currentTarget).toggleClass("menuDrop");
            $(event.currentTarget).find(".menu").toggleClass("active");
               
        }   
    });

    $("#menuBar_btn").on("click",function(){
        $("#sidebar-first").toggleClass("sidebar_inactive");
        $("#content").toggleClass("content_active");
        $(".menuBar_btn").toggleClass("menuBar_btn_active");
    });

    $('#caroussel').slick();

})(jQuery)


