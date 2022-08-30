let body = document.getElementById('demo')
let colors = document.getElementById('change')
let selector = document.getElementById('selectors')
let addCar = document.getElementById('add')
cards()
selectors()
add()


function cards(){
    document.getElementById('demo').innerHTML = ""
    for (let i = 0; i < cars.length; i++){
        let card = document.createElement('div')
        card.className = 'card'
        card.style = 'width: 18rem;'
        
        let cardBody = document.createElement('div')
        cardBody.className = 'card-body'
        
        let box = document.createElement('div')
        box.className = 'box' 
        box.innerText = 'Color'
        box.style.backgroundColor = cars[i].color
    
        let cardTitle = document.createElement('h5')
        cardTitle.className = 'card-title'
        cardTitle.innerText = cars[i].brand
        
        let cardText = document.createElement('p')
        cardText.className = 'card-text'
        cardText.innerText = cars[i].model
    
            
        card.appendChild(cardBody)
        cardBody.appendChild(box)
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardText)
    
        body.appendChild(card)
    }
}

function selectors() {
    let breack = document.createElement('br')

    let color = document.createElement('input')
    color.type = 'color'
    color.name = ''
    color.id = 'change'

    let changecolor2 = document.createElement('input')
    changecolor2.type = 'button'
    changecolor2.value = 'Change color to all'
    changecolor2.id = 'changecolor'

    let changecolor3 = document.createElement('input')
    changecolor3.type = 'button'
    changecolor3.value = 'Random colors'
    changecolor3.id = 'random'

    selector.appendChild(breack)
    selector.appendChild(color)
    selector.appendChild(breack)
    selector.appendChild(changecolor2)
    selector.appendChild(changecolor3)
}

function add() {
    let breack = document.createElement('br')

    let addTitle = document.createElement('h3')
    addTitle.innerText= "Add new car"

    let addcolor = document.createElement('input')
    addcolor.type = 'color'
    addcolor.name = ''
    addcolor.id = 'newcolor'

    let addBrand = document.createElement('input')
    addBrand.type = 'text'
    addBrand.placeholder = 'Brand'
    addBrand.id = 'brand'

    let addModel = document.createElement('input')
    addModel.type = 'text'
    addModel.placeholder = 'Model'
    addModel.id = 'model'

    let addButton = document.createElement('input')
    addButton.type = 'button'
    addButton.value = 'Add'
    addButton.id = 'addButton'

    addCar.appendChild(addTitle)
    addCar.appendChild(addcolor)
    addCar.appendChild(breack)
    addCar.appendChild(addBrand)
    addCar.appendChild(addModel)
    addCar.appendChild(addButton)
}


let change = document.getElementById('changecolor').addEventListener('click', colorC)
let random = document.getElementById('random').addEventListener('click', colorR)
let newCar = document.getElementById('addButton').addEventListener('click', carnew)


function colorC() {
    colors = document.getElementById('change').value
        for (let i = 0; i < cars.length; i++){
            cars[i].color = colors
        }
        cards()
}

function colorR() {
    for (let i = 0; i < cars.length; i++){
        colors = '#' + Math.floor(Math.random()*16777215).toString(16);
        cars[i].color = colors
    }
    cards()
}

function carnew() {
    let newmodel = document.getElementById('model').value
    let newbrand = document.getElementById('brand').value
    let newcolor = document.getElementById('newcolor').value
    cars.push({brand : newbrand, model : newmodel, color : newcolor})
    cards()
}