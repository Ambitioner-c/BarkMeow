	function table_1_img_left_onclick(){
		var img_bg_obj = document.getElementById("img_bg");
		var img_ct_obj = document.getElementById("img_ct"); 
		if(img_bg_obj.getAttribute("src") == "img/gou1.jpg"){
			img_bg_obj.setAttribute("src","img/gou2.jpg");
			img_ct_obj.setAttribute("src","img/dabaixiong.jpg");
		}else{
			img_bg_obj.setAttribute("src","img/gou1.jpg");
			img_ct_obj.setAttribute("src","img/bixiong.jpg");
		}
	
	function img_bg_onclick(){
		window.open("http://www.baidu.com");
	}
	}
	
	function table_1_img_right_onclick(){
		var img_bg_obj = document.getElementById("img_bg");
		var img_ct_obj = document.getElementById("img_ct"); 
		if(img_bg_obj.getAttribute("src") == "img/gou1.jpg"){
			img_bg_obj.setAttribute("src","img/gou2.jpg");
			img_ct_obj.setAttribute("src","img/dabaixiong.jpg");
		}else{
			img_bg_obj.setAttribute("src","img/gou1.jpg");
			img_ct_obj.setAttribute("src","img/bixiong.jpg");
		}
	
	function img_bg_onclick(){
		window.open("http://www.baidu.com");
	}
	}
	
	function read_more(){
		var img_bg_obj = document.getElementById("img_bg");
		if(img_bg_obj.getAttribute("src") == "img/gou1.jpg"){
			window.alert("gou1.jpg");
		}else{
			window.alert("gou2.jpg");
		}
	}