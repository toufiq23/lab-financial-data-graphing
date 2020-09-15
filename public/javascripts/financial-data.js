// alert('coucou')
axios.get('http://api.coindesk.com/v1/bpi/historical/close.json')
    .then(response => {
        console.log('data=', response.data);
    })
    .catch(err => console.log('💥', err))