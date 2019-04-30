$(document).ready(function(){
    $("#03").click(function(){
        $('#01').fadeOut(3000);
    })
    $("#03").click(function(){
        $('#02').fadeIn(10000);
        $('#02').css('background-color','lightblue');
        $('#02').animate({height:'toggle',width:'toggle'});

    })
})


