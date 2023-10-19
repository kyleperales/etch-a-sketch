const mainContainer = document.querySelector('#main-container')
const gridContainer = document.querySelector('#grid-container')
const hoverColor = '#000000'

createGrid(16)

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
