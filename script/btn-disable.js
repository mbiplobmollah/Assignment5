const buttons = document.getElementsByClassName('completed');

for(const button of buttons){
    button.addEventListener('click', function (event){
        event.target.disabled = true;
    })
}