$(function(){
    // 체크박스 모두 동의
    let checked;
    $(".ckall").click(function(){
        checked=$(".ckall").is(":checked");
        if(checked){
            $("input:checkbox").prop("checked",true);
        }else{
            $("input:checkbox").prop("checked",false)
        }
    });

    //동의,뒤로가기 버튼 이벤트
    $(".btn1").hover(function(){
        $(this).css({
            cursor : "pointer",
            backgroundColor : "#bbb"
        })
    },function(){
        $(this).css({
            backgroundColor : "#cfcfcf"
        })
    })
    $(".btn2").hover(function(){
        $(this).css({
            cursor : "pointer",
            backgroundColor : "orange"
        })
    },function(){
        $(this).css({
            backgroundColor : "lightsalmon"
        })
    });
    $(".btn2").click(function(){
        if($(".ck1").is(":checked")==true && $(".ck2").is(":checked")==true){
            $("#agree").hide()
            $("#insert_your_info").show()
        }else{
            alert("필수 항목에 모두 동의하셔야 진행됩니다.")
        }
    });
    
    //회원가입,뒤로가기 버튼 이벤트
    $(".info_btn1").hover(function(){
        $(this).css({
            cursor : "pointer",
            backgroundColor : "#bbb"
        })
    },function(){
        $(this).css({
            backgroundColor : "#cfcfcf"
        })
    })
    $(".info_btn1").click(function(){
        $("#agree").show()
        $("#insert_your_info").hide()   
    });
    $(".info_btn2").hover(function(){
        $(this).css({
            cursor : "pointer",
            backgroundColor : "orange"
        })
    },function(){
        $(this).css({
            backgroundColor : "lightsalmon"
        })
    });
    $(".info_btn2").click(function(){
        if(
            $("#user_id").prop("required")==true && $("#user_pw").prop("required")==true && $("#user_pw_check").prop("required")==true 
        ){
            alert("회원가입 기능은 아직 구현이 안됐습니다..");
            $(location).attr("href", "index.html")

        }else{
            alert("필수 항목에 모두 작성하셔야 진행됩니다.");
        }
    });
});