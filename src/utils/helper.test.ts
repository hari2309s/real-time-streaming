import { isISINUnique, isISINValid } from './helper';

describe('isISINValid() ', () => {
    it('should validate the ISIN - DE000BASF111 and return true ', () => {
        expect(isISINValid('DE000BASF111')).toEqual(true);
    });

    it('should validate the ISIN - DE1234 and return false ', () => {
        expect(isISINValid('DE1234')).toEqual(false);
    });

    it('should validate the ISIN - XY000BASF111 and return false ', () => {
        expect(isISINValid('XY000BASF111')).toEqual(false);
    });
});

describe('isISINUnique() ', () => {
    it('should validate the ISIN - DE000BASF111 against the existing stocks array and return true ', () => {
        expect(
            isISINUnique('DE000BASF111', [
                {
                    isin: 'DE000BASF115',
                    price: 123.45,
                    bid: 123.67,
                    ask: 123.9,
                },
            ]),
        ).toEqual(true);
    });

    it('should validate the ISIN - DE000BASF111 against the existing stocks and return false ', () => {
        expect(
            isISINUnique('DE000BASF111', [
                {
                    isin: 'DE000BASF111',
                    price: 123.45,
                    bid: 123.67,
                    ask: 123.9,
                },
            ]),
        ).toEqual(false);
    });
});
