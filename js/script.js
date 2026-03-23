/* Penis */

const longUrl = document.getElementById('longUrl');
const shortUrlHtml = document.getElementById('shortUrl');

const submitBtn = document.getElementById('submitBtn');
const copyBtn = document.getElementById('copyBtn');

// Сокращение ссылки
submitBtn.addEventListener('click', async () => {
    const url = longUrl.value.trim();

    if (!url) {
        alert('Вставь ссылку');
        return;
    }

    try {
        const res = await fetch(`https://url-shortener-production-d04e.up.railway.app/url-shortener=${url}`);
        const data = await res.json();

        shortUrlHtml.value = data.result.shortUrl;
    } catch (err) {
        alert('Ошибка при сокращении');
        console.error(err);
    }
});

// Копирование
copyBtn.addEventListener('click', () => {
    if (!shortUrlHtml.value) return;

    navigator.clipboard.writeText(shortUrlHtml.value);
    alert('Скопировано!');
});