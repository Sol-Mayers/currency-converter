import { roundingNumber } from "./roundingNumber.js";

// Расчёт курса валют
export const calcRate = (data, sumFIeld, currency1, currency2) => {
    let result = document.querySelector(".convert-result");

    let finalSum = (data[currency1.value].Value / data[currency2.value].Value) * sumFIeld.value;

    result.textContent = `= ${roundingNumber(finalSum)}`;
};
