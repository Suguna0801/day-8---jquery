$(document).ready(function(){
      
//    for click button

    $("button").click(function(){
        $("div").css("width",'150px')
    })

    // for double click

    $("button").dblclick(function(){
        $("div").css("width",'150px')
    })

    // for mouseenter the box

    $("div").mouseenter(function(){
        $("div").css("width",'300px')
    })

    // for mouseleave the box

    $("div").mouseleave(function(){
        $("div").css("width",'150px')
    })

    // for hover
    
    $("div").hover(function(){
        $("div").css("width",'200px')
    })
})