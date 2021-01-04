
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
        var container = $("#sidebar-first");
        container.removeClass("sidebar_inactive");
        $("#content").removeClass("content_active");
        $(".menuBar_btn").removeClass("menuBar_btn_active");
    });

    $(document).mouseup(function(e){
        var container = $("#sidebar-first");
        var checkMenuItem = false;
        var menuItemArray = (e.target.parentNode.className.split(/\s+/));

        for(var i=0;i<menuItemArray.length; i++){
            if(menuItemArray[i]=="menu-item"){
                console.log(i);
                checkMenuItem = true;
            }
        }


        // If the target of the click isn't the container
        if(!container.is(e.target) && container.width()>0 && checkMenuItem!=true){
            $("#sidebar-first").toggleClass("sidebar_inactive");
            $("#content").toggleClass("content_active");
            $(".menuBar_btn").toggleClass("menuBar_btn_active");
            e.preventDefault();
        }   
        
    });

      //botao de dar close e abrir footer front_page
      $("#footer_close").on("click",function(event){
        $("#footer_close").toggleClass("footer_open");
        $('#block-views-block-frontpage-footer-block-1').toggleClass('views-frontpage-footer-closed');

      })

      //click na Atividade Box
      $('.atividade-box-layout').click(function(event){
          console.log("funca");
          window.location = $(this).find("a").first().attr("href");
      })

      //click na sustentabilidade box
      $('.sustentabilidade-column').click(function(event){
        console.log("funca");
        window.location = $(this).find("a").first().attr("href");
    })

    //verificação dos items da sustentabilidade
   if($('.sustentabilidade-column').length % 2 == 1){
        $('.sustentabilidade-column').last().toggleClass("lastTypeColumn");
   }else{
       
   }

   //remover o hover do footer
   $("views-table tbody tr").unbind('mouseenter').unbind('mouseleave');


})(jQuery)


