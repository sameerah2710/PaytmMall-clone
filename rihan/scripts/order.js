/** @format */

// let orderData = [
// 	{
// 		image_fr:
// 			"https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBAPPLE-IPHONESUNR52504EEFB6A95/1611144494479_0.jpeg?imwidth=282&impolicy=hq",
// 		name: "Samsung Galaxy S20 FE 8 GB 128 GB Cloud Mint",
// 		price: "रु41990",
// 		status: "Payment Failed",
// 		token: Math.floor(Math.random() * 171245789652),
// 	},
// 	{
// 		image_fr:
// 			"https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBSAMSUNG-GALAAPNI993020E2B4397E/1618218020020_0..jpg?imwidth=282&impolicy=hq",
// 		name: "Vivo Y72 5G 8 GB 128 GB Prism Magic",
// 		price: "रु 13999",
// 		status: "Payment Failed",
// 		token: Math.floor(Math.random() * 171245789652),
// 	},
// 	{
// 		image_fr:
// 			"https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBVIVO-Y53S-8-KIAA222802F2233326/1628335579672_0..jpg?imwidth=280&impolicy=hq",
// 		name: "Vivo Y53s 8 GB 128 GB Fantastic Rainbow",
// 		price: "रु 18490",
// 		status: "Payment Failed",
// 		token: Math.floor(Math.random() * 171245789652),
// 	},
// 	{
// 		image_fr:
// 			"https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBOPPO-F19-PROSHYA862930E590B23E/1624361012233_0.jpg?imwidth=282&impolicy=hq",
// 		name: "OPPO F19 6 GB 128 GB Prism Black",
// 		price: "रु 19990",
// 		status: "Payment Failed",
// 		token: Math.floor(Math.random() * 171245789652),
// 	},
// ];

// localStorage.setItem("orderData", JSON.stringify(orderData));

let orderArr = JSON.parse(localStorage.getItem("allOrder")) || [];
// console.log(orderArr);
let appendDiv = document.getElementById("append-div");
// let order_status = document.querySelector(".order-status");
let empty_div = document.querySelector("#empty-div");
let shopping_btn = document.querySelector(".shopping-btn");
showDatas(orderArr);

let filter_input = document.getElementById("order-id");
filter_input.addEventListener("keypress", filterById);
let orderId = document.getElementById("order-id");

function filterById(event) {
	let id = orderId.value;
	if (id !== "") {
		if (event.key == "Enter") {
			let filterList = orderArr.filter((elem) => {
				return elem.token == id;
			});
			// console.log(filterList);
			showDatas(filterList);
		}
	}
}

shopping_btn.addEventListener("click", showData);

let deals_btn = document.querySelector(".deals-btn");

deals_btn.addEventListener("click", showEmpty);
// showData(orderArr);

function showDatas(orderArr) {
	// deals_btn.style.color = "";
	// deals_btn.style.fontSize = "";

	// deals_btn.style.borderBottom = "";
	// deals_btn.style.padding = "";

	shopping_btn.style.color = "red";
	shopping_btn.style.fontSize = "17px";

	shopping_btn.style.borderBottom = "2px solid red";
	shopping_btn.style.padding = "7px 0px";

	appendDiv.innerHTML = "";
	empty_div.innerHTML = "";
	if (orderArr.length !== 0) {
		orderArr.forEach(({ image_fr, price, name, token, status }) => {
			let order_status = document.createElement("div");
			order_status.setAttribute("class", "order-status");
			let order_number = document.createElement("p");
			order_number.innerHTML = `Order No. ${token}`;

			let order_total = document.createElement("p");
			order_total.innerHTML = `Order total ${price}`;
			order_status.append(order_number, order_total);

			let image_div = document.createElement("div");
			image_div.setAttribute("class", "image-div");
			let image = document.createElement("img");
			image.src = image_fr;
			image_div.append(image);
			let details_div = document.createElement("div");
			let order = document.createElement("h2");
			order.innerHTML = status;
			let product = document.createElement("p");
			product.innerHTML = name;
			let prices = document.createElement("h2");
			prices.innerHTML = price;
			details_div.append(order, product, prices);
			details_div.setAttribute("class", "details-product");
			let mainDiv = document.createElement("div");
			mainDiv.append(image_div, details_div);
			let btn = document.createElement("button");
			let main = document.createElement("div");
			main.append(mainDiv, btn);
			btn.textContent = "View Details";
			btn.setAttribute("class", "detail-btn");
			let Div = document.createElement("div");
			Div.append(order_status, main);
			appendDiv.append(Div);
		});
	} else {
		empty_div.innerHTML = "";
		let div = document.createElement("div");
		let p = document.createElement("p");
		p.innerHTML = "No orders found!";
		let image = document.createElement("img");
		image.src =
			"https://www.seekpng.com/png/full/769-7692988_paytm-mall-logo.png";
		let btn = document.createElement("button");
		btn.innerHTML = "Start Shopping";

		empty_div.append(p, image, div);
		div.append(btn);
		btn.addEventListener("click", () => {
			window.location.href = "./homepage.html";
		});
	}
}

