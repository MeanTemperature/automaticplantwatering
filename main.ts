// Let's change how sensitive the moisture detector is with this button
input.onButtonPressed(Button.A, function () {
    moistureSensitivity += -50
})
function water_the_plant () {
    for (let index = 0; index < 4; index++) {
        pins.servoWritePin(AnalogPin.P0, 0)
        pins.servoWritePin(AnalogPin.P0, 0)
    }
}
// Show the current moisture reading
input.onButtonPressed(Button.AB, function () {
    basic.showString("R: ")
    basic.showNumber(reading)
})
// Let's change how sensitive the moisture detector is with this button
input.onButtonPressed(Button.B, function () {
    moistureSensitivity += 50
})
// Show the current moistureNumber
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("M:")
    basic.showNumber(moistureSensitivity)
})
let reading = 0
let moistureSensitivity = 0
// Let's make this a number we can change with the buttons - it can make the device water more or less if we change it.
// 
moistureSensitivity = 700
// what do the angles for the servo need to be?
basic.forever(function () {
    if (reading > moistureSensitivity) {
        water_the_plant()
    }
})
basic.forever(function () {
    reading = pins.analogReadPin(AnalogPin.P1)
    // Do we need this block?
    led.plotBarGraph(
    reading,
    1023
    )
    basic.pause(2000)
    basic.clearScreen()
    basic.pause(8000)
})
