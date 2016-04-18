$(document).ready(function(){

  $(".page_second_btn").click(function(){

    $(".page_second_btn").removeClass("btn-active-click");
    $(this).addClass("btn-active-click");
    var index = $(this).index();

    if($(".number_0").hasClass("display_block")){
      $(".number_0").fadeOut(500,move);
    }
    else if($(".number_1").hasClass("display_block")){
      $(".number_1").fadeOut(500,move);
    }
    else if($(".number_2").hasClass("display_block")){
      $(".number_2").fadeOut(500,move);
    }
    else if($(".number_3").hasClass("display_block")){
      $(".number_3").fadeOut(1000,move);
    }
    function move(){
      $(".page_first_text").removeClass("display_block");

      if(index == 0){
        $(".number_0").fadeIn(1000);
        $(".number_0").addClass("display_block");
        $('.number_0').css('display', '');
      }
      else if(index == 1){
        $(".number_1").fadeIn(1000);
        $(".number_1").addClass("display_block");
        $('.number_1').css('display', '');
      }
      else if(index == 2){
        $(".number_2").fadeIn(1000);
        $(".number_2").addClass("display_block");
        $('.number_2').css('display', '');
      }
      else if(index == 3){
        $(".number_3").fadeIn(1000);
        $(".number_3").addClass("display_block");
        $('.number_3').css('display', '');
      }
    }
  });
});
