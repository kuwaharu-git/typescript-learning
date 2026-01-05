# TypeScript ハンズオンプロジェクト

TypeScriptの基礎を実践的に学べるハンズオンプロジェクトです。

## 📚 学習内容

このプロジェクトでは、以下の5つのレッスンを通してTypeScriptの基礎を学びます：

1. **基本的な型** - プリミティブ型、配列、タプル、Enum、Union型など
2. **関数** - 関数の型付け、オプショナル引数、デフォルト引数、オーバーロードなど
3. **インターフェース** - オブジェクトの型定義、継承、メソッドの定義など
4. **クラス** - オブジェクト指向プログラミング、継承、抽象クラス、アクセス修飾子など
5. **ジェネリクス** - 型の再利用、ユーティリティ型、ジェネリック制約など

## 🚀 セットアップ

### 前提条件
- Node.js (v16以上)
- npm または yarn

### インストール

```bash
# 依存関係をインストール
npm install
```

## 📖 使い方

各レッスンには以下のファイルがあります：
- `README.md` - レッスンの解説と課題
- `index.ts` - 実行可能なサンプルコードと練習問題

### レッスンの進め方

1. 各レッスンのディレクトリにある`README.md`を読む
2. `index.ts`のコードを確認・編集する
3. 以下のコマンドで実行して動作を確認

```bash
# Lesson 1: 基本的な型
npm run lesson1

# Lesson 2: 関数
npm run lesson2

# Lesson 3: インターフェース
npm run lesson3

# Lesson 4: クラス
npm run lesson4

# Lesson 5: ジェネリクス
npm run lesson5
```

### ビルド

```bash
# TypeScriptをJavaScriptにコンパイル
npm run build

# コンパイル後のファイルを実行
npm start
```

## 📂 プロジェクト構成

```
typescript-hands-on/
├── src/
│   ├── 01-basic-types/      # Lesson 1: 基本的な型
│   │   ├── README.md
│   │   └── index.ts
│   ├── 02-functions/        # Lesson 2: 関数
│   │   ├── README.md
│   │   └── index.ts
│   ├── 03-interfaces/       # Lesson 3: インターフェース
│   │   ├── README.md
│   │   └── index.ts
│   ├── 04-classes/          # Lesson 4: クラス
│   │   ├── README.md
│   │   └── index.ts
│   └── 05-generics/         # Lesson 5: ジェネリクス
│       ├── README.md
│       └── index.ts
├── dist/                    # ビルド出力先
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 学習のポイント

### Lesson 1: 基本的な型
- TypeScriptの型システムの基礎
- プリミティブ型と複合型の違い
- `any`と`unknown`の使い分け

### Lesson 2: 関数
- 関数の引数と戻り値の型付け
- オプショナル引数とデフォルト引数
- 関数オーバーロードの実装

### Lesson 3: インターフェース
- オブジェクトの構造定義
- インターフェースの継承
- Type vs Interface の違い

### Lesson 4: クラス
- クラスベースのOOP
- アクセス修飾子（public, private, protected）
- 継承と抽象クラス

### Lesson 5: ジェネリクス
- 型の再利用性を高める
- ジェネリック制約
- TypeScriptの便利なユーティリティ型

## 💡 Tips

- 各レッスンのコードは実行可能な状態になっています
- コードを自由に編集して実験してみましょう
- エラーメッセージをよく読むことで型システムの理解が深まります
- VSCodeなどのエディタを使うと、型の補完が効いて学習効率が上がります

## 🔧 トラブルシューティング

### ts-nodeが見つからない場合
```bash
npm install
```

### 型エラーが出る場合
```bash
# TypeScriptの設定を確認
cat tsconfig.json

# 厳密な型チェックを一時的に無効化する場合
# tsconfig.jsonの"strict": trueをfalseに変更
```

## 📚 次のステップ

このハンズオンを完了したら、以下のトピックに挑戦してみましょう：

- **非同期処理**: Promise, async/await
- **モジュールシステム**: import/export, ESModules
- **高度な型**: Mapped Types, Conditional Types, Template Literal Types
- **デコレータ**: クラスデコレータ、メソッドデコレータ
- **実践プロジェクト**: Express + TypeScript, React + TypeScript など

## 📖 参考資料

- [TypeScript公式ドキュメント](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

---

Happy Coding! 🎉
