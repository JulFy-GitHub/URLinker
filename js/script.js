/* Penis */
const longUrl = document.getElementById('longUrl');
const shortUrlHtml = document.getElementById('shortUrl');
const submitBtn = document.getElementById('submitBtn');
const copyBtn = document.getElementById('copyBtn');

submitBtn.addEventListener('click', async () => {
    const url = longUrl.value.trim();

    // проверка
    if (!url) {
        alert('Вставь ссылку');
        return;
    }

    try {
        const res = await fetch('https://url-shortener-production-d04e.up.railway.app/url-shortener', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        });

        const data = await res.json();

        // предполагаем что бэк отдаёт { shortUrl: "..." }
        shortUrlHtml.value = data.shortUrlHtml;

    } catch (err) {
        console.error(err);
        alert('Ошибка запроса');
    }
});

copyBtn.addEventListener('click', () => {
    if (!shortUrl.value) {
        alert('Нечего копировать');
        return;
    }

    navigator.clipboard.writeText(shortUrlHtml.value);
    alert('Скопировано!');
});