define([ "jquery"], function($){

function mx(){
   
    $.ajax({
   
        type:"get",
        url:"../json/mx.json",
        success:function(arr){
           
          for(var i = 0 ;i < arr.length;i++){   
            var node = $(`  <aside>
            <img src="${arr[i].pic}" alt="">
            <article>${arr[i].title1}</article>
            <section>${arr[i].title2}</section>
    </aside>
            `)
            node.appendTo($(".recommend3 #recommend3"))
          }
        },
        error:function(msg){
            console.log(msg);
        }
    })     
}


return {
    mx:mx
   
}
})