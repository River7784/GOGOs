$(function(){
    //login_popup
    $("#login_link").click(function(){
        document.body.classList.add("stop-scroll");
        $("#blur").show();
        $("#login_popup").show("fast");
    });
    $(".popup_close").hover(function(){
        $(".popup_close_img").stop().animate({
            rotate : "-90deg"
        });
    },function(){
        $(".popup_close_img").stop().animate({
            rotate : "0deg"
        });
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

    // 종로구 설명
    let toggle=false;
    $(".read_more").click(function(){
        toggle=!toggle;
        if(toggle){
            $("#location_wrap").animate({
                height : "850px"
            });
            $("#intro_jongno").animate({
                overflow : "visible",
                height : "750px"
            });
            $(".p_blur").css({
                display : "none"
            })
        }else{
            $("#location_wrap").animate({
                height : "500px"
            })
            $("#intro_jongno").animate({
                overflow : "hidden",
                height : "450px"
            })
            $(".p_blur").css({
                display : "block"
            })
        }
    });
    // 추천명소 hover
    $(".side_ul>li").hover(function(){
        $(this).css({
            boxShadow : "0px 2px 5px #bbb",
            transition : "all 0.3s cubic-bezier(.25,.8,.25,1)"
        })
    },function(){
        $(this).css({
            boxShadow : "none"
        })
    });
    //tip! hover
    $(".tips_ul>li").hover(function(){
        $(this).css({
            boxShadow : "0px 2px 5px #bbb",
            transition : "all 0.3s cubic-bezier(.25,.8,.25,1)",
            textDecoration : "underline",
            textUnderlinePosition : "under"
        })
    },function(){
        $(this).css({
            boxShadow : "none",
            textDecoration : "none"
        })
    });
});