import { formatCurrency, formatPercentage, formatNumber } from '../../../core/utils/numberUtils';

describe('numberUtils', function() {
    it('should format currency correctly', function() {
        const formattedCurrency = formatCurrency(1234.56);
        expect(formattedCurrency).toBe('$1,234.56');
    });

    it('should format percentage correctly', function() {
        const formattedPercentage = formatPercentage(0.1234);
        expect(formattedPercentage).toBe('12.34%');
    });

    it('should format number correctly', function() {
        const formattedNumber = formatNumber(1234.56, '0,0.00');
        expect(formattedNumber).toBe('1,234.56');
    });
});
