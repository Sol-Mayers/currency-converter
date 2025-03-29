// Получение курсов валют с сервера
export const getData = async (url) => {
    try {
        const response = await fetch(url);
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/javascript")) {
            throw new TypeError("Полученные данные не являются форматом js");
        }
        const data = await response.json();
        const valutesList = data.Valute;
        return valutesList;
    } catch (error) {
        throw new Error(error.message);
    }
};
