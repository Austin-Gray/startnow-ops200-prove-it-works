const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    beforeEach(() => {
        mortgage = new Mortgage(500000, 5, 30, 12);
    });
    
    it('should exist', () => {
        expect(mortgage).to.exist;
    })

    it('should have a monthlyPayment function', () => {
        expect(mortgage.monthlyPayment).to.exist;
    });

    it('should convert the calculated number to string', () => {
        expect(typeof mortgage.monthlyPayment()).to.equal('string');
    });

    it('should calculate the correct monthly payment', () => {
        expect(mortgage.monthlyPayment()).to.equal('2684.11');
    });
});