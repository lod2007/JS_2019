export default class Couner {
    constructor(container) {
        this.count = 0,
            this.timer = null
       
        this.buildView(container)
    }


    buildView(conteiner) {
        const display = document.createElement('h3')
        display.classList.add('counter_display')
       
        const row = document.createElement('div')
        row.classList.add('counter_row')

        const btnPlus = document.createElement('button')
        btnPlus.classList.add('counter_btn')
        btnPlus.innerText='UP'

        const btnMinus = document.createElement('button')
        btnMinus.classList.add('counter_btn')
        btnMinus.innerText='DOWN'
        btnMinus.addEventListener('click',()=>{this.minus(display)

        })

        row.appendChild(btnPlus)
        row.appendChild(btnMinus)


        conteiner.appendChild(display)
        conteiner.appendChild(row)
    }


    plus(display) {
        this.count++
        display.innerText = this.count
    }

    minus(display) {
        this.count--
        display.innerText = this.count
    }

    timeStart() {
        this.timer = setInterval(() => {
            this.count++
            this.display.innerText = this.count

            //console.log(this.count)
        }, 1000)
    }

    timerStop () {
        clearInterval(this.timer)
    }
} // конец класса ептыть!