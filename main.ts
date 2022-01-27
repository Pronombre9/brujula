input.onGesture(Gesture.Shake, function () {
    led.plot(0, 0)
    led.toggle(0, 0)
})
let x = input.acceleration(Dimension.X)
let y = input.acceleration(Dimension.Y)
basic.forever(function () {
	
})
