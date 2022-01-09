//Write your pseduo code first!

// get the celcius value from the user.
document.querySelector("#convert").addEventListener("click", convert);

// convert the temperature to fahrenheit.
function convert(){
    let degree = document.querySelector("#temperature").value;

    degree = (degree * 9 / 5) + 32
    
    // send the user
    document.querySelector('#fahrenheit').innerHTML = `The temperature in fahrenheit is ${degree}&deg; F`;
}
