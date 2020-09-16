const apiURL = "http://api.coindesk.com/v1/bpi/historical/close.json";

// Declaring date variables
const startDate = document.querySelector('#start');
const endDate = document.querySelector('#end');

// Draw the graph and fetching data
const printTheChart = (stockData) => {
	const dailyData = stockData.bpi;
	console.log(dailyData);

	// This is the data for the x axis:
	const stockDates = Object.keys(dailyData); // .values return an array
	console.log(stockDates);
	// This is the data for the y axis

	const bitcoinPrice = stockDates.map(date => dailyData[date]);
	console.log(bitcoinPrice);

	const ctx = document.getElementById('myChart').getContext('2d');
	const myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: bitcoinPrice,
			datasets: [{
				label: 'BPI Value',
				data: bitcoinPrice,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)'
			],
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
						}
					}]
				}		
			},
		});
}

axios.get(apiURL)
	.then(responseFromAPI => {

		console.log('Response from API: ', responseFromAPI);
		printTheChart(responseFromAPI.data)
	})
	.catch(err => 
		console.log('Error while getting the data: ', err));

function changeDate(){
	const userInputStart = startDate.value;
	const userInputEnd = endDate.value;

	console.log('Start Date: ', userInputStart);
	console.log('End Date: ', userInputEnd);

	axios.get(`${apiURL}?start=${userInputStart}&end=${userInputEnd}`)
	.then(responseFromAPI => {

		console.log('Response from API: ', responseFromAPI.data);

		printTheChart(responseFromAPI.data)
	})
	.catch(err => 
		console.log('Error while getting the data: ', err));
};

// Declaring date event listeners
startDate.addEventListener('change', changeDate);
endDate.addEventListener('change', changeDate);