//选择方法运行

//弹出提示框
function fun_alert(a) {
	alert(a);
};

//a++和++a的自增用法
function fun_zizeng() {
	var a = 24;
	var b = a;
	var c = b++;
	a++;
	alert("a=" + a + "\n" + "b=" + b + "\n" + "c=" + c);
};

//字符串的应用
function fun_string() {
	var doubleEscape = "My name is \"McC\".";
	alert(doubleEscape);
};

//数组的使用
function fun_array_1() {
	var rack = [];
	rack[0] = "rack_1";
	rack[1] = "rack_2";
	rack[2] = "rack_3";
	rack[3] = "rack_4";
	alert(rack);
};

//或者这样声明
function fun_array_2() {
	var rock = ["rock_1", "rock_2", "rock_3", "rock_4"];
	alert(rock);
};

//定义二维数组a[]
//注意!一点要先定义子数组b[]、c[]、d[]、e[],之后再定义二维数组a[]！不然无法组成数组！
function fun_2dArray() {
	var b = ["1d11", "1d12", "1d13", "1d14"];
	var c = ["1d21", "1d22", "1d23", "1d24"];
	var d = ["1d31", "1d32", "1d33", "1d34"];
	var e = ["1d41", "1d42", "1d43", "1d44"];
	var a = [b, c, d, e];

	alert(a);
	//打印a[]中第三个数组d[]中的第4个元素
	alert(a[2][3]);

	//获取数组长度
	var length = a.length;
	alert(length);
};

//定义关联数组
function fun_customArray() {
	var postcodes = [];
	postcodes["Mcc_1"] = 100010;
	postcodes["Mcc_2"] = 100011;
	postcodes["Mcc_3"] = 100012;
	postcodes["Mcc_4"] = 100013;
	//指向数组里下标为"Mcc_3"的元素：邮编100012
	alert(postcodes["Mcc_3"]);
};

//条件语句
function fun_ifElse() {
	var a = 25;
	if(a >= 10 & a <= 30) {
		alert("Mcc is 25 years old.");
	}

	var b = "Mcc";
	if(b == "A" || b == "B" || b == "C") {
		alert("b is not Mcc");
	} else if(b == "Mcc") {
		alert("b is not \"A\" or \"B\" or \"C\".")
	}
};

//while循环
function fun_while() {
	var num = [1, 2, 3, 4, 5, 6, 7, 8];
	var i = 0;
	//若利用标识作为循环条件则需要设置为：标识<数组长度，若设置为：标识<=数组长度，则会出现多循环1次的现象
	while(i < num.length) {
		alert(num[i]);
		i++;
	}
	alert("'while'共循环了" + i + "次.");
};

//do-while循环
function fun_doWhile() {
	var num = [1, 2, 3, 4, 5, 6];
	var i = 0;
	do {
		alert(num[i]);
		i++;
	} while (i < num.length);
	alert("'do while'共循环了" + i + "次.");
};

//for循环
function fun_for() {
	var num = [1, 2, 3, 4, 5, 6, 7, 8];
	for(var i = 0; i < num.length; i++) {
		alert(num[i]);
	}
	alert("'for'共循环了" + i + "次.");
};

//函数输出
function fun_sandwich(bread, meat) {
	return bread + meat + bread;
};

function fun_output() {
	var lunch = fun_sandwich("a", "b");
	alert(lunch);
};

//全局变量
function countWiis() {
	var stock = 5;
	var sales = 3;
	return stock - sales;
};

function fun_countWiis() {
	var sales = 0;
	wiis = countWiis();
	alert(wiis);
};

function objact() {
	//	变量名通常以小写开头（robot），而对象名通常以大写开头（Robot）；
	//	在对象定义语法中,大括号对({})表示一个新的对象,在大括号内,分别列出对象的属性和方法,并将它们用逗号隔开,用冒号(:)而不是赋值操作符为对象的属性和方法赋值;
	//	定义属性时不需要使用关键字var，因为这些属性总是通过包含他们的对象来访问的，他们的作用域只局限于对象范围内
	var Robot = {
		metal: "Titanium",
		color: "Black",
		killAllHumans: function() {
			alert("Exterminate!");
		}
		//定义对象后一定在句尾括号后加分号结束(;)!!!!
	};
	//调用对象中的属性或者函数时使用对象名+点（Robot.metal）进行
	Robot.killAllHumans();
};

//DOM模型要将方法插入到需要的html代码位置，javascript文件基本会在html文件前辈加载完毕，所以不会提前读取
//文档对象模型（DOM），通过ID属性查找元素
function findById(findById) {
	var target = document.getElementById(findById);
	if(target != null) {
		alert(target.nodeName);
	};
};

