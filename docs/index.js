
const form = document.querySelector('form');
form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const body = Object.fromEntries(new FormData(e.target));

    console.log(body);

    const result = await window.fetch(body.$url, {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(body)
    });

    console.log(await result.text());

    const { status } = result;
    const { message } = await result.json();

    console.log(status, message);
});