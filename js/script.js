/* Penis */

const longUrl = document.getElementById('longUrl');
const shortUrl = document.getElementById('shortUrl');

const submitBtn = document.getElementById('submitBtn');
const copyBtn = document.getElementById('copyBtn');

// Сокращение ссылки
submitBtn.addEventListener('click', async () => {
    const url = longUrl.value;

    if (!url) {
        alert('Вставь ссылку');
        return;
    }

    try {
        const res = await fetch(`https://url-shortener-production-d04e.up.railway.app/url-shortener=${url}`);
        const data = await res.json();

        shortUrl.value = data.result.full_short_link;
    } catch (err) {
        alert('Ошибка');
    }
});

// Копирование
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(shortUrl.value);
    alert('Скопировано!');
});