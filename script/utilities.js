function convertString(id){
    let value =  document.getElementById(id).innerText;
    let convertValue = Number(value);
    return convertValue;

}

function setValueToInnertext(id,num){
    document.getElementById(id).innerText = num;

}