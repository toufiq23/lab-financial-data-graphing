// alert('coucou')
axios.get('http://api.coindesk.com/v1/bpi/historical/close.json')
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