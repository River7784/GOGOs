$(function(){
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
    
    //content hover : p underline
    $(".loc_li").hover(function(){
        let index=$(this).index();
        $(".con_p"+index).css({
            textDecoration : "underline",
            textUnderlinePosition : "under"
        })
    },function(){
        let index=$(this).index();
        $(".con_p"+index).css({
            textDecoration : "none"
        })
    });

    // content page_num click nextpage
    $(".next_page").click(function(){
        $(".first_page").hide();
        $(".second_page").show();
        $(".page_num_first").css({
            color : "#000",
            backgroundColor : "#fff"
        })
        $(".page_num_second").css({
            color : "#fff",
            backgroundColor : "#888"
        });
    });
    $(".prev_page").click(function(){
        $(".first_page").show();
        $(".second_page").hide();
        $(".page_num_first").css({
            color : "#fff",
            backgroundColor : "#888"
        });
        $(".page_num_second").css({
            color : "#000",
            backgroundColor : "#fff"
        });
    });

    // content pages_num click this page
    $(".page_num_first").click(function(){
        $(".first_page").show();
        $(".second_page").hide();
        $(".page_num_first").css({
            color : "#fff",
            backgroundColor : "#888"
        });
        $(".page_num_second").css({
            color : "#000",
            backgroundColor : "#fff"
        });
    });
    $(".page_num_second").click(function(){
        $(".first_page").hide();
        $(".second_page").show();
        $(".page_num_first").css({
            color : "#000",
            backgroundColor : "#fff"
        })
        $(".page_num_second").css({
            color : "#fff",
            backgroundColor : "#888"
        })
    });
});