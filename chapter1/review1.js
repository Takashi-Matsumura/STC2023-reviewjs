/* JavaScriptファイルの実行は、ターミナルを開いて、ディレクトリ（chapter1）に移動して、コマンド（node review1）を実行します。 */
// Ctrl + J
// > cd chapter1
// > node review1.js

// 変数の宣言：--------------------------------------------------
// let 変数名 = 値;

let greeting = "こんにちは"; // 値を変数に代入する
console.log(greeting); // 変数を関数に渡す


// 値の再代入：--------------------------------------------------
// 変数名 = 値;

greeting = "さようなら"; // 値の再代入
console.log(greeting);


// 変数のコピー：-------------------------------------------------
// let 変数名A = 変数名B;

let goodbye = greeting;
console.log(goodbye);


// 定数の宣言：--------------------------------------------------
// const 変数名 = 値;

const hello = "こんにちは";
console.log(hello);

// 練習：定数は変数のように再代入できません。エラーを発生させてみましょう
// hello = goodbye;


// データ型の種類：------------------------------------------------
// String | 文字列
// Number | 数値
// BigInt | 巨大な整数
// Boolean | 真偽値（true / false）
// null | ヌル（値が存在しないこと）
// undefined | 未定義（値が定義されていないこと）
// Symbol | シンボル
// Object | オブジェクト
// ※データ型は「プリミティブ型」と「オブジェクト（非プリミティブ型）」に分類される


// 文字列（String）---------------------------------------------
// 'これは文字列です';　（シングルクォート）
// "これも文字列です";　（ダブルクォート）
// `これも文字列です";　（バッククォート）
console.log(hello + " 太郎！");


// 数値（Number）----------------------------------------------
console.log(1234 + 0.5);
console.log(1234 + .5);

// 数値計算に使用可能な演算子
// + | 加算 | 15 = 6 + 9
// - | 減算 | 5 = 20 - 15
// * | 乗算 | 21 = 3 * 7
// / | 除算 | 2 = 10 / 5
// % | 剰余 | 1 = 7 % 3　（7を3で割ったときの余り）
// ** | べき乗 | 9 = 3 ** 2　（3の2乗）


// 真偽値（Boolean） true / false-------------------------------
console.log(10 === 10);
console.log(10 === 9);


// データ型の確認方法-----------------------------------------------
console.log(typeof "hello");
console.log(typeof 10);
console.log(typeof 10n);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof { });
console.log(typeof null);
console.log(typeof Symbol());

// 明示的な型変換
// Number( 値 ) | 数値へ変換する
// Boolean( 値 ) | 真偽値へ変換する
// String( 値 ) | 文字列へ変換する
// BigInt( 値 ) | BigInt型へ変換する

console.log(1 + "1");
console.log(1 + Number("1"));
console.log(1 === "1");
