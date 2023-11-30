function display(val){

    document.getElementById('result').value += val

    return val

}




function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}



function clearScreen(){

    document.getElementById('result').value = ''

}


// Optional
// function backspace(){
//     clr=document.getElementById("result");
//     clr.value=clr.value.substr(0,clr.value.length-1);
//     }