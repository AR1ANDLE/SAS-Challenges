// Task
// You have a keyboard like this:

// !!

// You strictly abide by the typing standard. That is, use the left hand hit the left part of the keyboard,
// use the right hand hit the right part of keyboard, the boundary is:

//  L     1.....5 | 6.....0     R
//  E     Q.....T | Y.....P     I
//  F     A.....G | H.....'     G
//  T     Z.....B | N...../     H
//           SPACEBAR           T
// Note: the SpaceBar is an exception, because both hands can be used to hit it.

// Complete the function that accepts a string.

// if the string can be typed by the left hand only, return "Left"
// if the string can be typed by the right hand only, return "Right"
// if both hands are needed to type the string, return "Both"
// if the string is empty or contains only spaces, return an empty string ""
// Please remember that we are discussing the keyboard above and not any other one. 
// The reason is that we need a standard. And we will not test characters that are outside the control of both hands (please see the boundary).

// Examples
// "qwert"    -->  "Left"
// "yuiop"    -->  "Right"
// "abc"      -->  "Left"
// "ABC"      -->  "Left"
// "a b c"    -->  "Left"
// "xyz"      -->  "Both"
// "look up"  -->  "Right"
// "^&*()"    -->  "Right"
// ""         -->  ""
// "  "       -->  ""

// const left = ["1", "2", "3", "4", "5","Q", "W", "E", "R", "T", "A", "S", "D", "F", "G","Z", "X", "C", "V", "B"]

const splitKeyboardMatrix = {
  leftSide: [
    ["Esc", "F1", "F2", "F3", "F4", "F5"],
    ["`", "1", "2", "3", "4", "5"],
    ["Tab", "Q", "W", "E", "R", "T"],
    ["Caps", "A", "S", "D", "F", "G"],
    ["LShift", "Z", "X", "C", "V", "B"],
    ["LCtrl", "LWin", "LAlt", "Space_L"]
  ],
  rightSide: [
    ["F6", "F7", "F8", "F9", "F10", "F11", "F12"],
    ["6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Y", "U", "I", "O", "P", "[", "]", "\\"],
    ["H", "J", "K", "L", ";", "'", "Enter"],
    ["N", "M", ",", ".", "/", "RShift"],
    ["Space_R", "RAlt", "RWin", "Menu", "RCtrl"]
  ]
};

function leftOrRight(str) {
    let check = '';
    charLoop : for( let i = 0; i < str.length; i++) {
        if (str[i] === " " || str[i] == "") {
            continue charLoop;
        }
    }
}
