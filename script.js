$(function() {
 
	// スクロール OK
      
		  $('header a').click(function(){
           $("html,body").animate({scrollTop:$($(this).attr('href')).offset().top},500);

            
		  });
       




	//もっと詳しくボタン OK

	  $('.btn-top-white').click(function() {
	    if($('#read-more').hasClass('open')) {
	     $('#detail').fadeOut();
	      $('#read-more').removeClass('open').text("もっと詳しく");

	    } else {
	     $('#read-more').addClass('open').text("閉じる");
	       $('#detail').fadeIn();
		
	    }
	  });

	//学習する言語 OK
		
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

        var id = $(this).parents('.price-column').attr('id');

         $('#course-select').val(id);


      });

　　　//モーダル非表示

      $('#close-modal').click(function(){
       $('.modal-wrapper').fadeOut();
      });





    //画像ZOOM NG
      
    　

    //スライダー OK 
      
      $('.carousel').carousel({
      	interval:2500
      })



    // 　　　$(document).ready(function(){
    // 　　　　　　$('.bxslider').bxSlider();
    // }); 


}); //TOPのfanction