//文档对象模型（DOM），通过标签名称查找元素
function findByTagName(findByTagName) {
	var listItems = document.getElementsByTagName(findByTagName);
	//打印每个符合标签的名称
	for(var i = 0; i < listItems.length; i++) {
		//打印每个li标签中的文本内容
		alert(listItems[i].innerText);
	}
	alert("共有" + listItems.length + "个" + findByTagName + "标签。");
};

//自定义函数，按照class名称查找元素，参数theClass为所查找的class名称
function firstRealFunction(theClass) {
	var elementArray = [];
	//document.all为IE 5.X中提供的包含所有元素的节点列表，在其他版本无此对象，故须先做判断，若document.all对象无值（IE版本不支持）浏览器则返回undefined，则需将所有元素节点赋值给elementArray数组
	if(typeof document.all != "undefined") {
		elementArray = document.all;
	} else {
		elementArray = document.getElementsByTagName("*");
	}

	//matchedArray数组用来存放parrern.test匹配后turn结果的节点数组
	var matchedArray = [];
	//pattern为正则匹配的对象，表明其后参数为正则表达式而非参数
	var pattern = new RegExp("(^|)" + theClass + "(|$)");
	for(var i = 0; i < elementArray.length; i++) {
		//每个节点的.className属性对应于HTML中元素的class属性值，pattern.test运行时先把传递给函数的字符串参数与正则表达式进行匹配，如果匹配则说明该字符串中包含指定的类名，返回turn；否则返回false。
		if(pattern.test(elementArray[i].className)) {
			//matchedArray.length用于使matchedArray数组滚动，腾出新空间存放下一个符合匹配条件的结果元素
			matchedArray[matchedArray.length] = elementArray[i];
		}
	}
	return matchedArray;
};

//上面函数的另一种书写方式(暂无法使用)
Mcc.getElementsByClass = function(theClass) {
	var elementArray = [];
	//document.all为IE 5.X中提供的包含所有元素的节点列表，在其他版本无此对象，故须先做判断，若document.all对象无值（IE版本不支持）浏览器则返回undefined，则需将所有元素节点赋值给elementArray数组
	if(typeof document.all != "undefined") {
		elementArray = document.all;
	} else {
		elementArray = document.getElementsByTagName("*");
	}

	//matchedArray数组用来存放parrern.test匹配后turn结果的节点数组
	var matchedArray = [];
	//pattern为正则匹配的对象，表明其后参数为正则表达式而非参数
	var pattern = new RegExp("(^|)" + theClass + "(|$)");
	for(var i = 0; i < elementArray.length; i++) {
		//每个节点的.className属性对应于HTML中元素的class属性值，pattern.test运行时先把传递给函数的字符串参数与正则表达式进行匹配，如果匹配则说明该字符串中包含指定的类名，返回turn；否则返回false。
		if(pattern.test(elementArray[i].className)) {
			//matchedArray.length用于使matchedArray数组滚动，腾出新空间存放下一个符合匹配条件的结果元素
			matchedArray[matchedArray.length] = elementArray[i];
		}
	}
	return matchedArray;
};

//遍历DOM树,父节点parentNode、子节点chileNode、前兄弟节点previousSibling、后兄弟节点nextSibling
function treeOfDOM(idOfElement) {
	//用idOfEle
	var idOfEle = idOfElement;
	var idOfElement = document.getElementById(idOfElement);
	//一个元素只有一个父节点
	var parentNode = idOfElement.parentNode;
	//一个元素可以有多个子节点
	var childNode = idOfElement.childNodes;
	//快速选择第一个子节点
	var firstChildNode = idOfElement.firstChild;
	//快速选择最后一个子节点
	var lastChildNode = idOfElement.lastChild;
	//前节点
	var	previousSibling = idOfElement.previousSibling;
	//后节点
	var	nextSibling = idOfElement.nextSibling;
	
	alert('"'+idOfEle+'" '+"'s parentNode is "+parentNode+"\n"
	+'"'+idOfEle+'" '+"'s childNode is "+childNode+"\n"
	+'"'+idOfEle+'" '+"'s firstChildNode is "+firstChildNode+"\n"
	+'"'+idOfEle+'" '+"'s lastChildNode is "+lastChildNode+"\n"
	+'"'+idOfEle+'" '+"'s previousSibling is "+previousSibling+"\n"
	+'"'+idOfEle+'" '+"'s nextSibling is "+nextSibling+"\n" );
	
};

//更改body的背景颜色和字体颜色
function changeStyle(){
	var body = document.getElementByTagName("body")[0];
	body.Style.backgroundColor = "#000000";
	body.Style.color = "#FFFFFF";
};

