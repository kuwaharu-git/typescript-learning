# Lesson 5: ジェネリクス

## 学習内容
型の再利用性を高めるジェネリクスについて学びます。

## ジェネリクスとは

型を引数として受け取り、様々な型に対応できる仕組みです。

### 1. 基本的なジェネリクス
```typescript
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>('hello');
```

### 2. ジェネリック関数
型パラメータを使った関数定義

### 3. ジェネリッククラス
```typescript
class Box<T> {
  constructor(public value: T) {}
}
```

### 4. ジェネリック制約
```typescript
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}
```

### 5. 複数の型パラメータ
```typescript
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}
```

### 6. ユーティリティ型
- `Partial<T>`: すべてのプロパティをオプションに
- `Required<T>`: すべてのプロパティを必須に
- `Readonly<T>`: すべてのプロパティを読み取り専用に
- `Pick<T, K>`: 特定のプロパティのみ抽出
- `Omit<T, K>`: 特定のプロパティを除外

## 実践

```bash
npm run lesson5
```

## 課題

1. スタック（LIFO）のジェネリッククラスを実装
2. 配列の最初と最後の要素を返すジェネリック関数
3. ユーティリティ型を使った型変換
