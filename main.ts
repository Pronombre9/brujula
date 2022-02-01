let x = 0
let y = 0
let pintar_x = 0
let pintar_y = 0
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    led.unplot(pintar_x, pintar_y)
    if (x < -555) {
        pintar_x = 0
    } else if (x < -200) {
        pintar_x = 1
    } else if (x > 555) {
        pintar_x = 4
    } else if (x > 200) {
        pintar_x = 3
    } else {
        pintar_x = 2
    }
    if (y < -555) {
        pintar_y = 0
    } else if (y < -200) {
        pintar_y = 1
    } else if (y > 555) {
        pintar_y = 4
    } else if (y > 200) {
        pintar_y = 3
    } else {
        pintar_y = 2
    }
    led.plot(pintar_x, pintar_y)
})
