$(function() {
 
	// スクロール難しい




	//もっと詳しくボタンOK

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
		
	  $('.language-box').hover(
	  function() {
	   $(this).find('.text-active').fadeIn(500);
	  },
	   
	   function() {
	    $(this).find('.text-active').fadeOut(500);
	   });
  
    //コース申し込みモーダル表示

      $('.btn-pricing').click(function() {
       $('.modal-wrapper').fadeIn();

      });

　　　//モーダル非表示

      $('#close-modal').click(function(){
       $('.modal-wrapper').fadeOut();
      });





    //画像ZOOM NG

    　　$('.column-box').hover(
       function() {
        $(this).find('.column-box img').css('width','300px').css('overflow','hidden');
       },
        
        function() {
         $(this).find('.column-box img').css('width','100%');
        });

    //スライダー OK ２周目チラつきあり

    　　　$(document).ready(function(){
  　　　　　　$('.bxslider').bxSlider();
        });


}); //TOPのfanction