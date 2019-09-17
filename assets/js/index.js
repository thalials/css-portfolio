document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://grupo-7-66c34.firebaseio.com/')

  db.download('/', function(data) {
    console.log(data)

    context = data
    coDesReplace('.category-list', context)

  })
})
