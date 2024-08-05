import numeral from '../../libs/numeral.min.js';

/**
 * Formatea un valor como moneda.
 * @param {number} value - El valor a formatear.
 * @returns {string} - El valor formateado como moneda.
 */
function formatCurrency(value) {
    return numeral(value).format('$0,0.00');
}

/**
 * Formatea un valor como porcentaje.
 * @param {number} value - El valor a formatear.
 * @returns {string} - El valor formateado como porcentaje.
 */
function formatPercentage(value) {
    return numeral(value).format('0.00%');
}

/**
 * Formatea un valor con un formato específico.
 * @param {number} value - El valor a formatear.
 * @param {string} format - El formato a usar.
 * @returns {string} - El valor formateado.
 */
function formatNumber(value, format) {
    return numeral(value).format(format);
}

export { formatCurrency, formatPercentage, formatNumber };
