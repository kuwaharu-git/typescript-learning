// ========================================
// Lesson 1: 基本的な型
// ========================================

console.log('=== Lesson 1: 基本的な型 ===\n');

// 1. プリミティブ型
// ------------------------------------------
const message: string = 'Hello, TypeScript!';
const count: number = 42;
const isActive: boolean = true;
const empty: null = null;
const notDefined: undefined = undefined;

console.log('1. プリミティブ型');
console.log(`  message: ${message} (型: ${typeof message})`);
console.log(`  count: ${count} (型: ${typeof count})`);
console.log(`  isActive: ${isActive} (型: ${typeof isActive})`);
console.log(`  empty: ${empty} (型: ${typeof empty})`);
console.log(`  notDefined: ${notDefined} (型: ${typeof notDefined})\n`);

// 2. 配列
// ------------------------------------------
const numbers: number[] = [1, 2, 3, 4, 5];
const fruits: Array<string> = ['apple', 'banana', 'orange'];

console.log('2. 配列');
console.log(`  numbers: [${numbers.join(', ')}]`);
console.log(`  fruits: [${fruits.join(', ')}]\n`);

// 3. タプル（固定長・固定型の配列）
// ------------------------------------------
const person: [string, number] = ['Alice', 30];
const coordinate: [number, number, number] = [10, 20, 30];

console.log('3. タプル');
console.log(`  person: [名前: ${person[0]}, 年齢: ${person[1]}]`);
console.log(`  coordinate: [x: ${coordinate[0]}, y: ${coordinate[1]}, z: ${coordinate[2]}]\n`);

// 4. Enum（列挙型）
// ------------------------------------------
enum Color {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE'
}

enum Status {
  Pending,
  InProgress,
  Completed
}

console.log('4. Enum');
console.log(`  Color.Red: ${Color.Red}`);
console.log(`  Status.Pending: ${Status.Pending}`);
console.log(`  Status.InProgress: ${Status.InProgress}\n`);

// 5. Union型（複数の型を許容）
// ------------------------------------------
let id: string | number;
id = 'ABC123';
console.log('5. Union型');
console.log(`  id (string): ${id}`);
id = 12345;
console.log(`  id (number): ${id}\n`);

// 6. Literal型（特定の値のみ許容）
// ------------------------------------------
type Direction = 'up' | 'down' | 'left' | 'right';
const move: Direction = 'up';

console.log('6. Literal型');
console.log(`  move: ${move}\n`);

// 7. any vs unknown
// ------------------------------------------
console.log('7. any vs unknown');

// anyは型チェックをスキップ（危険）
let anyValue: any = 'hello';
anyValue = 42;
anyValue.toFixed(); // エラーにならない
console.log('  anyValue: 型チェックなし');

// unknownは型安全
let unknownValue: unknown = 'world';
unknownValue = 100;
// unknownValue.toFixed(); // エラー！型チェックが必要

// 型チェック後は使用可能
if (typeof unknownValue === 'number') {
  console.log(`  unknownValue.toFixed(2): ${unknownValue.toFixed(2)}`);
}
console.log();

// ========================================
// 練習問題
// ========================================
console.log('=== 練習問題 ===\n');

// TODO: 1. 自分の情報を格納する変数を作成
const myName: string = 'Taro Yamada';
const myAge: number = 25;
const myHobbies: string[] = ['プログラミング', '読書', 'ゲーム'];

console.log('問題1: 自己紹介');
console.log(`  名前: ${myName}`);
console.log(`  年齢: ${myAge}`);
console.log(`  趣味: ${myHobbies.join(', ')}\n`);

// TODO: 2. 曜日を表すEnumを作成
enum DayOfWeek {
  Sunday = '日曜日',
  Monday = '月曜日',
  Tuesday = '火曜日',
  Wednesday = '水曜日',
  Thursday = '木曜日',
  Friday = '金曜日',
  Saturday = '土曜日'
}

const today: DayOfWeek = DayOfWeek.Sunday;
console.log('問題2: 今日の曜日');
console.log(`  今日は${today}です\n`);

// TODO: 3. unknownとanyの違いを確認
console.log('問題3: unknownとanyの違い');

const testAny: any = 'test';
// anyは何でもできる（危険）
const upperAny = testAny.toUpperCase();
console.log(`  anyの場合: ${upperAny}`);

const testUnknown: unknown = 'test';
// unknownは型チェックが必要（安全）
if (typeof testUnknown === 'string') {
  const upperUnknown = testUnknown.toUpperCase();
  console.log(`  unknownの場合（型チェック後）: ${upperUnknown}`);
}

console.log('\n✅ Lesson 1 完了！');
