controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Least_Amount = game.askForNumber("Set The Least Amount", 3)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Greatest_Amount = game.askForNumber("Set The Greatest Amount", 3)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    _8 = randint(Least_Amount, Greatest_Amount)
    if (_2 < _8) {
        while (_2 != _8) {
            _2 += 1
            if (_2 < 10) {
                _1.setPosition(90, 65)
                pause(100)
            } else if (_2 < 100) {
                _1.setPosition(80, 65)
                pause(50)
            } else {
                _1.setPosition(70, 65)
                pause(25)
            }
        }
    } else {
        while (_2 != _8) {
            _2 += -1
            if (_2 < 10) {
                _1.setPosition(90, 65)
                pause(100)
            } else if (_2 < 100) {
                _1.setPosition(80, 65)
                pause(50)
            } else {
                _1.setPosition(70, 65)
                pause(25)
            }
        }
    }
})
let Greatest_Amount = 0
let Least_Amount = 0
let _8 = 0
let _2 = 0
let _1: TextSprite = null
_1 = textsprite.create(convertToText(_2), 0, 1)
_1.setOutline(1, 3)
_1.setMaxFontHeight(20)
_1.setPosition(90, 65)
let _3 = textsprite.create(convertToText("Min - " + Least_Amount), 0, 1)
_3.setPosition(40, 100)
let _4 = textsprite.create(convertToText("Max - " + Greatest_Amount), 0, 1)
_4.setPosition(120, 100)
let _5 = textsprite.create("A to edit greatest #", 0, 1)
_5.setPosition(80, 10)
_5 = textsprite.create("B to edit least #", 0, 1)
_5.setPosition(80, 20)
let _6 = textsprite.create("Menu to Randomize!", 0, 1)
_6.setPosition(80, 30)
let textSprite = textsprite.create(convertToText(_8))
textSprite.setPosition(124, 40)
forever(function () {
    _1.setText(convertToText(_2))
    _3.setText(convertToText("Min - " + Least_Amount))
    _4.setText(convertToText("Max - " + Greatest_Amount))
    textSprite.setText(convertToText(_8))
})
