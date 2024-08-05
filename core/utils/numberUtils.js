import numeral from '../../libs/numeral.min.js';

function formatCurrency(value) {
    return numeral(value).format('$0,0.00');
}

function formatPercentage(value) {
    return numeral(value).format('0.00%');
}

function formatNumber(value, format) {
    return numeral(value).format(format);
}

export { formatCurrency, formatPercentage, formatNumber };
