$(document).ready(function(){
    $('.search-form-box span').click(function(){
        $('#search-form form').slideToggle('fast');
    });
});
$(function () {
    $('#bt-continue').click(function () {
        var slide = $('#slide-home').height();
        var height = slide - 68;
            $('body,html').animate({
                    scrollTop: height
                }, 1000);
            return false;
    });

    $('#owl-gallery a').Chocolat({overlayColor:'#000',linkImages:'false',closeImg:'images/closew.gif'});

    var owlgallery = $("#owl-gallery");
    owlgallery.owlCarousel({
        autoPlay : 3000,
        stopOnHover : true,
        paginationSpeed : 1000,
        autoHeight : true,
        navigationText : ["",""],
        itemsCustom : [
          [0, 2],
          [450, 3],
          [600, 3],
          [700, 4],
          [1000, 4]
        ],
        navigation : true
    });
    var owl = $("#owl-demo");
    owl.owlCarousel({
        autoPlay : 3000,
        stopOnHover : true,
        paginationSpeed : 1000,
        autoHeight : true,
        navigationText : ["",""],
        itemsCustom : [
          [0, 2],
          [450, 3],
          [600, 3],
          [700, 5],
          [1000, 5]
        ],
        navigation : true
    });
    var owlNews = $("#owl-news");
    owlNews.owlCarousel({
        autoPlay : 5000,
        stopOnHover : true,
        navigation : true,
        slideSpeed : 1000,
        paginationSpeed : 1000,
        singleItem:true,
        navigationText : ["",""],
    });
});
new WOW().init();


