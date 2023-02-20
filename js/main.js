$(function(){
    //bgimg 하이라이트 기능
    //bg1
    $(".a1").hover(function(){
        $(".img1").css({
            filter : "brightness(90%)",
            scale : "1.1",
        })
    },function(){
        $(".img1").css({
            filter : "brightness(60%)",
            scale : "1"
        });
    });
    //bg2
    $(".a2").hover(function(){
        $(".img2").css({
            filter : "brightness(90%)",
            scale : "1.05"
        })
    },function(){
        $(".img2").css({
            filter : "brightness(60%)",
            scale : "1"
        });
    });
    //bg3
    $(".a3").hover(function(){
        $(".img3").css({
            filter : "brightness(90%)",
            scale : "1.1"
        })
    },function(){
        $(".img3").css({
            filter : "brightness(60%)",
            scale : "1"
        });
    });
    //login_popup
    $("#login_link").click(function(){
        document.body.classList.add("stop-scroll");
        $("#blur").show();
        $("#login_popup").show("fast");
    });
    $(".popup_close").click(function(){
        document.body.classList.remove("stop-scroll");
        $("#blur").hide();
        $("#login_popup").hide("fast");
    })
    

    //login, account create hover highlight
    $("#login_link>li>a").hover(function(){
        $(this).css("color","#fff")
    },function(){
        $(this).css("color","#999")
    });
    //main_menu hover hightlight
    $("#main_menu>li>a").hover(function(){
        $(this).css("color","#fff")
    },function(){
        $(this).css("color","#ccc")
    });
    //contents
    let highlight;
    $(".location_menu>li").hover(function(){
        highlight=$(this).index();
        $(".location_menu .goimg"+(highlight+1)).css({
            scale : '1.1',
        })
    },function(){
        highlight=$(this).index();
        $(".location_menu .goimg"+(highlight+1)).css({
            scale : '1.0',
            borderRadius:"40"
        });
    });
});