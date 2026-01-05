// ========================================
// Lesson 3: インターフェース
// ========================================

console.log('=== Lesson 3: インターフェース ===\n');

// 1. 基本的なインターフェース
// ------------------------------------------
interface User {
  id: number;
  name: string;
  email: string;
}

const user1: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
};

console.log('1. 基本的なインターフェース');
console.log(`  user1: ${JSON.stringify(user1)}\n`);

// 2. オプショナルプロパティ
// ------------------------------------------
interface Product {
  id: number;
  name: string;
  description?: string;  // オプション
  price: number;
}

const product1: Product = {
  id: 1,
  name: 'Laptop',
  price: 1000
};

const product2: Product = {
  id: 2,
  name: 'Mouse',
  description: 'Wireless mouse',
  price: 30
};

console.log('2. オプショナルプロパティ');
console.log(`  product1: ${JSON.stringify(product1)}`);
console.log(`  product2: ${JSON.stringify(product2)}\n`);

// 3. 読み取り専用プロパティ
// ------------------------------------------
interface Config {
  readonly apiKey: string;
  readonly endpoint: string;
  timeout: number;
}

const config: Config = {
  apiKey: 'ABC123',
  endpoint: 'https://api.example.com',
  timeout: 5000
};

// config.apiKey = 'XYZ'; // エラー！読み取り専用
config.timeout = 10000; // OK

console.log('3. 読み取り専用プロパティ');
console.log(`  config: ${JSON.stringify(config)}\n`);

// 4. メソッドの定義
// ------------------------------------------
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

const calculator: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

console.log('4. メソッドの定義');
console.log(`  calculator.add(5, 3) = ${calculator.add(5, 3)}`);
console.log(`  calculator.subtract(5, 3) = ${calculator.subtract(5, 3)}\n`);

// 5. インターフェースの拡張
// ------------------------------------------
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
  bark(): string;
}

const myDog: Dog = {
  name: 'Pochi',
  age: 3,
  breed: 'Shiba Inu',
  bark: () => 'Woof!'
};

console.log('5. インターフェースの拡張');
console.log(`  myDog.name: ${myDog.name}`);
console.log(`  myDog.breed: ${myDog.breed}`);
console.log(`  myDog.bark(): ${myDog.bark()}\n`);

// 6. 複数のインターフェースを実装
// ------------------------------------------
interface Printable {
  print(): void;
}

interface Loggable {
  log(): void;
}

interface Document extends Printable, Loggable {
  title: string;
  content: string;
}

const doc: Document = {
  title: 'TypeScript Guide',
  content: 'Learn TypeScript basics...',
  print: function() {
    console.log(`  Printing: ${this.title}`);
  },
  log: function() {
    console.log(`  Logging: ${this.title} - ${this.content.substring(0, 20)}...`);
  }
};

console.log('6. 複数のインターフェースを実装');
doc.print();
doc.log();
console.log();

// 7. インデックスシグネチャ
// ------------------------------------------
interface StringDictionary {
  [key: string]: string;
}

const translations: StringDictionary = {
  hello: 'こんにちは',
  goodbye: 'さようなら',
  thanks: 'ありがとう'
};

console.log('7. インデックスシグネチャ');
console.log(`  translations['hello']: ${translations['hello']}`);
console.log(`  translations['thanks']: ${translations['thanks']}\n`);

// 8. 関数型インターフェース
// ------------------------------------------
interface SearchFunc {
  (source: string, search: string): boolean;
}

const mySearch: SearchFunc = (src, search) => {
  return src.includes(search);
};

console.log('8. 関数型インターフェース');
console.log(`  mySearch('TypeScript', 'Script'): ${mySearch('TypeScript', 'Script')}`);
console.log(`  mySearch('TypeScript', 'Java'): ${mySearch('TypeScript', 'Java')}\n`);

// 9. Type vs Interface
// ------------------------------------------
// Type: Union型が使える
type Status = 'pending' | 'approved' | 'rejected';

// Interface: 宣言のマージが可能
interface Window {
  title: string;
}

interface Window {
  width: number;
}

const myWindow: Window = {
  title: 'My App',
  width: 800
};

console.log('9. Type vs Interface');
console.log(`  myWindow: ${JSON.stringify(myWindow)}\n`);

// ========================================
// 練習問題
// ========================================
console.log('=== 練習問題 ===\n');

// TODO: 1. 商品インターフェース
interface Item {
  name: string;
  price: number;
  stock: number;
}

const laptop: Item = {
  name: 'MacBook Pro',
  price: 2000,
  stock: 5
};

console.log('問題1: 商品インターフェース');
console.log(`  商品: ${laptop.name}`);
console.log(`  価格: ¥${laptop.price}`);
console.log(`  在庫: ${laptop.stock}個\n`);

// TODO: 2. 継承を使った実装
interface Person {
  id: number;
  name: string;
  email: string;
}

interface Admin extends Person {
  role: 'admin';
  permissions: string[];
}

const admin: Admin = {
  id: 1,
  name: 'Admin User',
  email: 'admin@example.com',
  role: 'admin',
  permissions: ['read', 'write', 'delete']
};

console.log('問題2: 継承を使った実装');
console.log(`  管理者: ${admin.name}`);
console.log(`  権限: [${admin.permissions.join(', ')}]\n`);

// TODO: 3. インターフェースを使った関数
interface Point {
  x: number;
  y: number;
}

function calculateDistance(p1: Point, p2: Point): number {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

const pointA: Point = { x: 0, y: 0 };
const pointB: Point = { x: 3, y: 4 };

console.log('問題3: インターフェースを使った関数');
console.log(`  pointA: (${pointA.x}, ${pointA.y})`);
console.log(`  pointB: (${pointB.x}, ${pointB.y})`);
console.log(`  距離: ${calculateDistance(pointA, pointB)}`);

console.log('\n✅ Lesson 3 完了！');
