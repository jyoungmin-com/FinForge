document.addEventListener('DOMContentLoaded', function () {
    // Close dropdown when clicking outside

    // Calculate order total when shares change
    const numberInput = document.querySelector('input[type="number"]');
    if (numberInput) {
        numberInput.addEventListener('input', function (e) {
            const shares = parseInt(e.target.value) || 0;
            const price = 178.25;
            const total = shares * price;
            const orderValue = document.querySelector('.order-summary .summary-row:first-child span:last-child');
            const orderTotal = document.querySelector('.order-summary .summary-row:last-child span:last-child');
            if (orderValue) orderValue.textContent = `${total.toFixed(2)}`;
            if (orderTotal) orderTotal.textContent = `${total.toFixed(2)}`;
        });
    }
});


function switchTab(tab) {
    const tabs = document.querySelectorAll('.trade-tab');
    const button = document.querySelector('.trade-button');
    if (tabs.length && button) {
        tabs.forEach(t => t.classList.remove('active'));
        if (tab === 'buy') {
            tabs[0].classList.add('active');
            button.textContent = 'Buy AAPL';
            button.classList.remove('sell');
            button.classList.add('buy');
        } else {
            tabs[1].classList.add('active');
            button.textContent = 'Sell AAPL';
            button.classList.remove('buy');
            button.classList.add('sell');
        }
    }
}