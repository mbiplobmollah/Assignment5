const buttons = document.getElementsByClassName('completed');

for(const button of buttons){
    button.addEventListener('click', function (event){
        event.target.disabled = true;
         
           const num = convertString('number')
           const taskNum = convertString('task')
            const newNum = num + 1; 
            const newTaskNum = taskNum - 1;
            if(newTaskNum < 0 && newNum > num+taskNum){
                return;
            }
            else{
                alert('Board updated Successfully');
                setValueToInnertext('number', newNum); 
                setValueToInnertext('task',newTaskNum);
            }
            

    })
}