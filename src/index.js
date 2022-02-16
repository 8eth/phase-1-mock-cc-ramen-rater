// Global Variables
url = 'http://localhost:3000/ramens'

// DOM Selectors
const ramenMenu = document.querySelector('#ramen-menu')
// const ramenDetail = document.querySelector('#ramen-detail')
const ramenImage = document.querySelector('.detail-image')
const ramenName = document.querySelector('.name')
const ramenRestaurant = document.querySelector('.restaurant')
const ramenRating = document.querySelector('#rating-display')
const ramenComment = document.querySelector('#comment-display')
const ramenForm = document.querySelector('#new-ramen')

const ramenFormName = document.querySelector('#new-name')
const ramenFormRes = document.querySelector('#new-restaurant')
const ramenFormImg = document.querySelector('#new-image')
const ramenFormRating = document.querySelector('#new-rating')
const ramenFormComment = document.querySelector('#new-comment')

// Listeners
ramenForm.addEventListener('submit', handleNewRamen)

// Fetchers
function fetchAllRamen(ramenArr) {
    return fetch(url)
    .then (res=> res.json())
}

// Render Functions
function renderAllRamen(ramenArr) {
    ramenArr.forEach(renderOneRamen)
    renderRamenDetail(ramenArr[0])

}

function renderOneRamen(ramenObj) {
    let img = document.createElement('img')
    img.src = ramenObj.image

    ramenMenu.appendChild(img)

    img.addEventListener('click', () => renderRamenDetail(ramenObj))   
}

function renderRamenDetail(ramenObj) {
    ramenImage.src = ramenObj.image
    ramenName.innerText = ramenObj.name
    ramenRestaurant.innerText = ramenObj.restaurant
    ramenRating.innerText = ramenObj.rating
    ramenComment.innerText = ramenObj.comment
}

// Event Handlers
function handleNewRamen(e) {
    e.preventDefault()
    const newRamenObj = {
        name: ramenFormName.value,
        restaurant: ramenFormRes.value,
        image: ramenFormImg.value,
        rating: ramenFormRating.value,
        comment: ramenFormComment.value
    }
    
    renderOneRamen(newRamenObj)
    e.target.reset()
}

// Initializer
fetchAllRamen().then(renderAllRamen)



































// // Global Variables
// const baseURL = 'http://localhost:3000'

// // DOM Selectors
// const menu = document.querySelector('#ramen-menu')
// const detail = document.querySelector('#ramen-detail')
// const rating = document.querySelector('#rating-display')
// const comment = document.querySelector('#comment-display')
// const form = document.querySelector('#new-ramen')

// // Listeners
// form .addEventListener('submit', handleAddRamen)

// // Fetchers
// function getAllRamens() {
//     return fetch(baseURL + '/ramens')
//     .then (r => r.json())
// }

// // Render Functions
// function renderAllRamen(ramenArr) {
//     ramenArr.forEach(renderOneMenu)
// }

// function renderOneMenu(ramenObj) {
//     // console.log('ramenObj: ', ramenObj)
//     const img = document.createElement('img')

//     img.src = ramenObj.image

//     img.addEventListener('click', () => renderDetail(ramenObj))

//     menu.appendChild(img)
// }

// function renderDetail(ramObj) {
//     console.log('ramObj: ', ramObj)
//     detail.innerHTML = `
//         <img class="detail-image" src=${ramObj.image} alt=${ramObj.name} />
//         <h2 class="name">${ramObj.name}</h2>
//         <h3 class="restaurant">${ramObj.restaurant}</h3>
//     `

//     rating.textContent = ramObj.rating
//     comment.textContent = ramObj.comment
// }

// // Event Handlers
// function handleAddRamen(e) {
//     e.preventDefault()
//     console.log('e: ', e)
//     const name = e.target.name.value
//     const restaurant = e.target.restaurant.value
//     const image = e.target.image.value
//     const rating = e.target.rating.value
//     const comment = e.target['new-comment'].value
//     const newRamObj = {
//         name,
//         restaurant,
//         image,
//         rating,
//         comment
//     }
//     renderOneMenu(newRamObj)
//     // form.reset()
//     e.target.reset()
// }

// // Intializers
// // getAllRamens().then(ramenArr => renderAllRamens(ramenArr))
// getAllRamens().then(renderAllRamen)