function showData() {
	deals_btn.style.color = "";
	deals_btn.style.fontSize = "";

	deals_btn.style.borderBottom = "";
	deals_btn.style.padding = "";

	shopping_btn.style.color = "red";
	shopping_btn.style.fontSize = "17px";

	shopping_btn.style.borderBottom = "2px solid red";
	shopping_btn.style.padding = "7px 0px";

	appendDiv.innerHTML = "";
	empty_div.innerHTML = "";
	if (orderArr.length !== 0) {
		orderArr.forEach(({ image_fr, price, name, token, status }) => {
			let order_status = document.createElement("div");
			order_status.setAttribute("class", "order-status");
			let order_number = document.createElement("p");
			order_number.innerHTML = `Order No. ${token}`;

			let order_total = document.createElement("p");
			order_total.innerHTML = `Order total ${price}`;
			order_status.append(order_number, order_total);

			let image_div = document.createElement("div");
			image_div.setAttribute("class", "image-div");
			let image = document.createElement("img");
			image.src = image_fr;
			image_div.append(image);
			let details_div = document.createElement("div");
			let order = document.createElement("h2");
			order.innerHTML = status;
			let product = document.createElement("p");
			product.innerHTML = name;
			let prices = document.createElement("h2");
			prices.innerHTML = price;
			details_div.append(order, product, prices);
			details_div.setAttribute("class", "details-product");
			let mainDiv = document.createElement("div");
			mainDiv.append(image_div, details_div);
			let btn = document.createElement("button");
			let main = document.createElement("div");
			main.append(mainDiv, btn);
			btn.textContent = "View Details";
			btn.setAttribute("class", "detail-btn");
			let Div = document.createElement("div");
			Div.append(order_status, main);
			appendDiv.append(Div);
		});
	} else {
		empty_div.innerHTML = "";
		let div = document.createElement("div");
		let p = document.createElement("p");
		p.innerHTML = "No orders found!";
		let image = document.createElement("img");
		image.src =
			"https://www.seekpng.com/png/full/769-7692988_paytm-mall-logo.png";
		let btn = document.createElement("button");
		btn.innerHTML = "Start Shopping";

		empty_div.append(p, image, div);
		div.append(btn);
		btn.addEventListener("click", () => {
			window.location.href = "./homepage.html";
		});
	}
	orderId.value = "";
}

function showEmpty() {
	shopping_btn.style.color = "";
	shopping_btn.style.fontSize = "";

	shopping_btn.style.borderBottom = "";
	shopping_btn.style.padding = "";
	appendDiv.innerHTML = "";
	empty_div.innerHTML = "";
	deals_btn.style.color = "red";
	deals_btn.style.fontSize = "17px";

	deals_btn.style.borderBottom = "2px solid red";
	deals_btn.style.padding = "7px 0px";

	let div = document.createElement("div");
	let p = document.createElement("p");
	p.innerHTML = "No orders found!";
	let image = document.createElement("img");
	image.src =
		"https://www.seekpng.com/png/full/769-7692988_paytm-mall-logo.png";
	let btn = document.createElement("button");
	btn.innerHTML = "Start Shopping";

	empty_div.append(p, image, div);
	div.append(btn);
	btn.addEventListener("click", () => {
		window.location.href = "./homepage.html";
	});
	orderId.value = "";
}
