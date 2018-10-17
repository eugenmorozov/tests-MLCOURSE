import {Calculator} from '../calculator/index';
import chai from 'chai';

describe('positive tests',() => {
    it('1+1 should be 2' , () => {
        const result = Calculator.sum(1, 1);
        chai.expect(result).to.equal(2);
    });
});