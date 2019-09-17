document.addEventListener('DOMContentLoaded', function() {


	let db = coDesConnect('https://grupo-7-66c34.firebaseio.com/')

	db.download('/', function(data) {
    	console.log(data)

    	context = data
    	coDesReplace('.projeto-title', context)

    	context = data
    	coDesReplace('.cover', context)

    	context = data
    	coDesReplace('.row', context)

    	context = data
    	coDesReplace('.cell', context)











}