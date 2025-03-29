import { getData } from "../api/getData.js";
import { ratesUrl } from "../api/constants.js";
import { getCurrentDate } from "../utils/getCurrentDate.js";

export const data = await getData(ratesUrl);
export const rubles = { RUB: { CharCode: "RUB", Value: 1 } };
export const dataWithRoubles = { ...rubles, ...data };
export const storageData = JSON.parse(localStorage.getItem("currency-rates"));
export const typedAmount = document.getElementById("typed-amount");
export const currency1 = document.getElementById("currency1");
export const currency2 = document.getElementById("currency2");
export const rateText = document.getElementById("rate-currencies");
export const rateTextStorage = document.getElementById(
    "rate-storage-currencies"
);
export const mainDate = document.getElementById("main-date");
export const journalDate = document.getElementById("main-date-storage");
export const saveRatesButton = document.querySelector(".save-rates");
export const clearRatesButton = document.querySelector(".clear-rates-storage");
export const openJournalButton = document.querySelector(".open-journal");
export const closeJournalButton = document.querySelector(".close-journal");
export const journal = document.querySelector(".journal-info");
export const date = getCurrentDate();
