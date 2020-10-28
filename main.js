/*To DO:
1.  Selecting product datail
	a. product color, relsults in update to the page somehow
	b. product size
	c. quantity
2. add the product to the cart
	a. give indication that a product has been added
3. make the shopping cart editable */
//console.log("hello world");
//creting a product class 
class Product{
	constructor (productName, color, size, price, quantity){
		this.productName = productName;
		this.color = color;
		this.size = size;
		this.price = price;
		this.quantity = quantity;
	}

	getProductPrice(){
		console.log(this.price * this.quantity);
	}
}
//need an array to stor the products 
var cartArr = [];
//funtion to pull the values of the product into the cart
function addToCart(){
	//hardcodeding for now, must change later
	var productName = "Dog Harness";
	var price = 200.00;
	var quantity = document.getElementById("qty").value;
	var colors = document.getElementsByName("color");
	var color;
	//looping through the array of radio buttons to find the checked slection
	for (var i = 0; i < colors.length; i++){
		//check if checked
		if(colors[i].checked){
			color = colors[i].value;
		}
	}
	var sizes = document.getElementsByName("size");
	var size;
	//looping through the array of radio buttons to find the checked slection... again
	for (var i = 0; i < sizes.length; i++){
		//check if checked
		if(sizes[i].checked){
			size = sizes[i].value;	
		}
	}
	console.log(productName);
	console.log(price);
	console.log(color);
	console.log(size);
	console.log(quantity);
	console.log("added to cart");
}
//need a function to check if all required fields are filled in to allow useres to activate the add to cart button
function fieldsCheck(){
	//these will be the values to change to determine if all fields are complete
	console.log("running check");
	var sizes = document.getElementsByName("size");
	var sizeCheck = false;
	var colors = document.getElementsByName("color");
	var colorCheck = false;
	var quantity = document.getElementById("qty").value;
	var qntCheck = false;

	for (var i = 0; i < sizes.length; i++) {
		if(sizes[i].checked){
			sizeCheck = true;
			console.log("checking size");
		}	
	}
	for (var i = 0; i < colors.length; i++) {
		if(colors[i].checked){
			colorCheck = true;
			console.log("checking color");
		}
			
	}
	if (quantity >= 1){
		qntCheck = true;
		console.log("checking qty");
	}

	if (sizeCheck && colorCheck && qntCheck){
		document.getElementById("addToCart").disabled = false;
		console.log("size true");
	}
 
}

//holy shit it works!!
//let test = new Product("prod", "red", "large", 20, 2);



