define(["jquery","jquery-cookie","parabola"],function($,parabola){
    function SecondF(){
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
    function SecondC(){
        $.ajax({
            type:"get",
            url:"../json/Second.json",
            success:function(arr){
                for(var i = 0;i < arr.length;i++){
                    var node = $(`
                <li>
                <a href="http://localhost/third.html"><img src="${arr[i].pic}" alt=""></a>
                <div>${arr[i].maney}<span>${arr[i].title1}</span></div>
                <div><a href="http://localhost/third.html">${arr[i].title2}</a></div>
                <div>${arr[i].title3}</div>
                <div>${arr[i].title4}</div>
                <div id = "abcde"><span class="iconfont" id="${arr[i].id}">&#xe63a;购物车</span><input type="CheckBox"><span>对比</span></div>         
            </li>                
                `)
                node.appendTo($(".surface ul"));
                }
                
            },
            error:function(msg){
                console.log(msg);
            }
        })
        
    }
    function abc(){
        $("#abcd").on("click","#abcde span:nth-of-type(1)",function(){
            var id = this.id
            // alert(id)
            var first = $.cookie("goods") == null ? true : false;
            if(first){
                //是第一次存储
                var arr = [{id: id, num: 1}];
                $.cookie("goods", JSON.stringify(arr), {
                    expires: 7
                })
            }else{
                //判断之前是否添加过
                // var cookieStr = $.cookie("goods");
                // alert(cookieStr)
                // var s = JSON.stringify(cookieStr)
                // alert(s)
                // var cookieArr = JSON.parse(cookieStr);
                // alert(cookieArr)
                var cookieStr = $.cookie("goods");
                var cookieArr = JSON.parse(cookieStr);
                var same = false; //假设没有存储过
                //通过循环遍历是否有之前存储过的商品
                for(var i = 0; i < cookieArr.length; i++){
                    if(cookieArr[i].id == id){
                        cookieArr[i].num++;
                        same = true;
                        if(cookieArr[i].id ==1 && cookieArr[i].num > 5){
              
                            alert("对不起该商品限购5件")  
                            cookieArr[i].num = 5;
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
        SecondF:SecondF,
        SecondC:SecondC,
        abc:abc
    
     
       
    }
})