function ScriptLoad() {
	document.body.style.backgroundColor = "#ffd480";
	let h1 = document.createElement("h1");
	let text_h1 = document.createTextNode("Решаване на квадратно уравнение");
	h1.setAttribute("id","center");
	h1.appendChild(text_h1);
	document.body.appendChild(h1);
	document.body.appendChild(document.createElement("br"));
	let div = document.createElement("div");
	document.body.appendChild(div);
	let paragraph = document.createElement("p");
	let text1 = document.createTextNode("Въведете коефициентите пред неизвестните променливи в даденото уравнение!");
	paragraph.style.textAlign = "center";
	paragraph.style.fontSize = "16pt";
	paragraph.appendChild(text1);
	div.appendChild(paragraph);
	let div2 = document.createElement("div");
	document.body.appendChild(div2);
	let form_equation = document.createElement("form");
	form_equation.setAttribute("name","equation");
	form_equation.setAttribute("id","equation");
	form_equation.style.textAlign = "center";
	form_equation.style.fontSize = "16pt";
	let aa = document.createElement("input");
	aa.setAttribute("type","number");
	aa.setAttribute("name","aa");
	aa.setAttribute("id","aa");
	aa.style.width = "30px";
	form_equation.appendChild(aa);
	let x_1 = document.createTextNode("x");
	form_equation.appendChild(x_1);
	let square = document.createElement("sup");
	form_equation.appendChild(square);
	let two = document.createTextNode("2");
	square.appendChild(two);
	let plus1 = document.createTextNode(" + ");
	form_equation.appendChild(plus1);
	let bb = document.createElement("input");
	bb.setAttribute("type","number");
	bb.setAttribute("name","bb");
	bb.setAttribute("id","bb");
	bb.style.width = "30px";
	form_equation.appendChild(bb);
	let x_2 = document.createTextNode("x");
	form_equation.appendChild(x_2);
	let plus2 = document.createTextNode(" + ");
	form_equation.appendChild(plus2);
	let cc = document.createElement("input");
	cc.setAttribute("type","number");
	cc.setAttribute("name","cc");
	cc.setAttribute("id","cc");
	cc.style.width = "30px";
	form_equation.appendChild(cc);
	let eq = document.createTextNode(" = ");
	form_equation.appendChild(eq);
	let zero = document.createTextNode("0");
	form_equation.appendChild(zero);
	form_equation.appendChild(document.createElement("br"));
	form_equation.appendChild(document.createElement("br"));
	let calculate = document.createElement("input");
	calculate.setAttribute("type","button");
	calculate.setAttribute("name","calculate");
	calculate.setAttribute("id","calculate");
	calculate.setAttribute("value","Изчисли");
	calculate.setAttribute("onclick","Calculate()");
	form_equation.appendChild(calculate);
	div2.appendChild(form_equation);
	let div3 = document.createElement("div");
	let paragraph2 = document.createElement("p");
	paragraph2.setAttribute("id","result2");
	paragraph2.style.textAlign = "center";
	paragraph2.style.fontSize = "18pt";
	let paragraph1 = document.createElement("p");
	paragraph1.setAttribute("id","result1");
	paragraph1.style.textAlign = "center";
	paragraph1.style.fontSize = "18pt";
	div3.appendChild(paragraph2);
	div3.insertBefore(paragraph1,paragraph2);
	document.body.appendChild(div3);
}

function Calculate() {
	let a = document.getElementById("equation").firstChild.value;
	let c = document.getElementById("bb").nextElementSibling.value;
	let b = document.getElementById("cc").previousElementSibling.value;
	let D = Math.pow(b,2) - 4*a*c;
	let X1 = (-b + Math.sqrt(D))/(2*a);
	let X2 = (-b - Math.sqrt(D))/(2*a);
	let X = -b/(2*a);
	
	//document.getElementById("result").innerHTML = D;
	if(D>0) {
		document.getElementById("result1").innerHTML = "x1 = " + X1;
		document.getElementById("result2").innerHTML = "x2 = " + X2;
	}
	else if(D==0) {
		document.getElementById("result1").innerHTML = "x = " + X;
	}
	else {
		document.getElementById("result1").innerHTML = "УРАВНЕНИЕТО НЯМА РЕАЛНИ КОРЕНИ!";
	}
	document.getElementById("equation").lastChild.value = "ГОТОВО"
}