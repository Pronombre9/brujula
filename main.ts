let pintar_x = 0
let x = input.acceleration(Dimension.X)
let y = input.acceleration(Dimension.Y)
led.plot(0, 0)
basic.forever(function () {
    if (x < -1000) {
        pintar_x = 0
    } else if (x < -200) {
        pintar_x = 1
    } else if (x < 1000) {
        pintar_x = 4
    } else if (x < 200) {
        pintar_x = 3
    } else {
    	
    }
})
