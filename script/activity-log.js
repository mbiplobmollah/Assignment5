document.getElementById('clear-history').addEventListener('click', function (){
    const fields = document.getElementsByClassName('newTextField');

    for (let i = fields.length - 1; i >= 0; i--) {
        fields[i].remove();
    }
})


const date = document.getElementById('time');

const newDate = new Date();

const formattedDate = newDate.toLocaleDateString('en-gb', {
    weekday:'short',
    year: 'numeric',
    month: 'short',
    day:'numeric'
});
const [weekday, monthDayYear] = formattedDate.split(',');

date.innerHTML = `${weekday}<br>${monthDayYear}`;

const now = new Date();

const formattedTime = now.toLocaleTimeString('en-gb', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
});

