# Lesson 3: インターフェース

## 学習内容
オブジェクトの型を定義するインターフェースについて学びます。

## インターフェースとは

オブジェクトの構造（形状）を定義する仕組みです。

### 1. 基本的なインターフェース
```typescript
interface User {
  name: string;
  age: number;
}
```

### 2. オプショナルプロパティ
```typescript
interface User {
  name: string;
  age?: number;  // オプション
}
```

### 3. 読み取り専用プロパティ
```typescript
interface User {
  readonly id: number;
  name: string;
}
```

### 4. メソッドの定義
```typescript
interface Calculator {
  add(a: number, b: number): number;
}
```

### 5. インターフェースの拡張
```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  bark(): void;
}
```

### 6. Type vs Interface
- **Interface**: オブジェクトの形状定義に特化、拡張可能
- **Type**: より柔軟、Union型やプリミティブも定義可能

## 実践

```bash
npm run lesson3
```

## 課題

1. 商品を表すインターフェースを作成（名前、価格、在庫数）
2. ユーザーと管理者のインターフェースを継承で実装
3. インターフェースを使った関数を作成
