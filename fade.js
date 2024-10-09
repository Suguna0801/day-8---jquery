$(document).ready(function(){

    // for fade
    $("#btn1").click(function(){
        $("#box1").fadeIn(2000);
    })
    $("#btn2").click(function(){
        $("#box1").fadeOut(2000);
    })
    $("#btn3").click(function(){
        $("#box1").fadeToggle(2000);
    })

    // For slide
    $("#btn4").click(function(){
        $("#box1").slideUP(2000);
    })
    $("#btn5").click(function(){
        $("#box1").slideDown(2000);
    })
    $("#btn6").click(function(){
        $("#box1").slideToggle(2000);
    })
     
    // for Animation
    $("#btn").click(function(){
        $("#box1").animate({
            right:"150px",
            height:"400px",
            opacity:'1.5',
            width:'400px'},2000)
    })
//   for stop
    $("#stop").click(function(){
        $("#box1").stop(2000);
    })
});