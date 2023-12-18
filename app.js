const sizeOfGrid = 16;
const container = document.querySelector('.container');
const resetButton = document.querySelector('button');

const createRandomRGB = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return { r, g, b }
}

const createGrid = (amtOfGrids) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    for (let i=0; i<amtOfGrids; i++){
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j=0; j<amtOfGrids; j++){
            const { r, g, b } = createRandomRGB();

            const widthAndHeight = 960/amtOfGrids;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;
            //adding mouseenter listener to change bg
            gridBox.addEventListener('mouseenter', () => {
                const currentOpacity = Number(gridBox.style.opacity);
                gridBox.style.background = `rgb(0, 0, 0)`;
                    gridBox.style.opacity = Number(currentOpacity) + .10;
            })
            /*
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black';
            })
            */
            /*
            gridBox.addEventListener('mouseenter', () => {
                const bgColor = "rgb(" + r + "," + g + "," + b +  ")";
                gridBox.style.background = bgColor;
            })
            */
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