define(['jquery'], function($) {
    function hy(){
        $.ajax({
            type:"get",
            url:"../json/hy.json",
            success:function(arr){
              for(var i = 0 ;i < arr.length;i++){   
                var node = $(`<div>
                <a href=""> <aside><img src=${arr[i].pic}" alt=""></aside></a>
               
                <section>${arr[i].name}</section>
            </div>`)
                node.appendTo($(".recommend6 #recommend6"))
              }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    return {
        hy:hy
    }
})