define([ "jquery"], function($){
   
        //加载数据 通知栏
    function Notice(){
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
 
    function ad(){
       
        $.ajax({
       
            type:"get",
            url:"../json/ad.json",
            success:function(arr){
               
              for(var i = 0 ;i < arr.length;i++){   
                var node = $(`<a href=""><div><div id = "pic"><img src="${arr[i].pic}" alt=""></div></div></a>
                `)
                node.appendTo($(".recommend #recommend"))
              }
            },
            error:function(msg){
                console.log(msg);
            }
        })     
    }
    

    return {
        Notice:Notice,
        ad:ad,
     
       
    }
})