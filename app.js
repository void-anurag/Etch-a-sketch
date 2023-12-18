const sizeOfGrid = 16;
const container = document.querySelector('.container');
const resetButton = document.querySelector('button');

const createGrid = (amtOfGrids) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    for (let i=0; i<amtOfGrids; i++){
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j=0; j<amtOfGrids; j++){
            const widthAndHeight = 960/amtOfGrids;
            const gridBox = document.createElement('div');
            gridBox.classList.add('gird-box');
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;
            //adding mouseenter listener to change bg
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black';
            })
            row.appendChild(gridBox);
        }
        
        wrapper.appendChild(row);
    }
    container.appendChild(wrapper);
}

createGrid(sizeOfGrid);

resetButton.addEventListener('click', () =>{
    const userSize = Number(prompt("Add the dimensions for the new grid: "));

    while (userSize > 100){
        userSize = Number(prompt("Pick a number less than 100"));
    }

    const wrapper = document.querySelector('.wrapper')

    if (!wrapper){
        createGrid(userSize);
    }
    else{
        wrapper.remove();
        createGrid(userSize);
    }
});
    


/*
const allDivs = document.querySelectorAll(".grid-box");
allDivs.forEach(div => {
    div.EventListenet('mouseenter', () => {
        div.style.backgroundColor = 'black';
    })
})
*/