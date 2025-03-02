document.getElementById('clear-history').addEventListener('click', function (){
    const fields = document.getElementsByClassName('newTextField');

    for (let i = fields.length - 1; i >= 0; i--) {
        fields[i].remove();
    }
})