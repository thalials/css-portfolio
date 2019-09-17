document.addEventListener('DOMContentLoaded', function() {
	let params = coDesExtract()
  let value = params['id']
  let value2 = params['key']

  let db = coDesConnect('https://grupo-7-66c34.firebaseio.com/')

  db.download('/', function(data) {

    context = data['portfolio'][value]
    coDesReplace('title', context)

    context = data
    coDesReplace('.menu-list', context)

    context = data['portfolio'][value]
    coDesReplace('.tudo', context)

    context = data['portfolio'][value]
    coDesReplace('.projetos', context)
  })
})
