// Global Variables
const baseURL = 'http://localhost:3000'

// DOM Selectors
const menu = document.querySelector('#ramen-menu')
const detail = document.querySelector('#ramen-detail')
const rating = document.querySelector('#rating-display')
const comment = document.querySelector('#comment-display')
const form = document.querySelector('#new-ramen')

// Listeners
form .addEventListener('submit', handleAddRamen)

// Fetchers
function getAllRamens() {
    return fetch(baseURL + '/ramens')
    .then (r => r.json())
}

// Render Functions
function renderAllRamen(ramenArr) {
    ramenArr.forEach(renderOneMenu)
}

function renderOneMenu(ramenObj) {
    // console.log('ramenObj: ', ramenObj)
    const img = document.createElement('img')

    img.src = ramenObj.image

    img.addEventListener('click', () => renderDetail(ramenObj))

    menu.appendChild(img)
}

function renderDetail(ramObj) {
    console.log('ramObj: ', ramObj)
    detail.innerHTML = `
        <img class="detail-image" src=${ramObj.image} alt=${ramObj.name} />
        <h2 class="name">${ramObj.name}</h2>
        <h3 class="restaurant">${ramObj.restaurant}</h3>
    `

    rating.textContent = ramObj.rating
    comment.textContent = ramObj.comment
}

// Event Handlers
function handleAddRamen(e) {
    e.preventDefault()
    console.log('e: ', e)
    const name = e.target.name.value
    const restaurant = e.target.restaurant.value
    const image = e.target.image.value
    const rating = e.target.rating.value
    const comment = e.target['new-comment'].value
    const newRamObj = {
        name,
        restaurant,
        image,
        rating,
        comment
    }
    renderOneMenu(newRamObj)
    // form.reset()
    e.target.reset()
}

// Intializers
// getAllRamens().then(ramenArr => renderAllRamens(ramenArr))
getAllRamens().then(renderAllRamen)