function roundLikeExcel(number, numberOfDecimals) {
    if (Number.isInteger(number)) { // Testing if the number is a integer
        return number;
    } else { // If isn't, run the script!
        const splitedNumber = number.toString().split(".", 2);
        let splitedDecimals;
        let numberAdjusted;
        let adjustedDecimals = [];
        switch (numberOfDecimals) {
            case 0:
                splitedDecimals = splitedNumber[1].split("");
                if (Number(splitedDecimals[0]) >= 5) {
                    numberAdjusted = Number(splitedNumber[0]) + 1;
                } else {
                    numberAdjusted = Number(splitedNumber[0]);
                }
                break;
            case 1:
                splitedDecimals = splitedNumber[1].split("");
                if (Number(splitedDecimals[1]) >= 5) {
                    adjustedDecimals = Number(splitedDecimals[0]) + 1;
                } else {
                    adjustedDecimals = Number(splitedDecimals[0]);
                }
                numberAdjusted = Number(splitedNumber[0] + "." + adjustedDecimals.toString());
                break;
        }
        for (let i = 2; i < 11; i++) {
            switch (numberOfDecimals) {
                case i:
                    numberAdjusted = Number(captureCaseAbove1(i, splitedNumber));
                    break;
            }
        }
        return numberAdjusted;
    }
}

function captureCaseAbove1(number, splitedNumber) {
    splitedDecimals = splitedNumber[1].split("");
    const adjustedDecimals = [];
    for (let i = 0; i < number - 1; i++) {
        adjustedDecimals.push(Number(splitedDecimals[i]));
    }
    if (Number(splitedDecimals[number]) >= 5) {
        adjustedDecimals.push(Number(splitedDecimals[number - 1]) + 1);
    } else {
        adjustedDecimals.push(Number(splitedDecimals[number - 1]));
    }
    let numberInString = splitedNumber[0] + ".";
    for (let i = 0; i < number; i++) {
        numberInString += adjustedDecimals[i].toString();
    }
    return numberInString;
}