//Показ текущей даты
export const getCurrentDate = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    const currentDate = `${day}.${String(month).length == 1 ? "0" : ""}${
        month + 1
    }.${year}`;
    return currentDate;
};
