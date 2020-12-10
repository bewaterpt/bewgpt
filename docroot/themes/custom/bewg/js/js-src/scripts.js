
(function($){

    $("#block-mainnavigation ul>.menu-item").on("click",function(event){
        //verificar se o elemento tem ul, se tiver da prevent
        if ( $(event.currentTarget).children("ul").length > 0 && $(event.currentTarget).children("li").length == 0) {
            console.log("ver: "+$(event.currentTarget).children("ul").length); 
            console.log("clicked: "+$(event.target).text());
            event.preventDefault();
            $(event.currentTarget).toggleClass("menuDrop");
            $(event.currentTarget).find(".menu").toggleClass("active");
            alert("erro")
        }
        else{
           alert("certo")
           console.log("ver: "+$(event.currentTarget).children("ul").length); 
        }
        
        
        
    })


})(jQuery)


