function loggedIn(){
    return ``;
}

function loggedOut(){
    return `<div id="payAddress">
    <div id="Head">
        <img class="border-radius" src="https://media.istockphoto.com/vectors/delivery-truck-icon-vector-id636525322" alt="">
        <p>Delivery Address</p>
    </div>
    <hr>
    <div id="dDetails">
        <p>Deliver to <span>431703</span></p>
        <div id="changedDetails" class="font-color pointer">Change</div>
    </div>
</div>
<div id="paySummary">
    <div id="Head">
        <img class="border-radius" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS5n4UJPaho3iYi6sKCiPPMo4b7w6ZKPmiGg&usqp=CAU" alt="">
        <p>Payment Summary</p>
    </div>
    <hr>
    <div id="payDetails">
        <div>
            <p>Bag Total</p>
            <span id="totalPrice">₹ 32,990</span>
        </div>
        <div>
            <p>Shipping Charges</p>
            <span id="sCharge">Free</span>
        </div>
        <hr>
        <div>
            <p>Amount Payble</p>
            <span>₹ 32,990</span>
        </div>
        <hr>
        <div id="loginToProceed" class="pointer">Login to Proceed</div>
        <p id="continue" class="font-color pointer">Continue Shopping ></p>
    </div>
</div>`;
}

export { loggedIn, loggedOut };