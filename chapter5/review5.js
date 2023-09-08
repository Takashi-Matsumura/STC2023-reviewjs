/* JavaScriptファイルの実行は、ターミナルを開いて、ディレクトリ（chapter5）に移動して、コマンド（node review5）を実行します。 */
// Ctrl + J
// > cd chapter5
// > node review5.js

// コレクション：-------------------------------------------------
/* 
    コレクションとは、値をまとまりで管理するオブジェクトのことです。
    ES6よりObjectとArrayに加えて、Map、Set、WeakMap、WeakSetも使えるようになった。
*/

// 配列（Array）：----------------------------------------------
// オブジェクトの場合はプロパティと値を対で格納するが、配列の場合は値のみを格納する。
// 格納された値は、それぞれの値に対応した添字（インデックス）が0から順に振られる。

// 配列の初期化：
// const 配列 = [ 値1, 値2, 値3, ... ];
const fruits = ["banana", "orange", "grape"];
console.log(fruits);

// 配列の初期化（new Array）：
const emptyArry = new Array(3); // 3つの空の配列を作成
console.log(emptyArry);
const filledArry = new Array(1, 2, 3);
console.log(filledArry);

// 配列の基本操作：
// 配列の要素の取得・変更
console.log(fruits[0]);
fruits[1] = "apple";
console.log(fruits);

// 配列の長さの取得
console.log(fruits.length);

// 配列の最後の要素を取得
console.log(fruits[ fruits.length - 1]);

// 配列が多階層で構成されている場合
const array2D = [
    ["太郎", "25歳", "男"],
    { name: "花子", age: "23歳", gender: "女"}
];
console.log(array2D[0]);
console.log(array2D[0][2]);
console.log(array2D[1]);
console.log(array2D[1].name);
console.log(array2D[1]["age"]);


// 配列のメソッド：------------------------------------------------
// 配列に要素を追加
// ・push（配列の末尾に要素を追加）
fruits.push("orange");
console.log(fruits);

// ・unshift（配列の先頭に要素を追加）
fruits.unshift("lemon");
console.log(fruits);

// 配列から要素を削除
// ・shift（配列の先頭の要素を削除）
let returnVal = fruits.shift();
console.log(fruits);
console.log(returnVal);

// ・pop（配列の末尾の要素を削除）
returnVal = fruits.pop();
console.log(fruits);
console.log(returnVal);

// ・splice（開始位置から特定の長さ分の要素を切り取る）
let deletedVal = fruits.splice(1, 2);
console.log(fruits);
console.log(deletedVal);

// 配列の結合・複製
// ・concat（別の配列を結合した新しい配列を作成）
const newFruits = fruits.concat(["melon", "mango"]);
console.log(newFruits);
console.log(fruits);

// 配列内の要素の存在チェック
// ・indexOf（配列内で最初に一致した要素の添字を返す）
let found = newFruits.indexOf("melon");
console.log(found);
let notFound = newFruits.indexOf("watermelon");
console.log(notFound);

// ・includes（配列内の要素に値が存在するかを確認）
found = newFruits.includes("mango");
notFound = newFruits.includes("grape");
console.log(found, notFound);

// その他のメソッド
// ・join（配列の要素を結合して文字列を作成）
// ・fill（配列の開始位置、終了位置で範囲指定した添字の要素に対して、特定の値を設定する）
//　　　　（開始位置、終了位置を省略した場合には、すべての要素を指定した値で上書きする）
// ・flat（多次元配列を引数で指定した次元分、配列の構造を平たん化する・・・？？）
// ・reverse（配列の要素の並びを逆にする）
