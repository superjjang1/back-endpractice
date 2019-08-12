//howFn should be a function that returns a string

function sayHello(howFn, toWhom) {
    const salutation = howFn(toWhom);
    console.log(`${salutation}! I am sooooooooo happy to meet you`);
};

module.exports = sayHello; //assign the sayHello function
