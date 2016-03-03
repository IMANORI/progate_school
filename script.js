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
  
    
    //画像ZOOM

    　　$('.column-box').hover(
       function() {
        $(this).find('.column-box img').css('width','300px').css('overflow','hidden');
       },
        
        function() {
         $(this).find('.column-box img').css('width','100%');
        });

    //スライダー OK

    　　　$(document).ready(function(){
  　　　　　　$('.bxslider').bxSlider();
        });


}); //TOPのfanction