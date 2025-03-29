// Сохранение курсов в журнал
export const saveToLocalStorage = (data, date) => {
    localStorage.setItem("currency-rates", JSON.stringify({ rates: data, date: date }));
};
