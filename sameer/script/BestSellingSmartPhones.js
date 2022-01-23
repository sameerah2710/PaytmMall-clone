var smartPhones = JSON.parse(localStorage.getItem("smartPhones"))
document.getElementsByClassName(".sMImages")
showallProducts(); 

function showallProducts(){
    let maindiv = document.getElementById("sMImages")
 maindiv.innerHTML = null 
    smartPhones.forEach(function(ele){
        let div = document.createElement('div');
        let div1 = document.createElement('div');
            div1.setAttribute("class", "im");
        let image = document.createElement('img');
        let name = document.createElement('p');
            name.setAttribute("class","sMIName")
        let pPrice = document.createElement('p');
            pPrice.setAttribute("class","sMIPrice")
        image.src = ele.image_fr;
        name.innerText = ele.name;
        pPrice.innerText = "M.R.P ₹ " + ele.price;
        div.addEventListener("click",function(){
            singleProduct(ele)
        } )
        div1.append(image);
        div.append(div1, name, pPrice);
        maindiv.append(div);
    });
}

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
         showallProducts();
    }
    else if(selected === "HtL"){
        smartPhones.sort(function(a, b){
            return b.price - a.price;
        })
        console.log(smartPhones);
         showallProducts();
    }
}
function singleProduct(ele){
    console.log(ele);
  let  singleProductElement = [];
    singleProductElement.push(ele);
    localStorage.removeItem("SingleProduct");
    localStorage.setItem("SingleProduct", JSON.stringify(singleProductElement));
    window.location.href = "demopro.html";
}

