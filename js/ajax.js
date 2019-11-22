function $ajax({method = "get", url, data, success, error}){
    var xhr = null;

    try{
        xhr = new XMLHttpRequest();
    }catch(error){
        //低版本浏览器
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if(method == "get" && data){
        url += "?" + queryString(data);
    }
    xhr.open(method, url, true);

    if(method == "get"){
        xhr.send();
    }else{
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(queryString(data));
    }
    
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                //对于下载完数据以后，如何处理数据，写死的
                if(success){
                    success(xhr.responseText);
                }
            }else{
                if(error){
                    error("Error：" + xhr.status);
                }
            }
        }
    }       
}
function queryString(obj){
    var str = ``;
    for(var attr in obj){
        str += `${attr}=${obj[attr]}&`
    }
    return str.substring(0, str.length - 1);
}