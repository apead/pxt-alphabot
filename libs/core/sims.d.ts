// Auto-generated from simulator. Do not edit.
declare namespace RgbLeds {
    /**
     * This is hop
     */
    //% blockId="rgbLeds" block="Set all Rgb LEDs to color %color=colorNumberPicker"
    //% shim=RgbLeds::setRgb
    function setRgb(color: number): void;

    //% blockId="rgbSingleLed" block="Set Rgb LED %ledNumber to color %color=colorNumberPicker"
    //% shim=RgbLeds::setSingleRgb
    function setSingleRgb(ledNumber: number, color: number): void;

}
declare namespace Motor {
    /**
     * This is hop
     */
    //% blockId="sampleHop" block="hop %hop on color %color=colorNumberPicker"
    //% hop.fieldEditor="gridpicker"
    //% shim=Motor::hop
    function hop(hop: Hop, color: number): void;

    //% blockId=sampleOnLand block="on land"
    //% optionalVariableArgs
    //% shim=Motor::onLand
    function onLand(handler: (height: number, more: number, most: number) => void): void;

}
declare namespace Proximity {
    /**
     * This is hop
     */
    //% blockId="sampleHop" block="hop %hop on color %color=colorNumberPicker"
    //% hop.fieldEditor="gridpicker"
    //% shim=Proximity::hop
    function hop(hop: Hop, color: number): void;

    //% blockId=sampleOnLand block="on land"
    //% optionalVariableArgs
    //% shim=Proximity::onLand
    function onLand(handler: (height: number, more: number, most: number) => void): void;

}
declare namespace InfraRed {
    /**
     * This is hop
     */
    //% blockId="sampleHop" block="hop %hop on color %color=colorNumberPicker"
    //% hop.fieldEditor="gridpicker"
    //% shim=InfraRed::hop
    function hop(hop: Hop, color: number): void;

    //% blockId=sampleOnLand block="on land"
    //% optionalVariableArgs
    //% shim=InfraRed::onLand
    function onLand(handler: (height: number, more: number, most: number) => void): void;

}
declare namespace Buzzer {
    /**
     * This is hop
     */
    //% blockId="sampleHop" block="hop %hop on color %color=colorNumberPicker"
    //% hop.fieldEditor="gridpicker"
    //% shim=Buzzer::hop
    function hop(hop: Hop, color: number): void;

    //% blockId=sampleOnLand block="on land"
    //% optionalVariableArgs
    //% shim=Buzzer::onLand
    function onLand(handler: (height: number, more: number, most: number) => void): void;

}
declare namespace Joystick {
    /**
     * This is hop
     */
    //% blockId="sampleHop" block="hop %hop on color %color=colorNumberPicker"
    //% hop.fieldEditor="gridpicker"
    //% shim=Joystick::hop
    function hop(hop: Hop, color: number): void;

    //% blockId=sampleOnLand block="on land"
    //% optionalVariableArgs
    //% shim=Joystick::onLand
    function onLand(handler: (height: number, more: number, most: number) => void): void;

}
declare namespace PanAndTilt {
    /**
     * This is hop
     */
    //% blockId="sampleHop" block="hop %hop on color %color=colorNumberPicker"
    //% hop.fieldEditor="gridpicker"
    //% shim=PanAndTilt::hop
    function hop(hop: Hop, color: number): void;

    //% blockId=sampleOnLand block="on land"
    //% optionalVariableArgs
    //% shim=PanAndTilt::onLand
    function onLand(handler: (height: number, more: number, most: number) => void): void;

}
declare namespace UsbGamepad {
    /**
     * This is hop
     */
    //% blockId="sampleHop" block="hop %hop on color %color=colorNumberPicker"
    //% hop.fieldEditor="gridpicker"
    //% shim=UsbGamepad::hop
    function hop(hop: Hop, color: number): void;

    //% blockId=sampleOnLand block="on land"
    //% optionalVariableArgs
    //% shim=UsbGamepad::onLand
    function onLand(handler: (height: number, more: number, most: number) => void): void;

}
declare namespace Camera {
    /**
     * This is hop
     */
    //% blockId="sampleHop" block="hop %hop on color %color=colorNumberPicker"
    //% hop.fieldEditor="gridpicker"
    //% shim=Camera::hop
    function hop(hop: Hop, color: number): void;

    //% blockId=sampleOnLand block="on land"
    //% optionalVariableArgs
    //% shim=Camera::onLand
    function onLand(handler: (height: number, more: number, most: number) => void): void;

}
declare namespace AI {
    /**
     * This is hop
     */
    //% blockId="sampleHop" block="hop %hop on color %color=colorNumberPicker"
    //% hop.fieldEditor="gridpicker"
    //% shim=AI::hop
    function hop(hop: Hop, color: number): void;

    //% blockId=sampleOnLand block="on land"
    //% optionalVariableArgs
    //% shim=AI::onLand
    function onLand(handler: (height: number, more: number, most: number) => void): void;

}

// Auto-generated. Do not edit. Really.
