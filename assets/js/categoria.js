document.addEventListener('DOMContentLoaded', function() {

	let params = coDesExtract()
    let value = params['key']

    let db = coDesConnect('https://grupo-7-66c34.firebaseio.com/')

   db.download('/', function(data) {

    for(let key in data) {

      console.log(data[key])


      db.download('/', function(data) {

        context = data['portifolio'][value]
        coDesReplace('title', context)

        context = data
        coDesReplace('.menu-list', context)

        context = data['portifolio'][value]
        coDesReplace('.projetos', context)

        context = data['portifolio'][value]
        coDesReplace('.list_projetos', context)

    }
}
})
