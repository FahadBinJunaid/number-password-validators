

let user_number = document.getElementById("numberInput")
let btn = document.getElementById("checkBtn")
let result = document.getElementById("result")


let number_checker = () => {
    let num = user_number.value;
     if (num == "") {
        result.innerHTML ="Please enter something!"    
    }else if (isNaN(num)){
        result.innerHTML ="No integers allowed! Only numbers."   
    }
    else if (num > 0) {
        result.innerHTML = "Positive Number"
    } else if ( num == 0) {
        result.innerHTML ="Number is Zero"
    }
    else {
         result.innerHTML ="Negative Number"
    }
};

btn.addEventListener("click",number_checker)