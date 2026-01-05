# Lesson 1: 基本的な型

## 学習内容
TypeScriptの基本的な型について学びます。

## 基本型の種類

### 1. プリミティブ型
- `string`: 文字列
- `number`: 数値
- `boolean`: 真偽値
- `null`: null値
- `undefined`: 未定義

### 2. 配列
- `type[]`: 配列の定義
- `Array<type>`: ジェネリック構文

### 3. タプル
固定長・固定型の配列

### 4. Enum（列挙型）
関連する定数をグループ化

### 5. any / unknown / never
- `any`: 何でも許容（型チェックを無効化）
- `unknown`: 型安全なany
- `never`: 決して発生しない値

## 実践

`index.ts`を開いて、コメントの指示に従ってコードを完成させてください。

完成したら以下のコマンドで実行：
```bash
npm run lesson1
```

## 課題

1. 自分の情報を格納する変数を作成してください
   - 名前（string）
   - 年齢（number）
   - 趣味の配列（string[]）

2. 曜日を表すEnumを作成し、今日の曜日を出力してください

3. unknownとanyの違いを実際にコードで確認してください
