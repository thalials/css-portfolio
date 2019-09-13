document.addEventListener('DOMContentLoaded', function() {

	let params = coDesExtract()
 let value = params['key']

 let db = coDesConnect('https://codesigndeaplicativos.firebaseio.com/')

 db.download('/biblioteca/elect/livros/analcir', function(data) {

    for(let key in data) {

      console.log(data[key])


      db.download('/', function(data) {

        context = data['biblioteca'][value]
        coDesReplace('title', context)

        context = data
        coDesReplace('.menu-list', context)

        context = data['biblioteca'][value]
        coDesReplace('.call', context)

        context = data['biblioteca'][value]
        coDesReplace('.book-list', context)

    }
}
})
