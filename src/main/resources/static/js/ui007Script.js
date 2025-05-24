// Filter notifications by category
function filterNotifications(category) {
    // Update active tab
    const tabs = document.querySelectorAll('.filter-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');

    // Show/hide notifications
    const notifications = document.querySelectorAll('.notification-card');
    notifications.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        card.style.display = (category === 'all' || category === cardCategory) ? 'block' : 'none';
    });
}

// Mark a single notification as read
function markAsRead(button) {
    const card = button.closest('.notification-card');
    card.classList.remove('unread');
    button.parentElement.remove();
    updateUnreadCount();
}

// Mark all notifications as read
function markAllAsRead() {
    const unreadCards = document.querySelectorAll('.notification-card.unread');
    unreadCards.forEach(card => {
        card.classList.remove('unread');
        const btn = card.querySelector('.action-btn svg');
        if (btn) btn.parentElement.remove();
    });
    updateUnreadCount();
}

// Update unread count in stats and header badge
function updateUnreadCount() {
    const unreadCount = document.querySelectorAll('.notification-card.unread').length;
    const statValue = document.querySelector('.summary-stats .stat-item .stat-value');
    if (statValue) statValue.textContent = unreadCount;

    const headerBadge = document.querySelector('.header-icons .notification-badge');
    if (headerBadge) {
        headerBadge.textContent = unreadCount || '';
        headerBadge.style.display = unreadCount > 0 ? 'flex' : 'none';
    }
}

// Placeholder actions
function viewDetails() {
    alert('View detailed AI insights');
}

function retryTransfer() {
    alert('Retry transfer with current balance');
}

function loadMoreNotifications() {
    alert('Load more notifications');
}

function clearOldNotifications() {
    if (confirm('Clear all notifications older than 30 days?')) {
        alert('Old notifications cleared');
    }
}

function exportNotifications() {
    alert('Export notifications as CSV');
}
