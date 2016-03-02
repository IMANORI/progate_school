$(function() {
 
// スクロール難しい




//もっと詳しくボタンNG

$('.btn-top-white').click(function(){
  
  if(('#read-more').hasClass('open')){
   $('#detail').slideUp();
   $('#read-more').removeClass().text("もっと詳しく");

} else {
	$('#read-more').addClass('open').slideDown();
	$('#read-more').text("閉じる");
}
});

//学習する言語OK
	
$('.language-box').hover(function() {
      $(this).find('.text-active').fadeIn(500);
    },
    function() {
      $(this).find('.text-active').fadeOut(500);
    }
  );



});