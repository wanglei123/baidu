$(document).ready(function() {

    var d_height = $(document).height() + "px";

    $("#sidebar").css("min-height", d_height);
    $("#sidebar").css("opacity", "1");
    $("#sidebar").css("display", "none");


    $("#more").mouseover(function() {
        $("#sidebar").css("display", "block");
    });
        $("#sidebar").mouseleave(function() {
        $("#sidebar").css("display", "none");
    });




            
       
        


});
