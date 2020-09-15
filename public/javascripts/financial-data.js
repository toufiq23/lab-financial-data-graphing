// alert('coucou')

const urlApi = 'http://api.coindesk.com/v1/bpi/historical/close.json'

axios.get(`${urlApi}?start=$`)
    .then(response => {


        console.log('data=', response.data.bpi);


        printTheChart(response)

        function printTheChart(response) {
            const dailyData = Object.values(response.data.bpi); // .values return an array
            const ctx = document.getElementById('my-chart').getContext('2d');

            const chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dailyData,
                    datasets: [{
                        label: 'BPI Value',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: dailyData
                    }]
                }
            })
        }
    })
    .catch(err => console.log('💥', err))

function changeDate() {
    let userInputStart = document.getElementById('start').values
    let userInputEnd = document.getElementById('end').values


}

const start = document.getElementById('start')
start.addEventListener("change", changeDate)

const end = document.getElementById('end')
end.addEventListener("change", changeDate)