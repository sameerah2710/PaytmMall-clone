/** @format */

let orderArr = JSON.parse(localStorage.getItem("orderData")) || [];
console.log(orderArr);
let appendDiv = document.getElementById("append-div");
// let order_status = document.querySelector(".order-status");
let empty_div = document.querySelector("#empty-div");
let shopping_btn = document.querySelector(".shopping-btn");
showDatas(orderArr);

let filter_btn = document.getElementById("filter-id");
filter_btn.addEventListener("click", filterById);

function filterById() {
	let orderId = document.getElementById("order-id");

	let id = orderId.value;
	if (id !== "") {
		let filterList = orderArr.filter((elem) => {
			return elem.token == id;
		});
		// console.log(filterList);
		showDatas(filterList);
		orderId.innerHTML = "";
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
		orderArr.forEach(({ image_url, price, productName, token, status }) => {
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
			image.src = image_url;
			image_div.append(image);
			let details_div = document.createElement("div");
			let order = document.createElement("h2");
			order.innerHTML = status;
			let product = document.createElement("p");
			product.innerHTML = productName;
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
			window.location.href = "./order.html";
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
		orderArr.forEach(({ image_url, price, productName, token, status }) => {
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
			image.src = image_url;
			image_div.append(image);
			let details_div = document.createElement("div");
			let order = document.createElement("h2");
			order.innerHTML = status;
			let product = document.createElement("p");
			product.innerHTML = productName;
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
			window.location.href = "./order.html";
		});
	}
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
		window.location.href = "./order.html";
	});
}
