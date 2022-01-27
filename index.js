let body = document.querySelector('body')
body.style.fontFamily = 'Comic Sans'
body.style.backgroundColor = 'Green'
body.style.color = 'Red'
let header = document.querySelector('#page-header')
header.style.backgroundColor = 'Orange'
let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}

// Select some elements...