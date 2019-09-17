document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://grupo-7-66c34.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    coDesReplace('.category-list', context)
    coDesReplace('.menu-list', context)

  })
})
