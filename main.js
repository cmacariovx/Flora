document.addEventListener("DOMContentLoaded", () => {
    let count = 0
    document.getElementById('addToCartButton').addEventListener("click", (event) => {
        count++
        document.getElementById('cartItemText').innerText = `${count} Coffee Plant(s)`
    })

    document.getElementById('cartBox').addEventListener("click", (event) => {
        document.getElementById('cartCard').style.display = "flex"
        document.getElementById('cartBox').style.display = "none"

        document.getElementById('exitButton').addEventListener("click", (event) => {
            document.getElementById('cartBox').style.display = "flex"
            document.getElementById('cartCard').style.display = "none"
        })
    })
})
