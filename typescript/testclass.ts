import { Singleton } from './singleton';

export default class TestClass {
  private name: string;

  private time: Date;

  constructor(name: string) {
    this.name = name;
    this.time = new Date();
  }

  public print() {
    process.stdout.write(`${this.name} - ${this.time.toLocaleString()}\n`);
  }

  public static getInstance(): TestClass {
    return Singleton<TestClass>('test-class-singleton', TestClass, 'Thanos');
  }
}
