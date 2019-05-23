function Array_processing() {
	let str1 = document.array_form.array1.value;
	let str2 = document.array_form.array2.value;
	let array1 = str1.split(" ");
	let e = document.getElementsByName("array_method");
	let array_method = document.getElementById("array_method").value;
	switch(array_method) {
		case "push":
		             document.getElementById("result2").innerHTML = array1;
		             array1.push(str2);
					 document.getElementById("result3").innerHTML = array1;
		             break;
		case "shift":
		             document.getElementById("result2").innerHTML = array1;
					 array1.shift();
					 document.getElementById("result3").innerHTML = array1;
		              break;
		case "sort": 
		             document.getElementById("result2").innerHTML = array1;
					 array1.sort();
					 document.getElementById("result3").innerHTML = array1;
		             break;
		default:
		         document.getElementById("result2").innerHTML = "Не сте избрали един от дадените методи за обработка на масива!";
		         break;
		
	}
}