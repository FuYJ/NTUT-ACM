$(document).ready(function(){

  $(".article_second_div1_li").click(function(){
    $(".article_second_div1_li").removeClass("active-click");
    $(this).addClass("active-click");
    return false;
  });

  $(".article_first > div").mouseover(function(){
    var index = $(this).index();
    if(index == 0){
      $(".article_first_text_cover0").addClass("display_block");
    }
    else if(index == 1){
      $(".article_first_text_cover1").addClass("display_block");
    }
    else if(index == 2){
      $(".article_first_text_cover2").addClass("display_block");
    }
  });

  $(".article_first > div").mouseout(function(){
    $(".article_first_text_cover0").removeClass("display_block");
    $(".article_first_text_cover1").removeClass("display_block");
    $(".article_first_text_cover2").removeClass("display_block");
  });
});
