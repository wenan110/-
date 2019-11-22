define(["jquery","jquery-cookie","parabola"],function($,parabola){
    function thirdF(){
        $.ajax({
            type:"get",
            url:"../json/Main.json",
            success:function(arr){
                var node = $(`<img src="${arr[0].pic}" alt="">`)
                node.appendTo($(".AD #AD"));
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    function thirdFour(){
        $.ajax({
            type:"get",
            url:"../json/thirdFour.json",
            success:function(arr){
                for(var i=0;i<arr.length;i++){
                    var node = $(`
                    <div class="recommendBL">
                    <a href="">
                        <img src="${arr[i].pic}" alt="">
                        <h4>${arr[i].title1}</h4>
                        <h5>${arr[i].title2}</h5>
                    </a>
                    </div>
                    `)
                    node.appendTo($(".recommendB "));
                }
               
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    function result (){
        $(function(){
            var fdj = $(".fdj")
            fdj.on("mouseenter","#pic1",function(){
                $(this).css("border","2px solid #f60")
                $(".top #pic2").css("border","1px solid black")
                $("#Pic1").css("display","block")
                $("#curtain img:nth-of-type(1)").css("display","block")

            })
            fdj.on("mouseenter","#pic2",function(){
                $(this).css("border","2px solid #f60")
                $(".top #pic1").css("border","1px solid black")
                $("#Pic1").css("display","none")
                $("#curtain img:nth-of-type(1)").css("display","none")
            })
         

        })
    }
    $(function(){
        $(".picbig1").mouseenter(function(){
            $(".curtain,#curtain").show();
        }).mouseleave(function(){
            $(".curtain,#curtain").hide();
        })
        .mousemove(function(ev){
            var l = ev.pageX - $(this).offset().left - 100;
            if(l <= 0){
                l = 0;
            }
            if(l >= 300){
                l = 300;
            }

            var t = ev.pageY - $(this).offset().top - 100;
            if(t <= 0){
                t = 0;
            }
            if(t >= 300){
                t = 300;
            }
            $(".curtain").css({
                left: l,
                top: t
            })
 
            $("#curtain img").css({
                left: -2.5 * l,
                top: -2.5 * t
            })
        })


    });
    function thirdS(){
        $.ajax({
            type:"get",
            url:"../json/Second.json",
            success:function(arr){
                var node = $(`
                <div class = "fdjright">
                <h1><span>自营</span><span>${arr[1].title111}</span></h1>
                <h5>${arr[1].title222}</h5>
                <div class="title0">
                    <span class="title01">
                        <span>￥</span>
                        <div>${arr[1].maney}</div>
                    </span>
                    <div class="title02">
                    ${arr[1].title444}
                        <span>${arr[1].title5}</span>
                        <a href="" class="iconfont">&#xe625</a>
                        <a href="" class="iconfont">${arr[1].title6}&#xe611;</a>
                    </div>
                </div>
                <div class="title1">
                    <span>优惠</span><span>送积分</span><span>最高送四积分</span>
                </div>
                <div class="title2">
                   <span>评价</span>
                   <a href="">超可爱(890)</a>
                   <a href="">面料好(705)</a>
                   <a href="">很好！(564)</a>
                </div>
                <div class="title3">
                    <span>颜色</span>
                    <a href=""><img src="images/18.jpg" alt=""> <span>蓝色</span></a>
                </div>
                <div class="title4">
                    <span>规格</span>
                    <a href="">阿biu双层餐垫</a>
                    <a href="">阿biu棉麻抱枕</a>
                    <a href="">阿biu购物袋</a>
                    <a href="">阿biu围裙</a>
                    <a href="">围裙隔热四件套</a>
                    <a href="">滚筒洗衣机罩</a>
                </div>
                <div class="title5"  id="${arr[1].id}">
                    <div>数量</div>
                    <button>-</button>
                    <span >${arr[1].title20}</span>
                    <button>+</button>
                    <h3>库存1881 (限购五件)</h3>     
                </div>
                <div class="title6">
                    <div>配送</div>
                    <span>至</span>
                    <select name="1" id="">
                        <option value="">莱西</option>
                        <option value="">市北</option>
                        <option value="">市南</option>
                        <option value="">崂山</option>
                        <option value="">李沧</option>
                        
                    </select>

                    <span>有货</span>
                </div>
                <div class="title7">
                    <span>供货商</span><span>美的官网商城</span>
                </div>
                <section><span id="${arr[1].id}">${arr[1].title24}</span><a href="">立即购买</a></section>
                <article>
                    <span class="iconfont">&#xe657;</span>
                    <span class="zi">美的官方唯一商城</span>
                    <span class="iconfont">&#xe657;</span>
                    <span class="zi">全国联保</span>
                    <span class="iconfont">&#xe657;</span>
                    <span class="zi">全国包邮</span></article>
                `)
                node.appendTo($(".fdj"));
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }

    // 加减
    $(".fdj").on("click",".title5 button",function(){
        // alert("sd")
        var id = $(this).closest(".title5").attr("id")
        var abc=$(this).siblings("span").html()
        if(this.innerHTML == "+"){
           abc++;
           $(this).siblings("span").html(abc++)
           if(abc >= 6){
            alert("对不起每个人限购5个")
            $(this).siblings("span").html(5)
           }
        }
        else{
            if($(this).siblings("span").html() == 1){
                alert("数量已经见到最小了！");
            }else{
                abc--
                $(this).siblings("span").html(abc--)
            }
        }
        // alert(id)
        // var cookieArr = JSON.parse($.cookie("goods"));
        // for(var i = 0; i < cookieArr.length; i++){
        //     if(id == cookieArr[i].id){
        //         //要修改的数据
        //     //    var goodObj = cookieArr[i];
        //     //    break;
        //     alert("sdsd")
        //     }else{
        //         alert("qww")
        //     }
        // }
        
     


    })



// 点击购物车
    function abc(){
        $(".fdj").on("click",".fdjright section span:nth-of-type(1)",function(){
            var id = this.id
            // alert(id)
            var first = $.cookie("goods") == null ? true : false;
            if(first){
                //是第一次存储
                var arr = [{id: id, num: $(this).closest("section").siblings(".title5").find("span").html()}];
                $.cookie("goods", JSON.stringify(arr), {
                    expires: 7
                })
            }else{
                //判断之前是否添加过
                var cookieStr = $.cookie("goods");
                var cookieArr = JSON.parse(cookieStr);
                var same = false; //假设没有存储过
                //通过循环遍历是否有之前存储过的商品
                for(var i = 0; i < cookieArr.length; i++){
                    if(cookieArr[i].id == id){
                       cookieArr[i].num = parseInt(cookieArr[0].num) + parseInt($(this).closest("section").siblings(".title5").find("span").html()) ;
                        same = true;
                        if(cookieArr[i].num >= 5){
                            alert("限购五件哦！！！")
                            cookieArr[i].num = 5
                            break;
                        }
                    }
                }
                //判断如果没有添加过
                if(!same){
                    var obj = {id: id, num: 1};
                    cookieArr.push(obj);
                }

                $.cookie("goods", JSON.stringify(cookieArr), {
                    expires: 7
                })
                
            }
            ballMove(this)
        })
    }
  
    function ballMove(oBtn){
        //小球位置显示在加入购物车按钮这个位置\
        // alert("Df")
        $("#ball").css({
            display: 'block',
            left: $(oBtn).offset().left,
            top: $(oBtn).offset().top
        })

        var X = $("#right span:nth-of-type(3)").offset().left - $(oBtn).offset().left;
        var Y = $("#right span:nth-of-type(3)").offset().top - $(oBtn).offset().top;

        //创建一个抛物线对象
        var bool = new Parabola({
            el: "#ball",
            offset: [X, Y],
            duration: 1000,
            curvature: 0.0005,
            callback: function(){
                $("#ball").hide();
            }
        });
        //开始运动
        bool.start();
    }

 
    return {
        thirdF:thirdF,
        thirdS:thirdS,
        result:result,
        thirdFour:thirdFour,
        abc:abc,
    
      
   
     
       
    }
})
