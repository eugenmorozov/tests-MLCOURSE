import {Calculator} from '../calculator/index';
import chai from 'chai';

describe('positive tests for +',() => {
    it('1+1 should be 2' , () => {
        const result = Calculator.sum(1, 1);
        chai.expect(result).to.equal(2);
    });
    it('0+3 should be 3' , () => {
        const result = Calculator.sum(0, 3);
        chai.expect(result).to.equal(3);
    });
    it('a+b should be equal to b+a' , () => {
        const result = Calculator.sum(3, 4);
        chai.expect(result).to.equal(Calculator.sum(4,3));
    });
});
describe('positive tests for -',()=>{
    it('1-1 should be 0' , () => {
        const result = Calculator.res(1, 1);
        chai.expect(result).to.equal(0);
    });
    it('1-2 should be -1' , () => {
        const result = Calculator.res(1, 2);
        chai.expect(result).to.equal(-1);
    });
    it('-1 -(-1) should be equal to 0' , () => {
        const result = Calculator.res(-1, -1);
        chai.expect(result).to.equal(0);
    });
});

describe('positive tests for *',()=>{
    it('2*2 should be 4' , () => {
        chai.expect(
            Calculator.mul(2, 2))
            .to.equal(4);
    });
    it('1 * 0 should be 0' , () => {
        chai.expect(Calculator.mul(1, 0))
            .to.equal(0);
    });
    it('a*b should be equal to b*a' , () => {
        chai.expect(Calculator.mul(2, 4))
            .to.equal(Calculator.mul(4, 2));
    });
    it('100*0.01 should be equal to 1' , () => {
        chai.expect(Calculator.mul(100, 0.01))
            .to.equal(1);
    });
});
describe('positive tests for /', ()=>{
   it('1/1 should be equal to 1', ()=>{
        chai.expect(Calculator.div(1,1)).to.equal(1);
   });
   it('1/2 should be equal to 0.5', ()=>{
        chai.expect(Calculator.div(1,2)).to.equal(0.5);
   });
   it('10/1 should be equal to 10', ()=>{
        chai.expect(Calculator.div(10,1)).to.equal(10);
   });
   it('4/2 should be equal to 2', ()=>{
        chai.expect(Calculator.div(4,2)).to.equal(2);
   });
   it('1/0 should be equal to infinity', () => {
      chai.expect(Calculator.div(1,0)).to.equal(Infinity);
   });
   it('4.5/1.5 should be equal to 3', () => {
      chai.expect(Calculator.div(4.5,1.5)).to.equal(3);
   });
   it('0/0 should be equal to NAN', () => {
      chai.expect(Calculator.div(0,0)).to.be.NaN;
   });
});

describe('negative tests for operations where arguments is not numbers', ()=>{
    it('\'string\'+1 should be equal to NAN', () => {
        chai.expect(Calculator.sum('string',0)).to.be.NaN;
    });
    it('1+\'string\' should be equal to NAN', () => {
        chai.expect(Calculator.sum(1,'string')).to.be.NaN;
    });

    it('\'string\'-1 should be equal to NAN', () => {
        chai.expect(Calculator.res('string',0)).to.be.NaN;
    });
    it('1-\'string\' should be equal to NAN', () => {
        chai.expect(Calculator.res(1,'string')).to.be.NaN;
    });

    it('\'string\'*1 should be equal to NAN', () => {
        chai.expect(Calculator.mul('string',0)).to.be.NaN;
    });
    it('1*\'string\' should be equal to NAN', () => {
        chai.expect(Calculator.mul(1,'string')).to.be.NaN;
    });

    it('\'string\'/1 should be equal to NAN', () => {
        chai.expect(Calculator.div('string',0)).to.be.NaN;
    });
    it('1/\'string\' should be equal to NAN', () => {
        chai.expect(Calculator.div(1,'string')).to.be.NaN;
    });
});