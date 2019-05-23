function Car(_type, _brand, _model, _power, _color, _year) {
	this.type = _type;
	this.brand = _brand;
	this.model = _model;
	this.power = _power;
	this.color = _color;
	this.year = _year;
	this.print = function() {
		return " - " + this.type + ". The brand is - " + this.brand + ". The model is - " + this.model + ". The power is - " + this.power + " Wata. The color is - " + this.color + ". The year of manufacture is - " + this.year + ".";
	}
}

function Print_car() {
	let Type = "";
	if (document.getElementById("type1").checked) {
		Type = document.getElementById("type1").value;
	} else if (document.getElementById("type2").checked) {
		Type = document.getElementById("type2").value;
	} else if (Type = document.getElementById("type3").checked){
		Type = document.getElementById("type3").value;
	} else {
		Type = "Ne ste izbrali vida na avtomobila!";
	}
	let Brand = document.getElementById("brand").value;
	let Model = document.getElementById("model").value;
	let Power = document.getElementById("power").value;
	let Color = document.getElementById("color").value;
	let n_match = ntc.name(Color);
	let n_rgb = n_match[0];
	let n_name = n_match[1];
	let n_exactmatch = n_match[2];
	let Year = document.getElementById("year").value;
	
	let MyCar = new Car(Type, Brand, Model, Power, n_name, Year);
	
	document.getElementById("result").innerHTML = "My the car is " + MyCar.print(); 
}