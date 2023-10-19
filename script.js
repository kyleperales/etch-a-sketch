const mainContainer = document.querySelector('#main-container')
const gridContainer = document.querySelector('#grid-container')
const gridButton = document.querySelector('#grid-button')
const hoverColor = '#000000'

createGrid(16)

gridButton.addEventListener('click', (e) => {
  const gridCount = prompt('Enter Grid count: ')
  if (typeof +gridCount === 'number') {
    if (gridCount <= 100) {
      clearGridContainer()
      createGrid(gridCount)
    }
  }
})

function createGrid(count) {
  gridCount = count * count
  for(i=0; i<gridCount; i++) {
    const square = document.createElement('div')
    square.addEventListener('mouseover', (e) => {
      square.setAttribute('style', `background-color: ${hoverColor}`)
    }, false)
    gridContainer.appendChild(square)
  }
}

function clearGridContainer() {
  gridContainer.replaceChildren()
}