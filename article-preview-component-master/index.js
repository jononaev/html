const share = document.getElementById('showTooltip')
let tooltip = document.getElementById('tooltip')
let isToggle = false;



share.addEventListener('click', () => {
    if (isToggle) {
        tooltip.style.display = 'none'
        isToggle = false
    } else{
        tooltip.style.display = 'block'
        isToggle = true
    }
})