
(function($){

    $("#block-mainnavigation ul>.menu-item").on("click",function(event){
        event.stopPropagation();
        //verificar se o elemento tem ul, se tiver da prevent
        if ( $(event.currentTarget).children("ul").length > 0) {
            event.preventDefault();
            $(event.currentTarget).toggleClass("menuDrop");
            $(event.currentTarget).find(".menu").toggleClass("active");
            console.log($(event.currentTarget).children("ul").children("li").length);
            $(".menuDrop").css("max-height", ($(event.currentTarget).children("ul").children("li").length) * 55+"px")
            $(".active").css("height", ($(event.currentTarget).children("ul").children("li").length) * 44+"px")
            
        }   
    })

    //Abrir submenu debaixo do menu-item
    
    // var menuitemCounter=document.getElementsByClassName("menu-item");

    // $("#block-mainnavigation ul>.menu-item")
    // for(var i =0; i<menuitemCounter.length;i++){
    //     menuitemCounter[i].onclick=function(event){
    //         event.preventDefault();
    //         console.log(i);
    //         $(".active").css("margin-top", (i * 44+"px"));
    //     }
    // }


})(jQuery)


