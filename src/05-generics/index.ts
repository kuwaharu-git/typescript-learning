// ========================================
// Lesson 5: ジェネリクス
// ========================================

console.log('=== Lesson 5: ジェネリクス ===\n');

// 1. ジェネリクスなしの問題
// ------------------------------------------
function identityNumber(arg: number): number {
  return arg;
}

function identityString(arg: string): string {
  return arg;
}

console.log('1. ジェネリクスなしの問題');
console.log(`  identityNumber(42) = ${identityNumber(42)}`);
console.log(`  identityString('hello') = ${identityString('hello')}`);
console.log('  → 型ごとに関数を作る必要がある\n');

// 2. 基本的なジェネリクス
// ------------------------------------------
function identity<T>(arg: T): T {
  return arg;
}

console.log('2. 基本的なジェネリクス');
console.log(`  identity<number>(42) = ${identity<number>(42)}`);
console.log(`  identity<string>('hello') = ${identity<string>('hello')}`);
console.log(`  identity(true) = ${identity(true)} (型推論)`);
console.log('  → 1つの関数で複数の型に対応\n');

// 3. ジェネリック配列
// ------------------------------------------
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

function getLast<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

console.log('3. ジェネリック配列');
console.log(`  getFirst([1, 2, 3]) = ${getFirst([1, 2, 3])}`);
console.log(`  getLast(['a', 'b', 'c']) = ${getLast(['a', 'b', 'c'])}\n`);

// 4. ジェネリッククラス
// ------------------------------------------
class Box<T> {
  constructor(private value: T) {}

  getValue(): T {
    return this.value;
  }

  setValue(value: T): void {
    this.value = value;
  }
}

const numberBox = new Box<number>(123);
const stringBox = new Box<string>('TypeScript');

console.log('4. ジェネリッククラス');
console.log(`  numberBox.getValue() = ${numberBox.getValue()}`);
console.log(`  stringBox.getValue() = ${stringBox.getValue()}\n`);

// 5. ジェネリック制約
// ------------------------------------------
interface Lengthy {
  length: number;
}

function logLength<T extends Lengthy>(arg: T): number {
  console.log(`  長さ: ${arg.length}`);
  return arg.length;
}

console.log('5. ジェネリック制約');
logLength('hello');
logLength([1, 2, 3, 4, 5]);
logLength({ length: 10, value: 'test' });
// logLength(123); // エラー！lengthプロパティがない
console.log();

// 6. 複数の型パラメータ
// ------------------------------------------
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

console.log('6. 複数の型パラメータ');
const p1 = pair('name', 123);
console.log(`  pair('name', 123) = [${p1.join(', ')}]`);
const p2 = swap(p1);
console.log(`  swap(['name', 123]) = [${p2.join(', ')}]\n`);

// 7. ジェネリックインターフェース
// ------------------------------------------
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const kv1: KeyValuePair<string, number> = { key: 'age', value: 25 };
const kv2: KeyValuePair<number, string> = { key: 1, value: 'first' };

console.log('7. ジェネリックインターフェース');
console.log(`  kv1: { key: '${kv1.key}', value: ${kv1.value} }`);
console.log(`  kv2: { key: ${kv2.key}, value: '${kv2.value}' }\n`);

// 8. ユーティリティ型
// ------------------------------------------
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial: すべてのプロパティをオプションに
type PartialUser = Partial<User>;
const partialUser: PartialUser = { name: 'Alice' };

// Required: すべてのプロパティを必須に
interface OptionalUser {
  id?: number;
  name?: string;
}
type RequiredUser = Required<OptionalUser>;

// Readonly: すべてのプロパティを読み取り専用に
type ReadonlyUser = Readonly<User>;
const readonlyUser: ReadonlyUser = { id: 1, name: 'Bob', email: 'bob@example.com', age: 30 };
// readonlyUser.name = 'Charlie'; // エラー！

// Pick: 特定のプロパティのみ抽出
type UserPreview = Pick<User, 'id' | 'name'>;
const preview: UserPreview = { id: 1, name: 'Carol' };

// Omit: 特定のプロパティを除外
type UserWithoutEmail = Omit<User, 'email'>;
const userWithoutEmail: UserWithoutEmail = { id: 1, name: 'Dave', age: 25 };

console.log('8. ユーティリティ型');
console.log(`  Partial<User>: ${JSON.stringify(partialUser)}`);
console.log(`  Pick<User, 'id' | 'name'>: ${JSON.stringify(preview)}`);
console.log(`  Omit<User, 'email'>: ${JSON.stringify(userWithoutEmail)}\n`);

// 9. Record型
// ------------------------------------------
type Role = 'admin' | 'user' | 'guest';
type Permissions = Record<Role, string[]>;

const permissions: Permissions = {
  admin: ['read', 'write', 'delete'],
  user: ['read', 'write'],
  guest: ['read']
};

console.log('9. Record型');
console.log(`  admin: [${permissions.admin.join(', ')}]`);
console.log(`  user: [${permissions.user.join(', ')}]`);
console.log(`  guest: [${permissions.guest.join(', ')}]\n`);

// ========================================
// 練習問題
// ========================================
console.log('=== 練習問題 ===\n');

// TODO: 1. スタック（LIFO）のジェネリッククラス
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

console.log('問題1: スタッククラス');
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log(`  peek(): ${numberStack.peek()}`);
console.log(`  pop(): ${numberStack.pop()}`);
console.log(`  size(): ${numberStack.size()}\n`);

// TODO: 2. 配列の最初と最後の要素を返す関数
function getFirstAndLast<T>(arr: T[]): [T | undefined, T | undefined] {
  return [arr[0], arr[arr.length - 1]];
}

console.log('問題2: 配列の最初と最後の要素');
const [first1, last1] = getFirstAndLast([1, 2, 3, 4, 5]);
console.log(`  [1, 2, 3, 4, 5] → first: ${first1}, last: ${last1}`);
const [first2, last2] = getFirstAndLast(['a', 'b', 'c']);
console.log(`  ['a', 'b', 'c'] → first: ${first2}, last: ${last2}\n`);

// TODO: 3. ユーティリティ型を使った型変換
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  inStock: boolean;
}

type ProductUpdate = Partial<Product>;
type ProductPreview = Pick<Product, 'id' | 'name' | 'price'>;
type ProductWithoutDescription = Omit<Product, 'description'>;

const update: ProductUpdate = { price: 1500 };
const productPreview: ProductPreview = { id: 1, name: 'Laptop', price: 2000 };
const productSimple: ProductWithoutDescription = {
  id: 1,
  name: 'Mouse',
  price: 30,
  inStock: true
};

console.log('問題3: ユーティリティ型');
console.log(`  ProductUpdate: ${JSON.stringify(update)}`);
console.log(`  ProductPreview: ${JSON.stringify(productPreview)}`);
console.log(`  ProductWithoutDescription: ${JSON.stringify(productSimple)}`);

console.log('\n✅ Lesson 5 完了！');
console.log('\n🎉 全てのレッスンが完了しました！TypeScriptの基礎を習得しました！');
