// Let's change how sensitive the moisture detector is with this button
input.onButtonPressed(Button.A, function () {
    too_dry_number += -50
})
// This is the code that we will run when the soil is too dry
function water_the_plant () {
    for (let index = 0; index < 4; index++) {
        pins.servoWritePin(AnalogPin.P0, 0)
        pins.servoWritePin(AnalogPin.P0, 0)
    }
}
// Show the current moisture reading
input.onButtonPressed(Button.AB, function () {
    basic.showString("R: ")
    basic.showNumber(soil_moisture_reading)
})
// Let's change how sensitive the moisture detector is with this button
input.onButtonPressed(Button.B, function () {
    too_dry_number += 50
})
// Show the current moistureNumber
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("M:")
    basic.showNumber(too_dry_number)
})
let soil_moisture_reading = 0
let too_dry_number = 0
// Let's make this a number we can change with the buttons - it can make the device water more or less if we change it.
too_dry_number = 700
basic.forever(function () {
    soil_moisture_reading = pins.analogReadPin(AnalogPin.P1)
    // Do we need this block?
    led.plotBarGraph(
    soil_moisture_reading,
    1023
    )
    basic.pause(2000)
    basic.clearScreen()
    if (soil_moisture_reading > too_dry_number) {
        water_the_plant()
    }
    basic.pause(8000)
})
