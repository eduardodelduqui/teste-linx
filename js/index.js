const title = document.querySelector('h1');
document.querySelectorAll('.date').forEach(formatDate)

title.innerHTML = removeAccents(title.textContent);


/**
 * Format date as DD/MM
 * 
 * @param {String} date Date string
 * @return {String}     Date string as DD/MM
 */
function formatDate(date) {
    date.innerHTML = date.textContent.slice(0,5)
}

/**
 * Remove vowel accents
 * 
 * @param {String} text
 * @return {String}     String without accents
 */
function removeAccents(text) {
    text = text.replace(new RegExp("[àáâãä]", 'g'),"a");
    text = text.replace(new RegExp("[èéëê]", 'g'),"e");
    text = text.replace(new RegExp("[ìíï]", 'g'),"i");
    text = text.replace(new RegExp("[óòôõö]", 'g'),"o");
    text = text.replace(new RegExp("[ùúûü]", 'g'),"u");
    return text
}
