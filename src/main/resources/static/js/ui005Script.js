document.addEventListener('DOMContentLoaded', function () {
    // Close dropdown when clicking outside

    // Handle recipient search
    const recipientSearch = document.getElementById('recipientSearch');
    const recipientSuggestions = document.getElementById('recipientSuggestions');
    if (recipientSearch && recipientSuggestions) {
        recipientSearch.addEventListener('focus', function () {
            if (this.value.length > 0) {
                recipientSuggestions.classList.add('active');
            }
        });
        recipientSearch.addEventListener('input', function () {
            if (this.value.length > 0) {
                recipientSuggestions.classList.add('active');
            } else {
                recipientSuggestions.classList.remove('active');
            }
        });
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.recipient-search')) {
                recipientSuggestions.classList.remove('active');
            }
        });
    }

    // Handle suggestion clicks
    document.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', function () {
            const name = this.querySelector('.suggestion-name').textContent;
            const email = this.querySelector('.suggestion-email').textContent;
            if (recipientSearch && recipientSuggestions) {
                recipientSearch.value = `${name} (${email})`;
                recipientSuggestions.classList.remove('active');
            }
        });
    });

    // Quick amount buttons
    document.querySelectorAll('.quick-amount-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.quick-amount-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const amount = this.getAttribute('data-amount');
            const amountInput = document.querySelector('.amount-input');
            if (amountInput) {
                amountInput.value = amount;
                updateSummary(amount);
            }
        });
    });

    // Amount input handler
    const amountInput = document.querySelector('.amount-input');
    if (amountInput) {
        amountInput.addEventListener('input', function () {
            const amount = this.value;
            updateSummary(amount);
            // Clear quick amount selection if manual input
            document.querySelectorAll('.quick-amount-btn').forEach(btn => {
                if (btn.getAttribute('data-amount') !== amount) {
                    btn.classList.remove('active');
                }
            });
        });
    }

    // Form submission
    const transferForm = document.querySelector('.transfer-form');
    if (transferForm) {
        transferForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Simulate transfer process
            const button = document.querySelector('.transfer-button');
            if (button) {
                button.textContent = 'Processing...';
                button.disabled = true;
                setTimeout(() => {
                    // Simulate success/failure
                    button.textContent = 'Send Money';
                    button.disabled = false;
                    // Show success message (in real app, this would depend on backend response)
                    alert('Transfer initiated successfully!');
                    // Reset form
                    transferForm.reset();
                    updateSummary(0);
                    document.querySelectorAll('.quick-amount-btn').forEach(btn => btn.classList.remove('active'));
                }, 2000);
            }
        });
    }

    // Expose selectContact globally
    window.selectContact = function (name, email) {
        const recipientSearch = document.getElementById('recipientSearch');
        if (recipientSearch) {
            recipientSearch.value = `${name} (${email})`;
            recipientSearch.focus();
        }
    };
});

// Update summary
function updateSummary(amount) {
    const amountNum = parseFloat(amount) || 0;
    const summaryAmount = document.getElementById('summaryAmount');
    const summaryTotal = document.getElementById('summaryTotal');
    if (summaryAmount) summaryAmount.textContent = `${amountNum.toFixed(2)}`;
    if (summaryTotal) summaryTotal.textContent = `${amountNum.toFixed(2)}`;
}