const buttons = document.getElementsByClassName('completed');

for(const button of buttons){
    button.addEventListener('click', function (event){
        event.target.disabled = true;
        if(event.target.disabled === true){
           
           let num = convertString('number')
           let taskNum = convertString('task')
            let newNum = num + 1; 
            let newTaskNum = taskNum - 1;
            if(newTaskNum < 0 && newNum > num+taskNum){
                return;
            }
            else{
                alert('Board updated Successfully');
                setValueToInnertext('number', newNum); 
                setValueToInnertext('task',newTaskNum);
            }
            

        }
    })
}