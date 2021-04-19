// JavaScript Document
function login(){
	var acc_obj = document.getElementById("account");
	var pw_obj = document.getElementById("password");
	if((acc_obj.value=="admin")&&(pw_obj.value=="123456")){
		window.open("../index/index.html")
		}else{
		alert("用户名或密码输入错误！");
		}
}