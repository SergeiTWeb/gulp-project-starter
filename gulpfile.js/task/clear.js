const del = require("del");

// Конфигурация
const path = require("../config/path.js");

//Удаление лиректории public для чистки ненужны файлов в процессе сборки
// Вместо обычного require используем асинхронный импорт:
const clear = async () => {
    const { deleteAsync } = await import("del");
    return deleteAsync(path.root);
}

module.exports = clear;