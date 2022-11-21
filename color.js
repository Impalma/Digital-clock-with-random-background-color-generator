class RandomColor {
    constructor() {
    this.clock = document.getElementById("clock");
    this.init();
    }

    init() {
        this.clock.addEventListener("click", (e) => {
            this.changeColor();
        })
    }

    changeColor = () => {
        const newColor = "#" + Math.floor(Math.random() *16777215).toString(16);
        document.body.style.backgroundColor = newColor;
    }
}
 const randomColor = new RandomColor();