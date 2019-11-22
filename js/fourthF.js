define(["jquery","jquery-cookie"],function($){
    scnum()
    // 加载购物车
    function scmsg(){
        // alert("Sds")
        // $(".InfoBarBox .box3").empty(); //清空ul所有子节点
        $.ajax({
            type: "get",
            url: "../json/Second.json",
            success: function(arr){
                //取出cookie中的数据
                var cookieStr = $.cookie("goods");
                // alert(cookieStr)
                if(cookieStr){
                    var cookieArr = JSON.parse(cookieStr);
                    // alert(cookieArr)
                    //找出加入购物车的商品数据
                    var newArr = [];
                    for(var i = 0; i < arr.length; i++){
                        for(var j = 0; j < cookieArr.length; j++){
                            if(arr[i].id == cookieArr[j].id){
                                //增加购物车商品数量
                                arr[i].num = cookieArr[j].num;
                                newArr.push(arr[i]);
                            }
                        }
                    }
                    console.log(newArr);
                    //每次加载数据的时候，都将上一次的数据清空
                    // $(".sc_right ul").html("");
                    var sum = 0;
                    for(var i = 0; i < newArr.length; i++){                       
                        sum += newArr[i].maney * newArr[i].num;                     
                        $(".Paying").find("section").html(sum);
                        var node = $(`
                        <div class="box3" id = "${newArr[i].id}">
                        <img src="${newArr[i].pic}" alt="">
                        <h4>${newArr[i].title2}</h4>
                        <h5>${newArr[i].maney}</h5>
                        <div id = "qwe">
                            <button>-</button>
                            <span>${newArr[i].num}</span>
                            <button>+</button>
                        </div>
                        <aside>${newArr[i].maney*newArr[i].num}</aside>
                        <article>删除</article>
                        </div> 
                       
                        `)
                        node.appendTo($(".InfoBar .InfoBarBox"));
                    }
                }
            },
            error: function(msg){
                console.log(msg);
            }
        })
    }
    // 加减
    $(".InfoBarBox").on("click", ".box3 div button", function(){ 
        //商品id
        var id = $(this).closest(".box3").attr("id");
        // alert(id)
        //取出对应cookie中的数据
        var cookieArr = JSON.parse($.cookie("goods"));
        for(var i = 0; i < cookieArr.length; i++){
            if(id == cookieArr[i].id){
                //要修改的数据
               var goodObj = cookieArr[i];
               break;
            }
        }
        if(this.innerHTML == "+"){
            goodObj.num++;
            if(goodObj.id ==1 && goodObj.num > 5){
                alert("对不起该商品限购5件")  
                goodObj.num = 5;
            }
        }
        else{
            if(goodObj.num == 1){
                alert("数量已经见到最小了！");
            }else{
                goodObj.num--;
            }
        }
        //重新显示新的数量
        $(this).prevAll("span").html(goodObj.num);
        $(this).nextAll("span").html(goodObj.num);
        // 小计
        var num = parseInt($(this).closest("#qwe").prev().html()) 
        $(this).closest("#qwe").next("aside").html($(this).siblings("span").html()*num)

        $.cookie("goods", JSON.stringify(cookieArr), {
            expires: 7
        });
        scnum();
 
    })
    // 循环num
    function scnum(){
        var cookieStr = $.cookie("goods");
        if(cookieStr){
            var cookieArr = JSON.parse(cookieStr);
            var sum = 0;
            for(var i = 0; i < cookieArr.length; i++){
                sum += cookieArr[i].num;
            }
            $(".InfoBarBox .Paying aside").html(sum);
        }else{
            $(".InfoBarBox  .Paying aside").html(0);
        }
        scmaney();
    }
    //  循环价格
        function scmaney(){
        
            var bbc = $(".InfoBarBox").find(".box3").find("aside");
            var sum = 0;
            bbc.each(function(index,item){
                 sum += Number($(item).html());
            })
            $(".Paying").find("section").html(sum);
        }
    // 删除商品
    $(".InfoBarBox").on("click", ".box3 article", function(){
        //商品id
        var id = $(this).closest(".box3").remove().attr("id");
        /* 
            1、删除页面上的节点
            2、cookie存储的该数据删除
         */
        var cookieArr = JSON.parse($.cookie("goods"));
        for(var i = 0; i < cookieArr.length; i++){
            if(id == cookieArr[i].id){
                cookieArr.splice(i, 1);
                break;
            }
        }
        //存储数据到cookie的时候，判断数组是否为空
        if(cookieArr.length){
            $.cookie("goods", JSON.stringify(cookieArr), {
                expires: 7
            })
        }else{
            $.cookie("goods", null);
        }
        scnum();
    })
    // 清空购物车
    $(".InfoBarBox").on("click", ".Paying span:nth-of-type(1)", function(){
        $.cookie("goods", null);
        scmsg();
        scnum();
        
        
    })
    // 结算
    $(".InfoBarBox").on("click", ".Paying input", function(){
       alert(`穷逼，你没钱的。
       还想买东西？赶紧退出去。`)
        
        
    })
 

   
    
    return{
       
        scmsg:scmsg,
    }
})