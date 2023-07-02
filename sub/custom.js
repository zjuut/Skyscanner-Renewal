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
  $('.searchbox_routetype label').click(function(){    
    var searchboxTab = $('.searchbox_setting > div').eq($(this).index());
  
    searchboxTab.show();
    searchboxTab.siblings().hide();
    $('.searchbox_setting .set_modal').hide();
  })
  $('.searchbox_setting .multi .plus_btn').click(function(){
    alert('출도착지, 가는날을 선택하면 항공편 추가가 가능합니다.');
  })

  /* Section : FAQ */
  $('.faq_list_title').click(function(){
    $(this).toggleClass('active');
    $('.faq_list_title').not(this).removeClass('active');
    $(this).siblings().slideToggle();
    $('.faq_list_desc').not($(this).siblings()).slideUp();
  })

  /* Section : Popular Area */ 
  $('.popular_area_tab button').click(function(){
    var popularTab = $('.popular_area_list ul').eq($(this).index());

    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    popularTab.css('display','flex');
    popularTab.siblings().hide();
  })
})

$(function(){
  if(window.matchMedia('screen and (min-width: 1024px)').matches){
    /* SearchBox */
    $('.searchbox_routetype label').click(function(){
      $('.main_inner').css('height','800px');
    })
    $('.searchbox_routetype label:nth-child(3)').click(function(){
      $('.main_inner').css('height','895px');
    })  

    // SearchBox : Modal
    $('.searchbox_setting .set_box').not('.searchbox_setting .area').click(function(){
      var thisModal = $(this).next('.set_modal');

      if(thisModal.css('display') == 'none'){
        $('.searchbox_setting .set_modal').hide();
        thisModal.show();
      }
      else{
        thisModal.hide();
      }
    })
    $('.searchbox_setting .area .leave').click(function(){
      var leaveModal = $(this).parent().siblings('.area_leave_modal');

      if(leaveModal.css('display') == 'none'){
        $('.searchbox_setting .set_modal').hide();
        leaveModal.show();
      }
      else{
        leaveModal.hide();
      }
    })
    $('.searchbox_setting .area .arrive').click(function(){
      var arriveModal = $(this).parent().siblings('.area_arrive_modal');

      if(arriveModal.css('display') == 'none'){
        $('.searchbox_setting .set_modal').hide();
        arriveModal.show();
      }
      else{
        arriveModal.hide();
      }
    })

    // SearchBox : Modal : Calendar
    $('.roundtrip .calendar tbody button').click(function(){
      if($('.roundtrip .calendar tbody td').find('.check').length < 2){
        $(this).addClass('check');
      }
      else {
        $('.roundtrip .calendar tbody button').removeClass('check')
        $(this).addClass('check');
      }
    })
    $('.oneway .calendar tbody button , .multi .calendar tbody button').click(function(){
      $('.calendar tbody button').removeClass('check');
      $(this).addClass('check');
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
    
    /* Section : Plane */
    $('.plane_items .item').mouseenter(function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    })
    $('.plane_items').mouseleave(function(){
      $('.plane_items .item').removeClass('active');
    })
  }
  else if(window.matchMedia('screen and (max-width: 768px)').matches){
    /* Text Change */
    // Section : Main : Desc
    $('.main_desc p br').remove()
    // SearchBox
    $('.searchbox_setting .area .leave').attr('placeholder','출발지');
    $('.searchbox_setting .area .arrive').attr('placeholder','도착지');
    // Section Head
    $('.section_hd h3 a').text('모두보기');

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

    /* SearchBox */
    $('.searchbox_routetype label').click(function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    })
  }
})
