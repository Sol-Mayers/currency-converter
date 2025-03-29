import { roundingNumber } from "../../utils/roundingNumber.js";
import { mainDate, journalDate } from "../constants.js";

// Отрисовка курсов валют в разделе "Курсы"
export const currencyRates = (data, elem, date) => {
    if (data) {
        const currennciesList = data
            .map(
                (item) => `<div class="info-wrap">
                                <div class="currency-code">${
                                    item.CharCode
                                }</div>
                                <div class="currency-name">
                                    ${item.Name}
                                </div>
                                <div class="currency-rate">${roundingNumber(
                                    item.Value
                                )}</div>
                            </div>`
            )
            .join("");
        elem.innerHTML = currennciesList;
    }
    if (date) {
        if (mainDate.textContent === "") {
            mainDate.textContent = date;
        }
        if (journalDate.textContent === "") {
            journalDate.textContent = date;
        }
    }
};
