function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('start').addEventListener('click', () => {
    document.getElementById('message').textContent = "Очікування...";
    wait(3000).then(() => {
        document.getElementById('message').textContent = "Час вийшов!";
    });
});
