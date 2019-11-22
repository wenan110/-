define(['jquery'], function($) {
    // banner
    function banner(){
        $.ajax({
            type:"get",
            url:"../json/Main.json",
            success:function(arr){
              for(var i = 1 ;i < 9;i++){   
                var node = $(`<a href="" class = "active"><img src="${arr[i].pic}" alt=""></a>`)
                node.appendTo($(".banner #banner #banner-inner #banner-last"))
              }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    // banner图滚动
    function scoll(){      
        $(function(){
            var timer = null;          
            var iNow = 0 ;// 代表当前第几章照片          
            var oBanner = $(".banner #banner #banner-inner #banner-last") 
            var oli = $(".banner #banner #banner-inner #banner-middle ul li")
            var bannerLast = $(".banner #banner-last")
            var Bleft = $(".banner #banner #banner-inner #left")
            var Bright = $(".banner #banner #banner-inner #right")
            // 定时器
            var bannerMiddle = $(".banner #banner-middle ul li")
            timer = setInterval(function(){  
                iNow++
                tab()                        
            },2000);          
            // 移出 移入banner
            bannerLast.mouseenter(function(){
                clearInterval(timer);
                Bleft.css("display","block")
                Bright.css("display","block")
            })
            bannerLast.mouseleave(function(){
                Bleft.css("display","none")
                Bright.css("display","none")
                timer = setInterval(function(){  
                    iNow++
                    tab()                        
                },2000);
            }) 
            // 移入移出点点
            oli.mouseenter(function(){
                bannerMiddle.removeClass("active")
                oli.css("backgroundColor","");
                clearInterval(timer);
                $(this).css("backgroundColor","white");
                iNow = $(this).index();
                oBanner.animate({left:-iNow * 1200},200)
                Bleft.css("display","block")
                Bright.css("display","block")
            })
            oli.mouseleave(function(){
                Bleft.css("display","none")
                Bright.css("display","none")
                oli.css("backgroundColor","");
                timer = setInterval(function(){  
                    iNow++
                    tab()                        
                },2000);
            })
            // 左右
            Bleft.mouseenter(function(){
                Bleft.css("display","block")
                Bright.css("display","block")
                clearInterval(timer)
            })
          
            Bright.mouseenter(function(){
                Bright.css("display","block")
                Bleft.css("display","block")
                clearInterval(timer)
            })
            Bleft.mouseleave(function(){
                timer = setInterval(function(){  
                    iNow++
                    tab()                        
                },2000);
            })
            Bright.mouseleave(function(){
                timer = setInterval(function(){  
                    iNow++
                    tab()                        
                },2000);
            })
            // 点击左右
            Bleft.click(function(){
                iNow--
                tab()
                clearInterval(timer)
                if(iNow == 0){
                  
                    iNow = 6
                    
                }
                
        })
        Bright.click(function(){
            iNow++
            tab()
            clearInterval(timer)
            if(iNow == 7){
                $("#banner-middle ul li:nth-of-type(1)").css("backgroundColor","white")

            }
            if(iNow == 1){
                $("#banner-middle ul li:nth-of-type(1)").css("backgroundColor","")

            }
         
         })

            // 调用的函数
            function tab(){     
                var oimg = $(".banner").find("#banner").find(" #banner-inner").find("#banner-last").find("a");
                bannerMiddle.removeClass("active").eq(iNow).addClass("active");     
                document.title = iNow;       
                oBanner.animate({left:-iNow * 1200},500,function(){
                    if(iNow == oimg.size()-1){
                        iNow = 0;
                        oBanner.css("left",0)  
                        bannerMiddle.eq(0).addClass("active");                    
                    }
                })
            }
        })
    }
    // banner 右边数据
    function sidebar(){
        $.ajax({
            type:"get",
            url:"../json/banner.json",
            success:function(arr){
              for(var i = 0 ;i < arr.length;i++){   
                var node = $(`
                <div id = "banner-left-frist">
                <span class="iconfont">${arr[i].title0}</span>
                <span><a href="">${arr[i].title1}</a></span>
                <span><a href="">${arr[i].title2}</a></span>
                <span class = "iconfont">${arr[i].title3}</span>
                <div id = "banner-left-second">
                    <ul id = "ul1">
                   
                    </ul>
                    <ul id = "ul2">
                
                    </ul>
                    <ul id = "ul3">
                    
                    </ul>
                
                
                </div>
                </div>
                `)
                node.appendTo($(".banner #banner #banner-inner #banner-left"))
                var Child = arr[i].childs
                for(var j = 0;j < Child.length;j++){
                    var node = $(`     
                        <li>
                            <a href="http://localhost/Second.html"><img src="${Child[j].pic}" alt="">${Child[j].title}</a>
                        </li>
                    
                    `)
                    node.appendTo($(".banner #banner #banner-inner #banner-left #banner-left-second #ul1"))
                }

                var Child2 = arr[i].childs2
                for(var a = 0;a < Child2.length;a++){
                    var node = $(`     
                    <li>
                        <a href="">
                            <img src="${Child2[a].pic}" alt="">
                            <div>${Child2[a].title1}</div>
                            <article>${Child2[a].title2}</article>
                        </a>
                    </li>
                    
                    `)
                    node.appendTo($(".banner #banner #banner-inner #banner-left #banner-left-second #ul2"))
                }


                var Child3 = arr[i].childs3
                for(var b = 0;b < Child3.length;b++){
                    var node = $(`     
                    <li>
                        <a href="">
                            <img src="${Child3[b].pic}" alt="">
                            <div>${Child3[b].title1}</div>
                            <article>${Child3[b].title2}</article>
                        </a>
                    </li>
                    
                    `)
                    node.appendTo($(".banner #banner #banner-inner #banner-left #banner-left-second #ul3"))
                }
              }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    // banner 数据 效果
    function cartoon(){
        $("#banner-left").on("mouseenter","#banner-left-frist",function(){
            $(this).find("#banner-left-second").css("display","block")
        });
        $("#banner-left").on("mouseleave","#banner-left-frist",function(){
            $(this).find("#banner-left-second").css("display","none")
        })
    }
    return{
        banner:banner,
        scoll:scoll,
        sidebar:sidebar,
        cartoon:cartoon
    }   
});