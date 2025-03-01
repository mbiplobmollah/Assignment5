function convertString(id){
    const value =  document.getElementById(id).innerText;
    const convertValue = Number(value);
    return convertValue;

}

function setValueToInnertext(id,num){
    document.getElementById(id).innerText = num;

}