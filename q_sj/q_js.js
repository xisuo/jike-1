function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}

window.onload=function(){
	//鼠标点击的标签和要切换内容的元素
	var icon=$('q_tab-icon').getElementsByTagName('li');
	var	divs=$('q_tab-content').getElementsByTagName('div');
	if(icon.length!=divs.length)
		return;
	//遍历icon下所有的li
	for(var i=0;i<icon.length;i++){
		icon[i].id=i;
		icon[i].onclick=function(){
			for(var j=0;j<icon.length;j++){
				divs[j].style.display='none';
			}
			divs[this.id].style.display='block';
		}
	}
}