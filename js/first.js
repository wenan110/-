require.config({
    paths:{
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "Main":"Main",
        "banner":"banner",
        "hy":"hy",
        "mx":"mx"
       
    },
    shim:{
        //设置依赖关系  先引入jquery.js  然后在隐去jquery-cookie
        "jquery-cookie": ["jquery"],
        //声明当前模块不遵从AMD
        "parabola": {
			exports: "_"
        }
    }

})
require(["Main","banner","hy","mx"],function(Main,banner,hy,mx){
    
    Main.Notice()
    
    banner.banner()
    banner.scoll()
    banner.sidebar()
    banner.cartoon()
    Main.ad()
    hy.hy()
    mx.mx()
   
})