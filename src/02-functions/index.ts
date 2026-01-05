// ========================================
// Lesson 2: 関数
// ========================================

console.log('=== Lesson 2: 関数 ===\n');

// 1. 基本的な関数
// ------------------------------------------
function add(a: number, b: number): number {
  return a + b;
}

console.log('1. 基本的な関数');
console.log(`  add(5, 3) = ${add(5, 3)}\n`);

// 2. アロー関数
// ------------------------------------------
const multiply = (a: number, b: number): number => {
  return a * b;
};

const divide = (a: number, b: number): number => a / b;

console.log('2. アロー関数');
console.log(`  multiply(4, 3) = ${multiply(4, 3)}`);
console.log(`  divide(10, 2) = ${divide(10, 2)}\n`);

// 3. オプショナル引数
// ------------------------------------------
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
}

console.log('3. オプショナル引数');
console.log(`  greet('Alice'): ${greet('Alice')}`);
console.log(`  greet('Bob', 'Good morning'): ${greet('Bob', 'Good morning')}\n`);

// 4. デフォルト引数
// ------------------------------------------
function createMessage(name: string, prefix: string = 'Mr.'): string {
  return `${prefix} ${name}`;
}

console.log('4. デフォルト引数');
console.log(`  createMessage('Smith'): ${createMessage('Smith')}`);
console.log(`  createMessage('Tanaka', 'Dr.'): ${createMessage('Tanaka', 'Dr.')}\n`);

// 5. 残余引数（Rest Parameters）
// ------------------------------------------
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log('5. 残余引数');
console.log(`  sum(1, 2, 3) = ${sum(1, 2, 3)}`);
console.log(`  sum(1, 2, 3, 4, 5) = ${sum(1, 2, 3, 4, 5)}\n`);

// 6. 戻り値の型推論
// ------------------------------------------
function getUser() {
  return {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com'
  };
}

const user = getUser();
console.log('6. 戻り値の型推論');
console.log(`  user: ${JSON.stringify(user)}\n`);

// 7. void型（戻り値なし）
// ------------------------------------------
function logMessage(message: string): void {
  console.log(`7. void型: ${message}\n`);
}

logMessage('戻り値のない関数');

// 8. 関数型の定義
// ------------------------------------------
type MathOperation = (a: number, b: number) => number;

const subtract: MathOperation = (a, b) => a - b;
const modulo: MathOperation = (a, b) => a % b;

console.log('8. 関数型の定義');
console.log(`  subtract(10, 3) = ${subtract(10, 3)}`);
console.log(`  modulo(10, 3) = ${modulo(10, 3)}\n`);

// 9. コールバック関数
// ------------------------------------------
function processArray(arr: number[], callback: (num: number) => number): number[] {
  return arr.map(callback);
}

const doubled = processArray([1, 2, 3, 4], (n) => n * 2);
const squared = processArray([1, 2, 3, 4], (n) => n ** 2);

console.log('9. コールバック関数');
console.log(`  doubled: [${doubled.join(', ')}]`);
console.log(`  squared: [${squared.join(', ')}]\n`);

// 10. 関数オーバーロード
// ------------------------------------------
function format(value: string): string;
function format(value: number): string;
function format(value: boolean): string;
function format(value: string | number | boolean): string {
  if (typeof value === 'string') {
    return `"${value}"`;
  } else if (typeof value === 'number') {
    return value.toFixed(2);
  } else {
    return value ? 'YES' : 'NO';
  }
}

console.log('10. 関数オーバーロード');
console.log(`  format('hello'): ${format('hello')}`);
console.log(`  format(3.14159): ${format(3.14159)}`);
console.log(`  format(true): ${format(true)}\n`);

// ========================================
// 練習問題
// ========================================
console.log('=== 練習問題 ===\n');

// TODO: 1. 四則演算の結果を返す関数
type CalculationResult = {
  add: number;
  subtract: number;
  multiply: number;
  divide: number;
};

function calculate(a: number, b: number): CalculationResult {
  return {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b
  };
}

console.log('問題1: 四則演算');
const result = calculate(10, 5);
console.log(`  calculate(10, 5):`);
console.log(`    加算: ${result.add}`);
console.log(`    減算: ${result.subtract}`);
console.log(`    乗算: ${result.multiply}`);
console.log(`    除算: ${result.divide}\n`);

// TODO: 2. 平均値を計算する関数
function average(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  return sum(...numbers) / numbers.length;
}

console.log('問題2: 平均値計算');
console.log(`  average([1, 2, 3, 4, 5]) = ${average([1, 2, 3, 4, 5])}`);
console.log(`  average([10, 20, 30]) = ${average([10, 20, 30])}\n`);

// TODO: 3. 文字列を繰り返す関数
function repeatString(str: string, times: number = 1): string {
  return str.repeat(times);
}

console.log('問題3: 文字列の繰り返し');
console.log(`  repeatString('Hello'): ${repeatString('Hello')}`);
console.log(`  repeatString('TypeScript', 3): ${repeatString('TypeScript', 3)}`);

console.log('\n✅ Lesson 2 完了！');
