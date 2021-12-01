import TestClass from './testclass';

const classInstance = TestClass.getInstance();

// Print class's data
classInstance.print();

// Just to make sure it's singleton
setTimeout(() => {
  TestClass.getInstance().print();
}, 10000);