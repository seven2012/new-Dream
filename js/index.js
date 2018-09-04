
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

  $(window).scroll(function () {
    //navbar
    var menu_top = $('.navbar-inverse').height();
    console.log(menu_top)
    console.log('top  '+$(window).scrollTop())
    var top = $(window).scrollTop()
    if (top >= menu_top) {
        $('.navbar-inverse').addClass('backgroundState')
    }
    else {
        $('.navbar-inverse').removeClass('backgroundState')
    }
    //family
    var top1 = $('#slider1').offset().top;
    var top2 = $('#introDreamlight').offset().top;
    var top3 = $('#dreamlightfamily').offset().top;
    var top4 = $('#mindfulness').offset().top;
    var top5 = $('#mindfulnessNext').offset().top;
    var top6 = $('#partMedia').offset().top;
    var top7 = $('#getApp').offset().top;
    var top8 = $('#footer').offset().top;
    console.log('top1 '+top1,' top2 '+ top2,' top3 '+top3, ' top4  '+top4, ' top5  '+top5, ' top6  '+top6, ' top7  '+top7)
    
    if(top>top1&&top<top2){
        //$('#slider1').addClass("animation")
    }else{
        //$('#slider1').removeClass("animation")
    }
    
    if(top>(top2/2)&&top<(top3)){
        $('#introDreamlight>.container>h2').addClass('animated fadeInDown');
        $('#introDreamlight>.container>p').addClass('animated fadeInUp');
        $('#introDreamlight>.container>#families>.left').addClass('animated fadeInLeft');
        $('#introDreamlight>.container>#families>.right').addClass('animated fadeInRight');
    }else{
        $('#introDreamlight>.container>h2').removeClass('animated fadeInLeft');
        $('#introDreamlight>.container>p').removeClass('animated fadeInUp');
        $('#introDreamlight>.container>#families>.left').removeClass('animated fadeInLeft');
        $('#introDreamlight>.container>#families>.right').removeClass('animated fadeInRight');
    }
});  

