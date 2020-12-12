document.querySelectorAll('.date').forEach(formatDate)

function formatDate(date) {
    date.innerHTML = date.textContent.slice(0,5)
}