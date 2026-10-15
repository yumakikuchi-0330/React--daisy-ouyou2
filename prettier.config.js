// @ts-check

/** @type {import("prettier").Config} */
const config = {
  // 1行の最大文字数
  printWidth: 80,
  // インデントのスペース数
  tabWidth: 2,
  // タブではなくスペースを使う
  useTabs: false,
  // 文末にセミコロンを付ける
  semi: true,
  // シングルクォートを使う
  singleQuote: true,
  // JSX ではダブルクォートを使う
  jsxSingleQuote: false,
  // 複数行の末尾にカンマを付ける
  trailingComma: 'all',
  // オブジェクトの波括弧の内側にスペースを入れる
  bracketSpacing: true,
  // JSX の閉じ > を最終行の末尾に置く
  bracketSameLine: false,
  // アロー関数の引数が1つでも括弧を付ける
  arrowParens: 'always',
  // 改行コードを LF に統一
  endOfLine: 'lf',
  // 使用するプラグイン（必要に応じて追加）
  plugins: [],
};

module.exports = config;
