$(document).ready(function(){

  $(".content_selector_ul_li").click(function(){

    $(".content_selector_ul_li").removeClass("content-click");
    $(this).addClass("content-click");
    return false;
  });

  $(".title_block").click(function(){

    var index = $(this).index();
    if(index == 0){
      if($(".content_word:nth-child(2)").hasClass("display_block")){
        $(".content_word").removeClass("display_block");
      }
      else{
        $(".content_word").removeClass("display_block");
        $(".content_word:nth-child(2)").addClass("display_block");
      }
    }
    else if(index == 2){
      if($(".content_word:nth-child(4)").hasClass("display_block")){
        $(".content_word").removeClass("display_block");
      }
      else{
        $(".content_word").removeClass("display_block");
        $(".content_word:nth-child(4)").addClass("display_block");
      }
    }
    else if(index == 4){
      if($(".content_word:nth-child(6)").hasClass("display_block")){
        $(".content_word").removeClass("display_block");
      }
      else{
        $(".content_word").removeClass("display_block");
        $(".content_word:nth-child(6)").addClass("display_block");
      }
    }
    else if(index == 6){
      if($(".content_word:nth-child(8)").hasClass("display_block")){
        $(".content_word").removeClass("display_block");
      }
      else{
        $(".content_word").removeClass("display_block");
        $(".content_word:nth-child(8)").addClass("display_block");
      }
    }
    else if(index == 8){
      if($(".content_word:nth-child(10)").hasClass("display_block")){
        $(".content_word").removeClass("display_block");
      }
      else{
        $(".content_word").removeClass("display_block");
        $(".content_word:nth-child(10)").addClass("display_block");
      }
    }
    else if(index == 10){
      if($(".content_word:nth-child(12)").hasClass("display_block")){
        $(".content_word").removeClass("display_block");
      }
      else{
        $(".content_word").removeClass("display_block");
        $(".content_word:nth-child(12)").addClass("display_block");
      }
    }
    else if(index == 12){
      if($(".content_word:nth-child(14)").hasClass("display_block")){
        $(".content_word").removeClass("display_block");
      }
      else{
        $(".content_word").removeClass("display_block");
        $(".content_word:nth-child(14)").addClass("display_block");
      }
    }
    else if(index == 14){
      if($(".content_word:nth-child(16)").hasClass("display_block")){
        $(".content_word").removeClass("display_block");
      }
      else{
        $(".content_word").removeClass("display_block");
        $(".content_word:nth-child(16)").addClass("display_block");
      }
    }
    else if(index == 16){
      if($(".content_word:nth-child(18)").hasClass("display_block")){
        $(".content_word").removeClass("display_block");
      }
      else{
        $(".content_word").removeClass("display_block");
        $(".content_word:nth-child(18)").addClass("display_block");
      }
    }
    else if(index == 18){
      if($(".content_word:nth-child(20)").hasClass("display_block")){
        $(".content_word").removeClass("display_block");
      }
      else{
        $(".content_word").removeClass("display_block");
        $(".content_word:nth-child(20)").addClass("display_block");
      }
    }
    else if(index == 20){
      if($(".content_word:nth-child(22)").hasClass("display_block")){
        $(".content_word").removeClass("display_block");
      }
      else{
        $(".content_word").removeClass("display_block");
        $(".content_word:nth-child(22)").addClass("display_block");
      }
    }
    else if(index == 22){
      if($(".content_word:nth-child(24)").hasClass("display_block")){
        $(".content_word").removeClass("display_block");
      }
      else{
        $(".content_word").removeClass("display_block");
        $(".content_word:nth-child(24)").addClass("display_block");
      }
    }
  });
});
