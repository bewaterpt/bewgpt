
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
    //botao do menu abrir
    $("#menuBar_btn").on("click",function(){
        $("#sidebar-first").toggleClass("sidebar_inactive");
        $("#content").toggleClass("content_active");
        $(".menuBar_btn").toggleClass("menuBar_btn_active");
    });

    $(document).mouseup(function(e){
        var container = $("#sidebar-first");
        console.log("entrei");
        // If the target of the click isn't the container
        if(!container.is(e.target) && container.has(e.target).length === 0 && container.width()>0){
            container.removeClass("sidebar_inactive");
            $("#content").removeClass("content_active");
            $(".menuBar_btn").removeClass("menuBar_btn_active");
           
        }
    });


    $('#caroussel').slick();

})(jQuery)


