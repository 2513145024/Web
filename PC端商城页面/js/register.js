// 获取元素
window.onload = function() {
	var phone = document.querySelector('.phone');
	var QQ = document.querySelector('.QQ');
	var name = document.querySelector('.name')
	var dx = document.querySelector('.dx');
	var pasd = document.querySelector('.pasd');
	var rpasd = document.querySelector('.rpasd');
	// 1.验证手机号
	var req1 = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	regexp(phone, req1);
	// 2.验证QQ号
	var req2 = /[1-9][0-9]{4,}/
	regexp(QQ, req2);
	// 3.昵称
	var req3 = /^[\u4e00-\u9fa5]{2,8}$/
	regexp(name, req3)
	// 4.短信验证码
	var req4 = /\d{6}/
	regexp(dx, req4)
	// 5.密码验证 
	var req5 = /^[a-zA-Z0-9_-]{6,16}$/
	regexp(pasd,req5); 
	// 6.确认密码
	pwd(pasd,rpasd)



	function regexp(ele, reg) {
		ele.onblur = function() {
			//    alert(6666)
			if (reg.test(this.value)) {
				this.nextElementSibling.className = 'success';
				this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜你输入正确'
			} else {
				this.nextElementSibling.className = 'error';
				this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不正确，请重新输入'
			}
		}
	}
	
	function pwd(pwd1,pwd2){
		pwd2.onblur = function(){
			if(pwd1.value === pwd2.value){
				this.nextElementSibling.className = 'success';
				this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜你，密码正确'
			}else{
				this.nextElementSibling.className = 'error';
				this.nextElementSibling.innerHTML = '<i class="error_icon"></i>两次密码不一致，请重新输入'
			}
		}
	}



}
