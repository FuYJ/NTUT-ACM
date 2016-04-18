$(document).ready(function(){

  $(".content_selector_ul_li").click(function(){

    $(".content_selector_ul_li").removeClass("content-click");
    $(this).addClass("content-click");
    return false;
  });

  $(".content_reply").click(function(){
    jQuery("html,body").animate({scrollTop:document.body.scrollHeight},1000);
    $(".new_discuss_title_block").val('re:關於ptc20160413第D題的解法');
  });

  $(".title_block").click(function(){
    var index = $(this).index();
    if(index == 0){
      if($(".content_block:nth-child(2)").hasClass("display_block")){
        $(".content_block").removeClass("display_block");
      }
      else{
        $(".content_block").removeClass("display_block");
        $(".content_block:nth-child(2)").addClass("display_block");
      }
    }
    else if(index == 2){
      if($(".content_block:nth-child(4)").hasClass("display_block")){
        $(".content_block").removeClass("display_block");
      }
      else{
        $(".content_block").removeClass("display_block");
        $(".content_block:nth-child(4)").addClass("display_block");
      }
    }
    else if(index == 4){
      if($(".content_block:nth-child(6)").hasClass("display_block")){
        $(".content_block").removeClass("display_block");
      }
      else{
        $(".content_block").removeClass("display_block");
        $(".content_block:nth-child(6)").addClass("display_block");
      }
    }
    else if(index == 6){
      if($(".content_block:nth-child(8)").hasClass("display_block")){
        $(".content_block").removeClass("display_block");
      }
      else{
        $(".content_block").removeClass("display_block");
        $(".content_block:nth-child(8)").addClass("display_block");
      }
    }
    else if(index == 8){
      if($(".content_block:nth-child(10)").hasClass("display_block")){
        $(".content_block").removeClass("display_block");
      }
      else{
        $(".content_block").removeClass("display_block");
        $(".content_block:nth-child(10)").addClass("display_block");
      }
    }
    else if(index == 10){
      if($(".content_block:nth-child(12)").hasClass("display_block")){
        $(".content_block").removeClass("display_block");
      }
      else{
        $(".content_block").removeClass("display_block");
        $(".content_block:nth-child(12)").addClass("display_block");
      }
    }
    else if(index == 12){
      if($(".content_block:nth-child(14)").hasClass("display_block")){
        $(".content_block").removeClass("display_block");
      }
      else{
        $(".content_block").removeClass("display_block");
        $(".content_block:nth-child(14)").addClass("display_block");
      }
    }
    else if(index == 14){
      if($(".content_block:nth-child(16)").hasClass("display_block")){
        $(".content_block").removeClass("display_block");
      }
      else{
        $(".content_block").removeClass("display_block");
        $(".content_block:nth-child(16)").addClass("display_block");
      }
    }
    else if(index == 16){
      if($(".content_block:nth-child(18)").hasClass("display_block")){
        $(".content_block").removeClass("display_block");
      }
      else{
        $(".content_block").removeClass("display_block");
        $(".content_block:nth-child(18)").addClass("display_block");
      }
    }
    else if(index == 18){
      if($(".content_block:nth-child(20)").hasClass("display_block")){
        $(".content_block").removeClass("display_block");
      }
      else{
        $(".content_block").removeClass("display_block");
        $(".content_block:nth-child(20)").addClass("display_block");
      }
    }
    else if(index == 20){
      if($(".content_block:nth-child(22)").hasClass("display_block")){
        $(".content_block").removeClass("display_block");
      }
      else{
        $(".content_block").removeClass("display_block");
        $(".content_block:nth-child(22)").addClass("display_block");
      }
    }
    else if(index == 22){
      if($(".content_block:nth-child(24)").hasClass("display_block")){
        $(".content_block").removeClass("display_block");
      }
      else{
        $(".content_block").removeClass("display_block");
        $(".content_block:nth-child(24)").addClass("display_block");
      }
    }

/*    $('.content').keydown(function(){
        var n = $(".content").val().length+1;
        $('.new_discuss_content_word_limit').html(n);
    });*/
  });
});
