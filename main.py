# Let's change how sensitive the moisture detector is with this button

def on_button_pressed_a():
    global moistureSensitivity
    moistureSensitivity += -50
input.on_button_pressed(Button.A, on_button_pressed_a)

# This is the code that we will run when the soil is too dry
def water_the_plant():
    for index in range(4):
        pins.servo_write_pin(AnalogPin.P0, 0)
        pins.servo_write_pin(AnalogPin.P0, 0)
# Show the current moisture reading

def on_button_pressed_ab():
    basic.show_string("R: ")
    basic.show_number(reading)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

# Let's change how sensitive the moisture detector is with this button

def on_button_pressed_b():
    global moistureSensitivity
    moistureSensitivity += 50
input.on_button_pressed(Button.B, on_button_pressed_b)

# Show the current moistureNumber

def on_logo_pressed():
    basic.show_string("M:")
    basic.show_number(moistureSensitivity)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

reading = 0
moistureSensitivity = 0
# Let's make this a number we can change with the buttons - it can make the device water more or less if we change it.
moistureSensitivity = 700

def on_forever():
    global reading
    reading = pins.analog_read_pin(AnalogPin.P1)
    # Do we need this block?
    led.plot_bar_graph(reading, 1023)
    basic.pause(2000)
    basic.clear_screen()
    basic.pause(8000)
basic.forever(on_forever)

# what do the angles for the servo need to be?

def on_forever2():
    if reading > moistureSensitivity:
        water_the_plant()
basic.forever(on_forever2)
