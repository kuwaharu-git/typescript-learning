# Lesson 2: 関数

## 学習内容
TypeScriptでの関数の定義方法と型付けについて学びます。

## 関数の型付け

### 1. 基本的な関数
```typescript
function 関数名(引数: 型): 戻り値の型 {
  // 処理
}
```

### 2. アロー関数
```typescript
const 関数名 = (引数: 型): 戻り値の型 => {
  // 処理
};
```

### 3. オプショナル引数
```typescript
function greet(name: string, greeting?: string) {
  // greeting は string | undefined
}
```

### 4. デフォルト引数
```typescript
function greet(name: string, greeting: string = 'Hello') {
  // greeting のデフォルト値は 'Hello'
}
```

### 5. 残余引数（Rest Parameters）
```typescript
function sum(...numbers: number[]): number {
  // 可変長引数
}
```

### 6. 関数オーバーロード
同じ関数名で異なる型シグネチャを定義

## 実践

`index.ts`を開いて実行してください。

```bash
npm run lesson2
```

## 課題

1. 2つの数値を受け取り、四則演算の結果をオブジェクトで返す関数を作成
2. 配列の平均値を計算する関数を作成
3. 文字列を受け取り、指定回数繰り返す関数を作成（デフォルト1回）
