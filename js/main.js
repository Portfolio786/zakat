// Main JavaScript for Islamic Tools Hub

// Utility Functions
const utils = {
    /**
     * Format number with commas
     */
    formatNumber: (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    /**
     * Format currency
     */
    formatCurrency: (num, currency = 'PKR') => {
        return `${currency} ${utils.formatNumber(num.toFixed(2))}`;
    },

    /**
     * Validate input is a number
     */
    isValidNumber: (value) => {
        return !isNaN(value) && value !== '' && value >= 0;
    },

    /**
     * Get query parameter from URL
     */
    getQueryParam: (param) => {
        const params = new URLSearchParams(window.location.search);
        return params.get(param);
    },

    /**
     * Show error message
     */
    showError: (message, elementId = 'error-message') => {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = message;
            element.classList.add('show');
            setTimeout(() => element.classList.remove('show'), 5000);
        }
    },

    /**
     * Show success message
     */
    showSuccess: (message, elementId = 'success-message') => {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = message;
            element.classList.add('show');
            setTimeout(() => element.classList.remove('show'), 5000);
        }
    },

    /**
     * Set active navigation link
     */
    setActiveNav: () => {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    utils.setActiveNav();
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = utils;
}