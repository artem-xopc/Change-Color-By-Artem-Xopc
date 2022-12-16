const cols = document.querySelectorAll('.color')

document.addEventListener('keydown', (event) => {
    event.preventDefault()
    if (event.code.toLowerCase() === 'space') {
        setRandomColor()
    }
})

document.addEventListener('click', (event) => {
    const type = event.target.dataset.type

    if (type === "lock") {
        const node = event.target.tagName.toLowerCase() === 'i' 
        ? event.target
        : event.target.children[0]

        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')
    } else if(type === 'copy') {
        copyTextOnClick(event.target.textContent)
    }
})

function generateRandomColor() {
    const nCode = '0123456789ABCDEF'
    let color = ''
    for (i = 0; i < 6; i++) {
        color += nCode[Math.floor(Math.random() * nCode.length)]
    }
    return '#' + color
}

function copyTextOnClick(text) {
    return navigator.clipboard.writeText(text)
}

function setRandomColor(isInitial) {
    const colors = isInitial ? getColorsFromHash() : []

    cols.forEach ((col, index) => {
        const isLocked = col.querySelector('i').classList.contains('fa-lock')
        const button = col.querySelector('button')
        const text = col.querySelector('h2')

        if(isLocked) {
            colors.push(text.textContent)
            return
        }

        const color = isInitial 
        ? colors[index]
            ? colors[index] 
            : generateRandomColor() 
        : generateRandomColor()

        if(!isInitial) {
            colors.push(color)
        }

        text.textContent = color
        col.style.background = color

        setTextColor(text, color)
        setTextColor(button, color)

        updateColorsHash(colors)
    }) 
}

function updateColorsHash(colors = []) {
    document.location.hash = colors.map(col => {
        return col.toString().substring(1)
    }).join('-')
}

function setTextColor(text, color) {
    const lum = chroma(color).luminance()
    text.style.color = lum > 0.5 ? 'black' : 'white'
}

function getColorsFromHash() {
    if(document.location.hash.length > 1) {
        return document.location.hash.substring(1).split('-').map((color) => '#' + color)
    }
    return []
}

setRandomColor(true)