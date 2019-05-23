function String_processing() {
	let text = document.string_form.string.value;
	let substring1 = document.string_form.sub_string1.value;
	let substring2 = document.string_form.sub_string2.value;
	let position = document.string_form.position.value;
	let count = document.string_form.method.length;
	let method;
	for (i=0; i<count; i++) {
		if(document.string_form.method.item(i).checked) {
			method = document.string_form.method.item(i).value;
			break;
		}
	}
	switch(method) {
		case "UpperCase":
		                 document.getElementById("result1").innerHTML=text.toUpperCase();
		                 break;
		case "indexOf":
		               document.getElementById("result1").innerHTML=text.indexOf(substring1,position);
		               break;
		case "replace":
		               document.getElementById("result1").innerHTML=text.replace(substring1,substring2);
		               break;
		default:
		        document.getElementById("result1").innerHTML="Не сте избрали един от дадените методи за обработка на низа!";
		        break;
	}
}