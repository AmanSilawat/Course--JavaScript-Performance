const button = document.getElementById('double-sizes');
const boxes = Array.from(document.querySelectorAll('.box'));

button.addEventListener('click', (event) => {
    // recalculating the style of all element at a time
    boxes.forEach((element, index) => {
        
        fastdom.measure(() => {
            // checking the layout of all element at a time
            const widths = boxes.map(element => element.offsetWidth);

            fastdom.mutate(() => {
                element.style.width = `${widths[index] * 2}px`;
            })
        })

    })
});