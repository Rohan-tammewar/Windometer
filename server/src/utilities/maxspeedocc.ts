import { windDataResponseBody } from "../interfaces/windatainterface";
import { WindData } from "../models/winddata";

export const MaxNumberOfWindDirection = function (windData: windDataResponseBody[]): string[] {
    let numOfOccurence = new Map<string, number>();
    let maxOccurence: string[] = []

    windData.forEach((windSpeed) => {
        const windDirection: string = windSpeed.sourceDirection + " to " + windSpeed.destinationDirection
        if (numOfOccurence.has(windDirection)) {
            numOfOccurence.set(windDirection, numOfOccurence.get(windDirection)! + 1)
        } else {
            numOfOccurence.set(windDirection, 1)
        }
    });

    let max = -1;
    for (let [key, value] of numOfOccurence.entries()) {
        if (value > max) {
            max = value
        }
    }

    for (let [key, value] of numOfOccurence.entries()) {
        if (value === max) {
            maxOccurence.push(key + ":" + value)
        }
    }


    return maxOccurence
}

