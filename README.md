# gas-with-test

GAS のテストを書くときの参考になるかもしれないコード

## ポイント

- `jest.config.js` の `globals` に `SpreadsheetApp` を追加することで、スプレッドシートのモックを作成できるようにする。
- `jest-mock-extended` を使って、スプレッドシートのモックを作成しやすくする（モックに型を付けることができる）。

## 参考にしたサイト

- https://zenn.dev/kokkosan/articles/mock-gas-with-aside
