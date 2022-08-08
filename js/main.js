$(document).ready(function(){
    // slide
    $(".slide-con").hide();
    $(".slide-con:first-child").show();
    function slidemove(){
        $(".slide-con:first-child").fadeOut().next().fadeIn().end().appendTo(".slide-box2");     
    }
    setInterval(slidemove, 3000);

    //pop
    $("#pop").hide();
    $(".not-box ul li:first-child").on('click',function(){
        $("#pop").show();
    }); 
    $("#pop button").on('click', function(){
        $("#pop").hide();
    });
});