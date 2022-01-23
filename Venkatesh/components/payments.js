function pay(){
    return ` <div id="logo">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCkYPcKH5iFDk22JwbfcR-6bOG-5IrkCEZrUU7YFTnINUKDpgHjzovxEVNdu3owLfZOg&usqp=CAU" alt="">
</div>
<div id="paymentOptions">
    <h1>Payment Options</h1>
    <p class="pointer" id="card">Debit, Credit Cards</p>
    <hr>
    <p class="pointer" id="netBanking">Net Banking</p>
    <hr>
    <p class="pointer" id="emi">EMI</p>
    <hr>
    <p class="pointer" id="upi">UPI</p>
    <hr>
</div>`;
}

function cardPayment(){
    return `<h1 id="cardPayment">Payment By Card</h1>
    <div id="myCardFormDiv">
         <input type="number" name="" id="cNumber" placeholder="Enter Card Number" /><br><br>
         <input type="text" name="" id="cName" placeholder="Enter Card Holder Name" /><br><br>
         <input type="number" name="" id="cvv" placeholder="Enter cvv"><br><br>
         <input type="submit" name="" id="submit" value="Submit">
        <div id="otpGenerator"></div>
    </div>`;
}
function otp(){
    return `<div id="otpInput">
    <input type="number" name="OTP" id="OTP" placeholder="Enter otp">
    <input type="submit" value="Submit" id="otpSubmit" />
</div>`;
}

export { pay, cardPayment, otp };