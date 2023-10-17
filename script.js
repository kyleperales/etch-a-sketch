const mainContainer = document.querySelector('#main-container')
createGrid(16)

function createGrid(count) {
  gridCount = count * count
  for(i=0; i<gridCount; i++) {
    const square = document.createElement('div')
    mainContainer.appendChild(square)
  }
}
