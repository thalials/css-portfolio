document.addEventListener('DOMContentLoaded', function() {
	let params = coDesExtract()
  	let value1 = params['key1']
  	let value2 = params['key2']



	let db = coDesConnect('https://grupo-7-66c34.firebaseio.com/')

	db.download('/', function(data) {
    	console.log(data)

    	context = data
    	coDesReplace('.projeto-title', context)

    	context = data
    	coDesReplace('.category-list', context)

    	context = data
    	coDesReplace('.menu-list', context)


    	context = data
    	coDesReplace('.cover', context)


    	context = data['portfolio']['categoria']['projeto'][value2]
    	coDesReplace('.cell', context)











}