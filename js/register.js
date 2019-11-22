require.config({
    paths:{
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "registerF":"registerF"   
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
require(["registerF"],function(registerF){
    registerF.abc()
    registerF.bcd()
})