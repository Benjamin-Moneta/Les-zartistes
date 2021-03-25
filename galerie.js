/*class Carousel {
    constructor (element, options = {}) {
        this.element = element
        this.options = Object.assign({},{
            slidesToScroll: 1,
            slidesVisible: 1
        }, options)
        let children = [].slice.call(element.chilren)
        this.currentItem = 0
        this.root = this.createDivWithClass("carousel")
        this.container = this.createDivWithClass("carousel-container")
        this.root.appendChild(this.container)
        this.element.appendChild(this.root)
        this.items = children.map((child) => {
            let item = this.createDivWithClass("carousel-item")
            
            item.appendChild(child)
            this.container.appendChild(item)
            return item
        })
    
    setStyle ()
    this.createNavigation()
        
    }
    
    setStyle () {
        let ratio = this.items.length / this.otions.slidesVisible
        this.container.style.width = (ratio * 100) + "%"
        this.item.forEach(item => item.style.width = ((100 / this.options.slidesVisible) / ratio) + "%")

    }

    createNavigation () {
        let nextButton = this.createDivWithClass("carousel-next")
        let prevButton = this.createDivWithClass("carousel-prev")
        this.root.appendChild(nextButton)
        this.root.appendChild(prevButton)
        nextButton.addEventListener("click", this.next.bind(this))
        prevButton.addEventListener("click", this.prev.bind(this))
    }

    next () {
        this.gotoItem(this.currentItem + this.options.slidesToScroll)
        
    }

    prev () {
        this.gotoItem(this.currentItem - this.options.slidesToScroll)
    }

    gotoItem (index) {
        let translateX = index * -100 / this.items.length
        this.container.style.transform = "translate3d(" + translateX + "%, 0, 0)"
        this.currentItem = index
    }

    createDivWithClass (className) {
        let div = document.createElement("div")
        div.setAttribute("class", "carousel")
        return div
    }
}




document.addEventListener("DOMContentLoaded", function (){

new Carousel(document.querySelector("#carte1"),{
    slidesToScroll: 3,
    slidesVisible: 3
    })


})
*/

let grandeImg = document.getElementsByClassName("carte2");
console.log(grandeImg);

grandeImg[0].style.transform = "scale(1.2)";
