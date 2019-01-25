window.onload=function(){
	document.getElementById("result").style.display="none";
};

var url="http://numbersapi.com/";
var response,res,getnum,jso;
async function numcall(){
getnum=document.getElementById('searchBox').value;
jso='?json';
response=await fetch(url+getnum+jso);
res=await response.json();
console.log(res.text);
document.getElementById('def').innerHTML=res.text;
document.getElementById("result").style.display="block";

}
