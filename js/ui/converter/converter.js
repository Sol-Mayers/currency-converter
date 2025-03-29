// Отрисовка курсов валют в разделе "Конвертер"
export const converter = (data, ids) => {
    const currennciesList = data
        .map((item) => `<option>${item.CharCode}</option>`)
        .join("");

    ids.forEach((item) => {
        item.innerHTML = currennciesList;
    });
};
