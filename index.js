const formEl = document.getElementById('color-scheme')
const colorSeed = document.getElementById('color-seed')
const colorMode = document.getElementById('color-mode')
let mainEl = document.getElementById('main')

formEl.addEventListener('submit', function(e){
    e.preventDefault()
    const hex = colorSeed.value.slice(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${colorMode.value}&count=5`)
        .then(res => res.json())
        .then(data => {
            render(data.colors)
            const mainHtml = data.colors.map(color => {
                return `
                    <div class='rectangle'>
                        <div class='color-box' style='background:${color.hex.value}'></div>
                        <p>${color.hex.value}</p>
                    </div>
                `
            }).join('')
            mainEl.innerHTML = mainHtml
        })
})

function render(){
    const defaultColors = ['#000000', '#1A1919','#343232','#4F4A4A','#6A6262']

    const mainHtml = defaultColors.map(color => {
        return `
            <div class='rectangle'>
                <div class='color-box' style='background:${color}'></div>
                <p>${color}</p>
            </div>
        `
    }).join('')
    mainEl.innerHTML = mainHtml
}

render()

