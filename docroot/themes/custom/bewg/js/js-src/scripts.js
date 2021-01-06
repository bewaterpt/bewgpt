
(function($) {
  $("#block-mainnavigation ul>.menu-item").on("click",function(event) {
    event.stopPropagation();
    //verificar se o elemento tem ul, se tiver da prevent
    if ( $(event.currentTarget).children("ul").length > 0) {
      event.preventDefault();
      console.log($(event.currentTarget).hasClass("menuDrop"));
      if($(event.currentTarget).hasClass("menuDrop")==false && $(event.currentTarget).hasClass("menu-item--active-trail")==false){
        $(event.currentTarget).find(".subMenu_active").removeClass("subMenu_active");
        $(event.currentTarget).toggleClass("menuDrop");
        $(event.currentTarget).find(".menu").toggleClass("active");
        
        console.log("entrou if");
      }
      else if($(event.currentTarget).hasClass("menu-item--active-trail")==true){
        $(event.currentTarget).find(".menu").removeClass("active");
        $(event.currentTarget).removeClass("menuDrop");
        $(event.currentTarget).find(".menu").removeClass("subMenu_active");
        $(event.currentTarget).removeClass("menu-item--active-trail");
        console.log("entrou else if");
      }
      else {
        $(event.currentTarget).find(".menu").removeClass("active");
        $(event.currentTarget).removeClass("menuDrop");
        console.log("entrou else");
      }
    }
  });
  //submenu continuar aberto
  $(".menu-item--active-trail ul").toggleClass("subMenu_active");

  //botao do menu abrir
  $("#menuBar_btn").on("click",function(){
    var container = $("#sidebar-first");
    container.toggleClass("sidebar_inactive");
    $("#content").toggleClass("content_active");
    $(".menu_btn_container").toggleClass("menu_btn_container_active");
    //barra do footer reduzir o tamanho
    $("#block-views-block-frontpage-footer-block-1").css("margin-left","300px");
    $("#block-views-block-frontpage-footer-block-1").css("transition","margin-left 0.5s");
    $(".view-frontpage-footer .view-content table").css("margin","0 25% 0 calc(25% - 150px)");
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
  });

  //botao de dar close e abrir footer front_page
  $("#footer_btn_container").on("click",function(event){
    $("#footer_btn_container").toggleClass("footer_open");
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
  });

  //verificação dos items da sustentabilidade
  if($('.sustentabilidade-column').length % 2 == 1){
    $('.sustentabilidade-column').last().toggleClass("lastTypeColumn");
  }

  if ($('#block-languageswitcher').length > 0) {
    var i = setInterval(function () {
      var activeLang = $('#block-languageswitcher').find('li.is-active');

      console.log('Active Language: ', activeLang);

      if(activeLang.length > 0 && activeLang.index() > 0) {
        clearInterval(i);
        $('#block-languageswitcher').find('.links').prepend(activeLang.clone(true));
        activeLang.remove();
      }
    }, 10);
  }
})(jQuery)


