// import { selectAddress } from "../components/addressComponents";

function showAllAddresses(data, location){
    console.log(data);
    console.log(location);
    data.forEach(function(ele){
        let div = document.createElement('div');
        let userName = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let div2 = document.createElement('div');
        let h5 = document.createElement('h3');
        let p5 = document.createElement('p');
        let hr = document.createElement('hr');

        div.setAttribute("class", "pointer");
        userName.innerText = ele.name;
        p1.innerText = ele.firstAdd;
        p2.innerText = ele.secondAdd;
        p3.innerText = ele.city + "-" + ele.pincode;
        p4.innerText = ele.state;
        h5.innerText = "Mobile:";
        // p5.append(h5);
        p5.innerText = ele.mobile;

        div.addEventListener("click", function(){
            // return ele;
            console.log(ele);
        })

        div2.append(h5, p5)
        div.append(userName, p1, p2, p3, p4, div2, hr);

        location.append(div);

    })
}



export default showAllAddresses;