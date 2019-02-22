const utils = require('./utils');

it('Should add 2 numbers', () => {
    let res = utils.add(22, 11);
    if(res !== 33) {
        throw new Error(`Answer should be 33 but got ${res}`);
    }
});

it('Should sqaure a number', () => {
    let res = utils.square(5);
    if(res !== 25) {
        throw new Error(`Result should be 25 but got ${res}`)
    }
});