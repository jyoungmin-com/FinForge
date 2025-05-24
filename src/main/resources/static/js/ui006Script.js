// Show wallet details
function openWalletDetails(walletId) {
    const detailCard = document.getElementById('walletDetailCard');
    detailCard.style.display = 'block';

    // Scroll to detail card on mobile
    if (window.innerWidth <= 768) {
        detailCard.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
}

// Placeholder modal functions
function openCreateModal() {
    alert('Create Wallet modal would open here');
}

function openExpenseModal() {
    alert('Add Expense modal would open here');
}

function openInviteModal() {
    alert('Invite Member modal would open here');
}

function exportReport() {
    alert('Export functionality would trigger here');
}

function viewAllTransactions() {
    alert('Navigate to all transactions view');
}
