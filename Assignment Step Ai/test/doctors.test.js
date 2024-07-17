
const sinon = require('sinon');

let expect;

before(async () => {
  const chai = await import('chai');
  expect = chai.expect;
});



// describe('exampleFunction', () => {
//   it('should return the correct value', () => {
//     const result = registerDoctor();
//     expect(result).to.equal('hello world');
//   });

//   it('should call the dependency once', () => {
//     const dependency = sinon.spy();
//     exampleFunction(dependency);
//     expect(dependency.calledOnce).to.be.true;
//   });
// });