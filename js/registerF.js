define(["jquery"],function($){
    $(function() {
        $(".picRight .title6 span").click(function(){
            $(".picRight").css("display","none")
            $(".picRight2").css("display","block")
        })
        $(".picRight2 .title6 span:nth-of-type(2)").click(function(){
            $(".picRight").css("display","block")
            $(".picRight2").css("display","none")
        })
        $(".picRight .title21 input").blur(function(){
            var name = $(".picRight .title21 input").val()
            // alert(name.length)
            if(name.length < 6 || name.length >18 ){
                $("#title21").css("color","red");
                $("#title21").html("用户名长度为6-18");
            }else{
                $("#title21").css("color","green");
                $("#title21").html("用户名可用");
            }
        })
        $(".picRight .title22 input").blur(function(){
            var name = $(".picRight .title22 input").val()
            reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
            // alert(name.length)
            if(name.length < 8 ){
                $("#title22").css("color","red");
                $("#title22").html("密码长度应该大于8位");
            }
            else if(!reg.test(name)){
                $("#title22").css("color","red");
                $("#title22").html("字母组合应该是数字字母");
            }
            else{
                $("#title22").css("color","green");
                $("#title22").html("密码可用");
            }
        })
        $(".picRight .title23 input").blur(function(){
            var name = $(".picRight .title23 input").val()
            // alert(name.length)
            if(name !=  $(".picRight .title22 input").val()){
                $("#title23").css("color","red");
                $("#title23").html("前后密码不一致");
            }else{
                $("#title23").css("color","green");
                $("#title23").html("可用");
            }
        })
    })
    function abc(){
    
        $(".picRight .title5").click(function(){
            var a =  $("#title21").html();
            var b =  $("#title22").html();
            var c =   $("#title23").html();
            if(a == "用户名可用"&&b=="密码可用"&&c=="可用"){
                 $.ajax({
                method: "post",
                url: "PHP/register.php",
                data: {
                    username:$(".title21 input").val(),
                    password:$(".title22 input").val(),
                    repassword:$(".title23 input").val(),
                },
                success:function(result){
                    var obj = JSON.stringify(result)
                    alert(obj)
                    if(obj == '"注册成功"'){
                        $(".picRight").css("display","none")
                        $(".picRight2").css("display","block")
                    }
                    
                },
                error:function(msg){
                    alert(msg)
                }
            })
            }else{
                alert("请先按照步骤注册")
            }
           
        })
    }
    function bcd(){
        $(".picRight2 .title5").click(function(){
            $.ajax({
                method: "post",
                url: "PHP/login.php",
                data: {
                    username:$(".picRight2 .title4 input").val(),
                    password:$(".picRight2 .title7 input").val()    
                },
                success:function(result){
                    var obj = JSON.stringify(result)
                    if(obj == '"登录成功"'){
                        setInterval(function(){
                            location.assign("http://localhost/fourth.html")
                        },500)
                    }
                    else{
                        alert("账号密码错误")
                    }
                },
                error:function(msg){
                    alert(msg)
                }
            })
        })
    }
    return{
        abc:abc,
        bcd:bcd
    }
})