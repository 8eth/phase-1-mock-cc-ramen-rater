// write your code here
const url = 'http://localhost:3000/ramens'

// DOM selector && Created Elements
list = document.querySelector('#ramen-menu')

// Register Event Listners


// Fetches
function fetchAllRamen() {
    return fetch (url)
    .then (res => res.json())
}


// Rendering
function renderAllRamen(ramenArr) {
    ramenArr.forEach(renderOneRamen)
}

function renderOneRamen(ramenObj) {
    let img = document.createElement('img')
    img.src = ramenObj.image
    img.classList.add('img')
    list.appendChild(img)

}


// // Event Handler



// // Initializer(s)
fetchAllRamen().then(renderAllRamen)
