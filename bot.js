const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs'); // Модуль для работы с файлами

// Вставьте токен вашего бота
const token = '7987615972:AAHVzf1dr-11DcxLo0_GVEjPg3NioK0RKjU';
const bot = new TelegramBot(token, { polling: true });

// Команда /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Отправка изображения
    bot.sendPhoto(chatId, fs.createReadStream('welcome.webp'), {
        caption: '🌟 Добро пожаловать! 🌟 Я — бот Ева, ваш персональный помощник! На сервере и в группе в телеграмме "Эпоха выживания" Моя миссия — облегчить ваш игровой процесс и сделать ваш опыт более удобным и увлекательным. Выберите подходящий вариант ниже:',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Правила сервера', web_app: { url: 'https://ruslanusman.github.io/the-rule-era/' } }],
                [{ text: 'Магазин', web_app: { url: 'https://ruslanusman.github.io/era-survival/' } }],
                [{ text: 'Таланты', web_app: { url: 'https://ruslanusman.github.io/khantos-talents/' } }],
                [{ text: 'Админы', web_app: { url: 'https://ruslanusman.github.io/adaptive-menu/' } }],
                [{ text: 'Калькулятор рейда', web_app: { url: 'https://ruslanusman.github.io/hantos-calculator/' } }],
                [{ text: 'Калькулятор взрыва', web_app: { url: 'https://ruslanusman.github.io/hantos-explosion-calculator/' } }],
                [{ text: 'Партнеры', web_app: { url: 'https://ruslanusman.github.io/last-island/' } }],
                [{ text: 'Донат Лиос', web_app: { url: 'https://ruslanusman.github.io/survival-donation/' } }]
            ],
        },
    });
});

// Команда /setavatar
bot.onText(/\/setavatar/, (msg) => {
    const chatId = msg.chat.id;

    // Загрузка аватарки
    bot.sendPhoto(chatId, fs.createReadStream('welcome.webp'), {
        caption: '🖼️ Установлена новая аватарка для бота!',
    });
});

console.log('Бот запущен и работает!');
