function validate(){
      var name=document.getElementById("1").value;
      var pwd=document.getElementById("2").value;
      var pwd2=document.getElementById("3").value;
      var mail=document.getElementById("4").value;
      var agr=document.getElementById("5");
      var reg1=/[a-zA-Z]\w*/;
      var reg2=/\w+([-+.']\w+)*@\w+([-.]\w+)*.\w+([-.]\w+)*/;
      
      if(name.length<=0)
           {alert("用户名不能为空！");}
      else if(!reg1.test(name))
           {alert("用户名格式不正确！");}
      else if(pwd.length<6)
           {alert("密码格式不正确！");}
      else if(pwd!=pwd2)
           {alert("两次密码输入不一致！");}
      else if(!reg2.test(mail))
           {alert("邮箱格式不正确！");}
      else if(!agr.ischecked)
           {alert("您未同意接受用户用户使用协议！");}
      else
           {document.form1.submit();}
}