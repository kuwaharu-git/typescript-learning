// ========================================
// Lesson 4: クラス
// ========================================

console.log('=== Lesson 4: クラス ===\n');

// 1. 基本的なクラス
// ------------------------------------------
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`  こんにちは、私は${this.name}です。${this.age}歳です。`);
  }
}

const person1 = new Person('太郎', 25);
console.log('1. 基本的なクラス');
person1.greet();
console.log();

// 2. アクセス修飾子
// ------------------------------------------
class BankAccount {
  public accountNumber: string;
  private balance: number;
  protected accountType: string;

  constructor(accountNumber: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.accountType = 'savings';
  }

  public deposit(amount: number): void {
    this.balance += amount;
    console.log(`  ¥${amount}を入金しました。残高: ¥${this.balance}`);
  }

  public getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount('123-456', 10000);
console.log('2. アクセス修飾子');
console.log(`  口座番号: ${account.accountNumber}`);
account.deposit(5000);
// console.log(account.balance); // エラー！privateにアクセス不可
console.log(`  現在の残高: ¥${account.getBalance()}\n`);

// 3. 短縮構文
// ------------------------------------------
class User {
  constructor(
    public id: number,
    public name: string,
    private password: string
  ) {}

  authenticate(password: string): boolean {
    return this.password === password;
  }
}

const user = new User(1, 'Alice', 'secret123');
console.log('3. 短縮構文');
console.log(`  ユーザー: ${user.name} (ID: ${user.id})`);
console.log(`  認証('wrong'): ${user.authenticate('wrong')}`);
console.log(`  認証('secret123'): ${user.authenticate('secret123')}\n`);

// 4. getter / setter
// ------------------------------------------
class Temperature {
  private _celsius: number = 0;

  get celsius(): number {
    return this._celsius;
  }

  set celsius(value: number) {
    if (value < -273.15) {
      throw new Error('絶対零度より低い温度は設定できません');
    }
    this._celsius = value;
  }

  get fahrenheit(): number {
    return (this._celsius * 9/5) + 32;
  }

  set fahrenheit(value: number) {
    this._celsius = (value - 32) * 5/9;
  }
}

const temp = new Temperature();
temp.celsius = 25;
console.log('4. getter / setter');
console.log(`  摂氏: ${temp.celsius}°C`);
console.log(`  華氏: ${temp.fahrenheit}°F`);
temp.fahrenheit = 77;
console.log(`  華氏77°F = 摂氏${temp.celsius.toFixed(1)}°C\n`);

// 5. 継承
// ------------------------------------------
class Animal {
  constructor(public name: string) {}

  move(distance: number = 0): void {
    console.log(`  ${this.name}は${distance}m移動した`);
  }
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);
  }

  bark(): void {
    console.log(`  ${this.name}「ワン！」`);
  }

  move(distance: number = 5): void {
    console.log(`  ${this.name}は走っている...`);
    super.move(distance);
  }
}

const dog = new Dog('ポチ', '柴犬');
console.log('5. 継承');
console.log(`  犬の名前: ${dog.name}, 品種: ${dog.breed}`);
dog.bark();
dog.move(10);
console.log();

// 6. 抽象クラス
// ------------------------------------------
abstract class Shape {
  constructor(public name: string) {}

  abstract getArea(): number;
  
  describe(): void {
    console.log(`  これは${this.name}です。面積は${this.getArea()}です。`);
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super('円');
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super('長方形');
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log('6. 抽象クラス');
circle.describe();
rectangle.describe();
console.log();

// 7. 静的メンバー
// ------------------------------------------
class MathHelper {
  static PI: number = 3.14159;

  static circleArea(radius: number): number {
    return this.PI * radius ** 2;
  }

  static rectangleArea(width: number, height: number): number {
    return width * height;
  }
}

console.log('7. 静的メンバー');
console.log(`  円の面積（半径5）: ${MathHelper.circleArea(5).toFixed(2)}`);
console.log(`  長方形の面積（4x6）: ${MathHelper.rectangleArea(4, 6)}\n`);

// 8. インターフェースの実装
// ------------------------------------------
interface Printable {
  print(): void;
}

interface Saveable {
  save(): void;
}

class Document implements Printable, Saveable {
  constructor(public title: string, public content: string) {}

  print(): void {
    console.log(`  印刷中: ${this.title}`);
  }

  save(): void {
    console.log(`  保存中: ${this.title}`);
  }
}

const doc = new Document('レポート', '本文内容...');
console.log('8. インターフェースの実装');
doc.print();
doc.save();
console.log();

// ========================================
// 練習問題
// ========================================
console.log('=== 練習問題 ===\n');

// TODO: 1. 銀行口座クラス
class Account {
  private balance: number;

  constructor(private accountHolder: string, initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`  ${this.accountHolder}の口座に¥${amount}を入金しました`);
    }
  }

  withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`  ${this.accountHolder}の口座から¥${amount}を出金しました`);
      return true;
    }
    console.log(`  出金失敗: 残高不足`);
    return false;
  }

  getBalance(): number {
    return this.balance;
  }
}

console.log('問題1: 銀行口座クラス');
const myAccount = new Account('山田太郎', 50000);
myAccount.deposit(10000);
myAccount.withdraw(15000);
console.log(`  現在の残高: ¥${myAccount.getBalance()}\n`);

// TODO: 2. 図形の抽象クラス
abstract class Figure {
  abstract getArea(): number;
  abstract getPerimeter(): number;
}

class CircleFigure extends Figure {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class RectangleFigure extends Figure {
  constructor(private width: number, private height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

console.log('問題2: 図形の抽象クラス');
const c = new CircleFigure(5);
console.log(`  円（半径5）- 面積: ${c.getArea().toFixed(2)}, 周長: ${c.getPerimeter().toFixed(2)}`);
const r = new RectangleFigure(4, 6);
console.log(`  長方形（4x6）- 面積: ${r.getArea()}, 周長: ${r.getPerimeter()}\n`);

// TODO: 3. シングルトンパターン
class Singleton {
  private static instance: Singleton;
  private constructor(public value: string) {}

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton('唯一のインスタンス');
    }
    return Singleton.instance;
  }
}

console.log('問題3: シングルトンパターン');
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();
console.log(`  singleton1 === singleton2: ${singleton1 === singleton2}`);
console.log(`  value: ${singleton1.value}`);

console.log('\n✅ Lesson 4 完了！');
