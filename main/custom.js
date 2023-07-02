$(function(){
  /* Header , Top BTN */
  $(window).scroll(function(){
    if($(window).scrollTop() > 0){
      $('header').addClass('fixed');
      $('.top_btn').addClass('active');
    }
    else {
      $('header').removeClass('fixed');
      $('.top_btn').removeClass('active');
    }
  })
  
  // Header Modal : Language
  $('.hd_right_wr .language').click(function(){
    $('.language_modal').show();
    $('body').css('overflow','hidden');
  })
  $('.language_modal .close_btn , .language_modal input[type=submit]').click(function(){
    $('.language_modal').hide();
    $('body').css('overflow','auto');
  })

  /* SearchBox */
  $('.searchbox_type button').click(function(){
    var searchboxTab = $('.searchbox_setting > div').eq($(this).index());

    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    searchboxTab.show();
    searchboxTab.siblings().hide();
  })

  // SearchBox : Modal
  $('.calendar tbody button').click(function(){
    if($('.calendar tbody td').find('.check').length < 2){
      $(this).addClass('check');
    }
    else {
      $('.calendar tbody button').removeClass('check')
      $(this).addClass('check');
    }
  })
})

$(function(){
  if(window.matchMedia('screen and (min-width: 1024px)').matches){
    /* Header */
    var hdGnb = $('.hd_left_wr .gnb li a');
    hdGnb.mouseenter(function(){
      $(hdGnb).addClass('active');
      $(this).removeClass('active');
    })
    hdGnb.mouseleave(function(){
      $(hdGnb).removeClass('active');
    })

    // SearchBox : Modal
    $('.searchbox_setting .set_box').click(function(){
      $(window).scrollTop(0);
      $('section.main').addClass('focus');
      $('.bg_text').fadeOut(100);
      $('.modal_close_btn').delay(500).fadeIn('fast');
    })
    $('section.main .modal_close_btn').click(function(){
      $(this).fadeOut('fast');
      $('.searchbox_setting .set_modal').hide();
      $('section.main').removeClass('focus');
      $('.bg_text').delay(250).fadeIn(250);
    })

    $('.searchbox_type button').click(function(){
      var tabsFirst = $('.searchbox_setting > div').eq($(this).index()).find('div.set_modal:eq(0)');

      if($('section.main').hasClass('focus')){
        tabsFirst.show();
        tabsFirst.siblings('.set_modal').hide();
      }
    })

    $('.searchbox_setting .set_box').not('.searchbox_setting .plane .area').click(function(){
      $(this).siblings('.set_modal').hide();
      $(this).next('.set_modal').show();
    })
    $('.searchbox_setting .plane .area .leave').click(function(){
      $('.set_modal').hide();
      $('.area_leave_modal').show();
    })
    $('.searchbox_setting .plane .area .arrive').click(function(){
      $('.set_modal').hide();
      $('.area_arrive_modal').show();
    })

    /* Section : Control */
    $('.control .next , .control .prev').click(function(){
      $(this).parents('.section_hd').next().css('transition','0.35s').css('transform','translateX(0)');
      $(this).removeClass('active');
      $(this).siblings().addClass('active');
    })
    $('.control .next').click(function(){
      $(this).parents('.section_hd').next().css('transform','translateX(-1300px)');
    })    
    
    /* Section : Plane , Hotel */
    $('.plane_items .item , .hotel_items .item').mouseenter(function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    })
    $('.plane_items , .hotel_items').mouseleave(function(){
      $(this).children().removeClass('active');
    })
  }
  else if(window.matchMedia('screen and (max-width: 768px)').matches){
    /* Text Change */
    // SearchBox
    $('.searchbox_setting .plane .area .leave').attr('placeholder','출발지');
    $('.searchbox_setting .plane .area .arrive').attr('placeholder','도착지');
    // Section Head
    $('h3 a').text('모두보기');
    // Section : Type
    $('section.type .type_plane p').text('항공편을 비교해보고 수수료 없이');
    $('section.type .type_hotel p').text('마음에 드는 객실을 특별한 가격으로');
    $('section.type .type_car p').text('모든 종류의 자동차를 합리적인 가격으로');
    // Section : Car
    $('.car_items .item').eq(0).find('p').text('비행기에서 내리는 즉시');
    $('.car_items .item').eq(1).find('p').text('여행 시간을  효과적으로');
    $('.car_items .item').eq(2).find('p').text('최고의 렌터카 상품');
    $('.car_items .item').eq(3).find('p').text('최고의 렌터카 가격 조건');

    /* Header Modal : Menu BTN */
    $('.hd_right_wr .m_menu_btn').click(function(){
      $(this).css('visibility','hidden');
      $('.m_menu_modal').show();
      $('body').css('overflow','hidden');
    })
    $('.m_close_btn').click(function(){
      $('.hd_right_wr .m_menu_btn').css('visibility','visible');
      $('.m_menu_modal').hide();
      $('body').css('overflow','auto');
    })
    
    $('.m_searchbox_up').click(function(){
      var boxT = $('.searchbox').offset().top;
      var hdH = $('header').height();
      $('html, body').scrollTop(boxT-hdH+16);
    })
  }
})
