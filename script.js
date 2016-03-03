$(function() {
 
// スクロール難しい




//もっと詳しくボタンNG

  $('.btn-top-white').click(function() {
    if($('#read-more').hasClass('open')) {
     $('#detail').fadeOut();
      $('#read-more').removeClass('open').text("もっと詳しく");

    } else {
     $('#read-more').addClass('open').text("閉じる");
       $('#detail').fadeIn();
	
    }
  });

//学習する言語OK
	
  $('.language-box').hover(function() {
   $(this).find('.text-active').fadeIn(500);
  },
   function() {
    $(this).find('.text-active').fadeOut(500);
  });
  




  }); //TOPのfanction