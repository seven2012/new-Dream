$(window).scroll(function () {
    var menu_top = $('.navbar-inverse').height();
    console.log(menu_top)
    console.log($(window).scrollTop())
    if ($(window).scrollTop() >= menu_top) {
        $('.navbar-inverse').addClass('backgroundState')
    }
    else {
        $('.navbar-inverse').removeClass('backgroundState')
    }
});  

function onFeatureSlected(e){
    console.log(e)   
    if(e.innerHTML == 'Dreamlight Pro'){
        $('#dreamlight_pro_feature').css('display','block')
        $('#dreamlight_heat_feature').css('display','none')
        $('#dreamlight_ease_feature').css('display','none')
    }else if(e.innerHTML == 'Dreamlight Heat') {
        $('#dreamlight_pro_feature').css('display','none')
        $('#dreamlight_heat_feature').css('display','block')
        $('#dreamlight_ease_feature').css('display','none')
    }else if(e.innerHTML == 'Dreamlight Ease') {
        $('#dreamlight_pro_feature').css('display','none').removeClass('active')
        $('#dreamlight_heat_feature').css('display','none').removeClass('active')
        $('#dreamlight_ease_feature').css('display','block').addClass('active');
    }
}

$(function(){
    $('#dreamlightfamily>.container>.filter>a').click(function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    });
    $('section#getApp .platforms .btn.btn-primary').click(function(){
      $(this).addClass('active2');
      $(this).siblings().removeClass('active2');
    })
  })

