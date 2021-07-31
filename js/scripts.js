/*jQuery script for Play/Pause Button Click Functions*/
$(function(){
    $(".carousel").carousel( {interval: 2000, pause:"false"} );
    $("#carouselButton").click(function(){
       if($("#carouselButton").children("i").hasClass("fa-pause")){
           $(".carousel").carousel("pause");
           $("#carouselButton").children("i").removeClass("fa-pause")
           $("#carouselButton").children("i").addClass("fa-play");
       } else {
           $(".carousel").carousel("cycle");
           $("#carouselButton").children("i").removeClass("fa-play")
           $("#carouselButton").children("i").addClass("fa-p");
       }
    });

    /*opens up loginModal when login button is clicked*/
    $("#loginButton").click(function(){
        $("#loginModal").modal('show');
    });

    /*opens up reserveModal when reserve button is clicked*/
    $("#reserveButton").click(function(){
        $("#reserveModal").modal('show');
    });
});

