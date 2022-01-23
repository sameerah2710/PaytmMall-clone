function addAddress(){
    return `
    <div id="hd">
    <div>
        <div>
            <img height="40px" width="40px" src="https://th.bing.com/th/id/R.7cde9e180c9f6033600de228f27fc684?rik=1r%2fwHf5hcXDdQQ&riu=http%3a%2f%2fclipartmag.com%2fimages%2flocation-icon-png-23.png&ehk=6f3Me%2fzYpj1%2bdJOq8Aa1rClCQR0DK9ga47Q7xXDZVV8%3d&risl=&pid=ImgRaw&r=0" alt="">
            <h5>Add New Address</h5>
        </div>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
        </div>
    <div id="myFormDiv">
        <form id="myForm">
            <input id="fName" class="pincode" type="text" placeholder="Full Name" > <hr>
            <input id="add1" class="pincode"  type="text" placeholder="Address 1"><hr>
            <input id="add2" class="pincode" type="text" placeholder="Address 2"><hr>
            <input id="mNumber" class="pincode"  type="number" placeholder="Mobile Number"><hr>
            <input id="pin" class="pincode"  type="text" placeholder="Pincode"><hr>
            <input id="city" class="pincode"  type="text" placeholder="City"><hr>
            <input id="state" class="pincode" type="text" placeholder="State"><hr>
            <input id="checkbox" type="checkbox"> Set as Default <br><br>
        </form>
    </div>
    <button class="log" id="Done">Done</button>`;
}

function selectAddress(){
    return `<div id="hd">
    <div id="heading">
        <div>
            <img height="40px" width="40px" src="https://th.bing.com/th/id/R.7cde9e180c9f6033600de228f27fc684?rik=1r%2fwHf5hcXDdQQ&riu=http%3a%2f%2fclipartmag.com%2fimages%2flocation-icon-png-23.png&ehk=6f3Me%2fzYpj1%2bdJOq8Aa1rClCQR0DK9ga47Q7xXDZVV8%3d&risl=&pid=ImgRaw&r=0" alt="">
            <h5>Select a Delivery Address</h5>
        </div>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>    
    </div>
    <div id="savedAddress">
        <h2>From Saved Addresses</h2>
        <p class = "pointer">Add New</p>
    </div>
</div>
<div id="showAllAddress"></div>`;
}

export { addAddress, selectAddress };