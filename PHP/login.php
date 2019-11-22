<?php 
	header("Content-type:text/html;charset=utf-8");
	/*
		取出post提交过来的数据
	*/
	$username = $_POST['username'];
	$password = $_POST['password'];
	/*
		简单的验证
	*/
	//登录
	$link = mysql_connect("localhost", "root", "123456");
	if(!$link){
	;
		echo "链接失败";
		exit;
	}
	mysql_set_charset("utf8");

	mysql_select_db("meidi");

	//准备sql语句，进行登录验证
	$sql = "SELECT * FROM meidi WHERE username='{$username}' AND password='{$password}'";

	$res = mysql_query($sql);

	//取出一行
	$row = mysql_fetch_assoc($res);
	if(!$row){
		echo "用户名或密码错误";
		exit;
	}else{
        echo "登录成功";
        exit;
	}

	mysql_close($link);

 ?>