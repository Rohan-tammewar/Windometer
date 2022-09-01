"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxNumberOfWindDirection = void 0;
const MaxNumberOfWindDirection = function (windData) {
    let numOfOccurence = new Map();
    let maxOccurence = [];
    windData.forEach((windSpeed) => {
        const windDirection = windSpeed.sourceDirection + " to " + windSpeed.destinationDirection;
        if (numOfOccurence.has(windDirection)) {
            numOfOccurence.set(windDirection, numOfOccurence.get(windDirection) + 1);
        }
        else {
            numOfOccurence.set(windDirection, 1);
        }
    });
    let max = -1;
    for (let [key, value] of numOfOccurence.entries()) {
        if (value > max) {
            max = value;
        }
    }
    for (let [key, value] of numOfOccurence.entries()) {
        if (value === max) {
            maxOccurence.push(key + ":" + value);
        }
    }
    return maxOccurence;
};
exports.MaxNumberOfWindDirection = MaxNumberOfWindDirection;
