$(document).ready(function() {

    var d_height = $(document).height() + "px";
    var username_width = $(".username").width();
    /*计算小三角到屏幕右侧的距离 */
    var an_two = $(".dl").eq(1).width() + $("#more").width() + 50;
    var icon_right = an_two + username_width / 2;
    /*计算下拉列表到屏幕右侧的距离*/
    var user_list = $(".user-list").width();
    var user_list_right = icon_right - user_list / 2;



    $("#sidebar").css("min-height", d_height);
    $("#sidebar").css("opacity", "1");
    $("#sidebar").css("display", "none");
    $(".user-list").css("display", "none");
    $(".icon").css("display", "none");
    $(".menu-outer ul li:first").css("marginRight",0);

    $("#more").mouseover(function() {
        $("#sidebar").css("display", "block");
    });
    $("#sidebar").mouseleave(function() {
        $("#sidebar").css("display", "none");
    });

    $(".username, .icon,.user-list").mousemove(function() {

        $(".user-list").css("display", "block");
        $(".icon").css("display", "block");
        $(".icon").css("right", icon_right + "px");
        $(".user-list").css("right", user_list_right + "px");

    });

    $(".username, .user-list").mouseleave(function() {
        $(".user-list").css("display", "none");
        $(".icon").css("display", "none");
    });

/*tab*/
$(".menu-outer ul li").each(function(index){
                $(this).click(function(){
                    
                    $("div.current").removeClass("current");
                    $(".menu-outer ul li").removeClass("tabin");
                    $(".tab-content").eq(index).addClass("current");
                    $(".menu-outer ul li").eq(index).addClass("tabin");
                })
                
             })

/*我的导航*/
$(".my-nav").click(function(){
    $(".nav-wrap").toggle();
    
})

$(".nav-block").each(function(index){
    $(this).mouseover(function(){
     $(".rebat").eq(index).css("display","block");
    }).mouseout(function(){
    $(".rebat").eq(index).css("display","none");
    })
})

/*回到项部*/
$(".gotop").mouseover(function(){
    $(".gotop-icon").addClass("icon-over")
    $(".gotop-text").css("display","block")

}).mouseout(function(){
    $(".gotop-icon").removeClass("icon-over")
    $(".gotop-text").css("display","none")
})


$(window).scroll(function(){
                if ($(window).scrollTop()>50){
                    $(".gotop").fadeIn(500);
                }
                else
                {
                    $(".gotop").fadeOut(500);
                }
            });

$(".gotop").click(function(){
                $('body,html').animate({scrollTop:0},500);
                return false;
            });



});
