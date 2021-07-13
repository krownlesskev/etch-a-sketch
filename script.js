const setGridSize = size => {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
}

const fillGrid = size => {
    for(let i = 0; i < size * size; i++){
        const gridCell = document.createElement('div')
        gridCell.id = 'gridCell'
        gridCell.addEventListener("mouseover", changeColor)
        gridContainer.appendChild(gridCell)
    }
}

const clearGrid = () => {
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
        gridContainer.removeChild(element);
    })
}

const changeSize = () => {
    let newSize = prompt('Enter a number between 1 - 32')

    if(newSize !== null) {
        newSize = parseInt(newSize);
        if(newSize <1 || newSize > 32 || Number.isNaN(newSize)) {
            alert("Enter the a number between 1 - 32 please.")
            changeSize()
        } else {
            clearGrid();
            setGridSize(newSize)
            fillGrid(newSize)
        }
    }
}

const initPage = () => {
    const header1 = document.createElement('h1')
    header1.id = 'header1'
    header1.textContent = 'Etch-a-Sketch'
    document.body.appendChild(header1)
    const gridContainer = document.createElement('div')
    gridContainer.id = 'gridContainer'
    document.body.appendChild(gridContainer)
    const sizeForm = document.createElement('div');
    sizeForm.classList.add('page');
    document.body.appendChild(sizeForm);
    const sizeButton = document.createElement('button')
    sizeButton.classList.add('changeSize')
    sizeButton.textContent = 'Change Size'
    sizeForm.appendChild(sizeButton)
    setGridSize(16);
    fillGrid(16);
    sizeButton.addEventListener('click', changeSize)
}

const changeColor = e => {
    e.target.style.backgroundColor = `black`
}

initPage()

