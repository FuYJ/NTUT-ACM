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

  $(".new_discuss_content_word").bind("input propertychange",function(){
    var n = $(".new_discuss_content_word").val().length;
    $(".new_discuss_content_word_limit").text(140-n);
  })

  $(".new_discuss_content_submmit").click(function(){
//    $(".content_list .title_block:nth-child(23) div").text('QQ');
    for( var index = 23; index > 2; index -= 2){
      var index2 = index - 2;
      var index3 = index + 1;
      var index4 = index3 - 2;
      $(".content_list .title_block:nth-child(" + index + ") .title_block_word").text($(".content_list .title_block:nth-child(" + index2 + ") .title_block_word").text());
      $(".content_list .title_block:nth-child(" + index + ") .title_block_user").text($(".content_list .title_block:nth-child(" + index2 + ") .title_block_user").text());
      $(".content_list .title_block:nth-child(" + index + ") .title_block_time").text($(".content_list .title_block:nth-child(" + index2 + ") .title_block_time").text());
      $(".content_list .content_block:nth-child(" + index3 + ") .content_word").text($(".content_list .content_block:nth-child(" + index4 + ") .content_word").text());
    }
    $(".content_list .title_block:nth-child(1) .title_block_word").text($(".new_discuss_title_block").val());
    $(".content_list .title_block:nth-child(1) .title_block_user").text($(".new_discuss_user_block").val());
    $(".content_list .content_block:nth-child(2) .content_word").text($(".new_discuss_content_word").val());
  });

  $(".title_block").click(function(){
    var index = $(this).index() + 2;
    if($(".content_block:nth-child(" + index + ")").hasClass("display_block")){
      $(".content_block").removeClass("display_block");
    }
    else{
      $(".content_block").removeClass("display_block");
      $(".content_block:nth-child(" + index +")").addClass("display_block");
    }
  });
});
