import { converter } from "./ui/converter/converter.js";
import { calcRate } from "./utils/calcRate.js";
import {
    clearRatesButton,
    closeJournalButton,
    currency1,
    currency2,
    date,
    journal,
    openJournalButton,
    rateText,
    rateTextStorage,
    saveRatesButton,
    storageData,
    typedAmount,
    dataWithRoubles,
} from "./ui/constants.js";
import { data } from "./ui/constants.js";
import { currencyRates } from "./ui/currencyRates/currencyRates.js";
import { saveToLocalStorage } from "./utils/saveToLocalStorage.js";
import { togglePopup } from "./utils/openJournal.js";
import { clearLocalStorage } from "./utils/clearLocalStorage.js";
import { clearCurrencyRates } from "./ui/currencyRates/clearCurrencyRates.js";

converter(Object.values(dataWithRoubles), [currency1, currency2]);

currencyRates(Object.values(data), rateText, date);

typedAmount.addEventListener("input", () =>
    calcRate(dataWithRoubles, typedAmount, currency1, currency2)
);

currency1.addEventListener("change", () =>
    calcRate(dataWithRoubles, typedAmount, currency1, currency2)
);

currency2.addEventListener("change", () =>
    calcRate(dataWithRoubles, typedAmount, currency1, currency2)
);

saveRatesButton.addEventListener("click", () => {
    saveToLocalStorage(data, date);
    currencyRates(Object.values(data), rateTextStorage, date);
});

clearRatesButton.addEventListener("click", () => {
    clearLocalStorage();
    clearCurrencyRates(rateTextStorage);
});

openJournalButton.addEventListener("click", () => {
    if (storageData) {
        currencyRates(
            Object.values(storageData.rates),
            rateTextStorage,
            storageData.date
        );
    }
    togglePopup(journal);
});

closeJournalButton.addEventListener("click", () => togglePopup(journal));
