// $("button").click(func1);
// function func1(){
//     $("#box1").css('width','500px');
// }

$(document).ready(function(){
    // $("button").click(function(){
    //     $("#box1").css("background-color", "blue");
    // });
    $("#btn1").click(function(){
        $("#box1").hide(2000);
    })
    $("#btn2").click(function(){
        $("#box1").show(2000);
    })
    $("#btn3").click(function(){
        $("#box1").toggle(2000);
    })
    $("#btn4").click(function(){
        $("#box1").fadeIn(2000);
    })
    $("#btn5").click(function(){
        $("#box1").fadeOut(2000);
    })
    $("#btn6").click(function(){
        $("#box1").fadeToggle(2000);
    })
    // $("#btn7").click(function(){
    //     $("#box1").slideUp(2000);
    // })
    // $("#btn8").click(function(){
    //     $("#box1").slideDown(2000);
    // })
    // $("#btn9").click(function(){
    //     $("#box1").slideToggle(2000);
    // })
});
