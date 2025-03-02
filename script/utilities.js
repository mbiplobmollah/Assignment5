function convertString(id){
    const value =  document.getElementById(id).innerText;
    const convertValue = Number(value);
    return convertValue;

}

function setValueToInnertext(id,num){
    document.getElementById(id).innerText = num;

}


function getInnerText(button){
    let taskTitle = button.parentElement.previousElementSibling.querySelector('.tasks').innerText;
    const activity = document.getElementById('activity-log');

    const div = document.createElement('div');
    div.classList.add('newTextField');
    div.innerHTML = `<p class ="text-xl bg-[#F4F7FF] rounded-2xl p-2 m-2" >You have completed the task ${taskTitle} at ${formattedTime}</p>`;
    activity.appendChild(div);
                

}


