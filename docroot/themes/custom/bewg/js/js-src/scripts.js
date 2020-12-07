
(function($){
    $(document).on("click",function(event){
        console.log(event.target)
    })

    $("#block-mainnavigation ul>.menu-item").on("click",function(event){
        event.preventDefault();
        console.log($(event.currentTarget).find(".menu"));
        if($(event.currentTarget).find(".menu")!= ""){
            $(event.currentTarget).find(".menu").toggleClass("active");
        }
        else{
            $(event.currentTarget).find(".active").removeClass("menu");  
        }
        
    })


})(jQuery)


