# Lesson 4: クラス

## 学習内容
オブジェクト指向プログラミングの基本、クラスについて学びます。

## クラスの基本

### 1. クラスの定義
```typescript
class Person {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  greet(): void {
    console.log(`Hello, I'm ${this.name}`);
  }
}
```

### 2. アクセス修飾子
- `public`: どこからでもアクセス可能（デフォルト）
- `private`: クラス内部のみ
- `protected`: クラスと継承先のみ

### 3. getter / setter
プロパティの取得・設定時の処理を定義

### 4. 継承
```typescript
class Dog extends Animal {
  // 親クラスの機能を引き継ぐ
}
```

### 5. 抽象クラス
インスタンス化できない基底クラス

### 6. 静的メンバー
インスタンスではなくクラス自体に属するメンバー

## 実践

```bash
npm run lesson4
```

## 課題

1. 銀行口座クラスを作成（残高、入金、出金）
2. 図形の抽象クラスと具体的な実装（円、四角形）
3. シングルトンパターンの実装
