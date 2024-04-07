const mainContainer = document.querySelector('#main-container')
const gridContainer = document.querySelector('#grid-container')
const gridButton = document.querySelector('#grid-button')
// const hoverColor = '#000000'

createGrid(16)

gridButton.addEventListener('click', (e) => {
  const gridCount = prompt('Enter Grid count: ')
  if (typeof +gridCount === 'number') {
    if (gridCount > 0 && gridCount <= 100) {
      clearGridContainer()
      createGrid(gridCount)
    }
  }
})

function createGrid(count) {
  const gridCount = count * count
  const val = (360 / +count) // 360px is the grid container's dimension
  for(i=0; i<gridCount; i++) {
    const square = document.createElement('div')
    square.setAttribute('style', `width: ${val}px;height: ${val}px;`)
    square.addEventListener('mouseover', (e) => {
      const randomHexValue = Math.floor(Math.random() * 1000)
      square.style.backgroundColor = `#${randomHexValue}`
    }, false)
    gridContainer.appendChild(square)
  }
}

function clearGridContainer() {
  gridContainer.replaceChildren()
}