var smartPhones = JSON.parse(localStorage.getItem("smartPhones"))
document.getElementsByClassName(".sMImages")
function showallProducts(smartPhones){
    let maindiv = document.getElementById("sMImages")
    smartPhones.forEach(function(ele){
        let div = document.createElement('div');
        let div1 = document.createElement('div');
        div1.setAttribute("class", "im");
        let image = document.createElement('img');
        let name = document.createElement('p');
        let pPrice = document.createElement('p');

        image.src = ele.image_fr;
        name.innerText = ele.name;
        pPrice.innerText = "M.R.P ₹ " + ele.price;

        div1.append(image);
        div.append(div1, name, pPrice);
        maindiv.append(div);
    });
}
showallProducts(smartPhones);
function sort(){
    let selected = document.querySelector("#select").value;
    if (selected === "p"){
        smartPhones = JSON.parse(localStorage.getItem("smartPhones"));
        showallProducts(smartPhones);
    }
    else if(selected === "LtH"){
        smartPhones.sort(function(a, b){
            return a.price - b.price;
        })
        console.log(Number(smartPhones[0].price));
        console.log(smartPhones);
        // showallProducts(smartPhones);
    }
    else if(selected === "HtL"){
        smartPhones.sort(function(a, b){
            return a.price - b.price;
        })
        console.log(smartPhones);
        // showallProducts(smartPhones);
    }
}