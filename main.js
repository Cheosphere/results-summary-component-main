const values = document.querySelectorAll('.summary_card_right_number')
const title = document.querySelectorAll('.summary_card_left_title')
const icons = document.querySelectorAll('.summary_icons')

// LOCAL DATA JSON
const dataRequest = async () => {
    try {
        const URL = './data.json'
        const response = await fetch(URL)
        const data = await response.json()
        // console.log(data)

        data.forEach((item, index) => {
            values[index].innerHTML = `${item.score} <span>/ 100</span>`
            title[index].innerHTML = item.category
            icons[index].src = item.icon
        })

    } catch (error) {
        console.log(error)
    }
}

dataRequest()

// ANIMATION
anime({
    targets: '.result_value_num1',
    innerHTML: [0, 76],
    easing: 'linear',
    round: 1,
    duration: 2000
})

anime({
    targets: '.result_title',
    opacity: [0, 1],
    translateY: [-50, 0],
    duration: 2000
})

anime({
    targets: '.result_value',
    scale: [0, 1],
    duration: 3000
})

anime({
    targets: '.result_text',
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 2000
})

anime({
    targets: '.summary_title',
    opacity: [0, 1],
    translateX: [-50, 0],
    duration: 2000,
    delay: 200
})

anime({
    targets: '.summary_card_reaction',
    opacity: [0, 1],
    scale: [0, 1],
    duration: 1000,
    easing: 'easeInOutExpo'
})

anime({
    targets: '.summary_card_memory',
    opacity: [0, 1],
    scale: [0, 1],
    duration: 1000,
    delay: 200,
    easing: 'easeInOutExpo'
})

anime({
    targets: '.summary_card_verbal',
    opacity: [0, 1],
    scale: [0, 1],
    duration: 1000,
    delay: 400,
    easing: 'easeInOutExpo'
})

anime({
    targets: '.summary_card_visual',
    opacity: [0, 1],
    scale: [0, 1],
    duration: 1000,
    delay: 600,
    easing: 'easeInOutExpo'
})

anime({
    targets: '.summary_btn',
    opacity: [0, 1],
    scale: [0, 1],
    duration: 2000,
    delay: 400,
    easing: 'easeInOutExpo'
})

