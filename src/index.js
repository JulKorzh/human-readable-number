module.exports = function toReadable(number) {

    function switchTwenty(number) {  //0-9
        switch (number) {
            case 0: return "zero";
            case 1: return "one";
            case 2: return "two";
            case 3: return "three";
            case 4: return "four";
            case 5: return "five";
            case 6: return "six";
            case 7: return "seven";
            case 8: return "eight";
            case 9: return "nine";
            case 10: return "ten"
            case 11: return "eleven";
            case 12: return "twelve";
            case 13: return "thirteen";
            case 14: return "fourteen";
            case 15: return "fifteen";
            case 16: return "sixteen";
            case 17: return "seventeen";
            case 18: return "eighteen";
            case 19: return "nineteen";
        }
    }

    function switchToHundred(number) {
        switch (number) {
            case 2: return "twenty";
            case 3: return "thirty";
            case 4: return "forty";
            case 5: return "fifty";
            case 6: return "sixty";
            case 7: return "seventy";
            case 8: return "eighty";
            case 9: return "ninety";
        }
    }

    function numberUpToHundred(number) {
        let a = Math.floor(number / 10) // округление в меньш сторону 
        let b = number % 10
        if (b === 0) {
            return switchToHundred(a)
        } else {
            return switchToHundred(a) + " " + switchTwenty(b)
        }
    }

    function numberHungred(number){
        let a = Math.floor(number / 100) 
        let b = number % 100
        if (b === 0) {
            return switchTwenty(a) + " hundred"
        } else if (b < 20) {
            return switchTwenty(a) + " hundred " + switchTwenty(b)
        }else{
            return switchTwenty(a) + " hundred " + numberUpToHundred(b)
        }
    }

    if (number < 20) {
        return switchTwenty(number)
    } else if (number < 100) {
        return numberUpToHundred(number)
    } else {
        return numberHungred(number)
    }
}
