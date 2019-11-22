<?php
// 天龙八部
header("Content-type:text/html;charset=utf-8");
$username = $_POST['username'];
$password = $_POST['password'];
$repassword = $_POST["repassword"];
$link = mysql_connect("localhost", "root", "123456");
mysql_set_charset("utf8");
mysql_select_db("meidi");
$sql = "SELECT * FROM meidi WHERE username='{$username}'";
	$res = mysql_query($sql);
	$row = mysql_fetch_assoc($res);
	if($row){

		echo "用户名重复";
		exit;
	}
    // 注册步骤
$sql = "INSERT INTO meidi(username,password) VALUES('{$username}','{$password}')";
// echo($sql);

$res = mysql_query($sql);
    if(!$res){
        echo "服务器忙";
        exit;
    }
    else{
        echo "注册成功";
        exit;
    }
mysql_close($link);

?>