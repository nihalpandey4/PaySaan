const inputs = document.querySelectorAll(".input");

var toggle=document.querySelector("#toggle");
toggle.addEventListener("click",function(){
	var phonePass=document.getElementById("phone-password");
	if(toggle.innerHTML=="Login via password instead")
	{
			toggle.innerHTML="Login via phone instead";
			phonePass.innerHTML="Password";
			var passIn=document.getElementById("OTP");
			passIn.setAttribute("name","Password");
			passIn.setAttribute("id","Password");
	}
	else
	{
			toggle.innerHTML="Login via password instead";
			phonePass.innerHTML="Enter OTP";
			var passIn=document.getElementById("Password");
			passIn.setAttribute("name","OTP");
			passIn.setAttribute("id","OTP");
	}
})
function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
