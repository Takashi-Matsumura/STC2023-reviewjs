/* JavaScriptファイルの実行は、ターミナルを開いて、ディレクトリ（chapter3）に移動して、コマンド（node review3）を実行します。 */
// Ctrl + J
// > cd chapter3
// > node review3.js

// 条件分岐：---------------------------------------------------
// 制御構文のひとつ。何らかの条件をもとに、実行する処理の流れを分岐する

// if文：----------------------------------------------------
// if ( 条件式 ) {
//    ifブロック -- 条件式が真の場合に実行されるブロック
// }

const fruit = "りんご";
if ( fruit ) {
    console.log("フルーツが見つかりました。");
}
if ( fruit === "ばなな" ) {
    console.log("ばななが見つかりました。");
}
if ( fruit === "りんご") {
    console.log("りんごが見つかりました。");
}

// if...else文：---------------------------------------------
// if ( 条件式 ) {
//    ifブロック -- 条件式が真の場合に実行されるブロック
// } else {
//    elseブロック -- 条件式が偽の場合に実行されるブロック
// }

if ( fruit === "ばなな" ) {
    console.log("ばななが見つかりました。");
} else {
    console.log("ばなな以外が見つかりました。");
}

// ifブロックやelseブロックの省略記法：-----------------------------------

let score = 90;
let gokaku = score > 60 ? "合格" : "不合格";
console.log(gokaku);

// if文と論理積-------------------------------------------------
const num = 5;
if (num >= 0 && num < 10) {
    console.log("0以上10未満です。");
} else {
    console.log("それ以外です。");
}

// if文と論理和-------------------------------------------------
if (fruit === "みかん" || fruit === "りんご") {
    console.log("みかん、またはりんごです。");
} else {
    console.log("それ以外です。");
}


// switch文-------------------------------------------------
// switch ( 条件式 ) {
//    case 値1: -- case1（条件式 === 値1）
//        条件式の値が値1に一致する場合に実行されるコード
//    case 値2: -- case2（条件式 === 値2）
//        条件式の値が値2に一致する場合に実行されるコード
//    default:
//        条件式の値が値1、値2に一致しない場合に実行されるコード
// }

const val = 0; //数字のゼロ
switch ( val ) {
    case "0": console.log("case分が実行されました。");
    default: console.log("default分が実行されました。");
}


// 基本的な繰り返し処理
// 繰り返しのことをループとも呼びます。

// while文--------------------------------------------------
// while ( 条件式 ) {
//    whileブロック -- 条件式が真の場合に繰り返し処理されるコード
// }

let i = 0;
while ( i < 5 ) {
    console.log(i);
    i++;
}

// for文----------------------------------------------------
// for (初期化処理; ループ継続の条件式; ループごとの最後に実行される式) {
//    条件式が真の場合に、繰り返し処理されるコード
// }
for ( let j = 0; j < 5; j++) {
    console.log(j);
}

// 配列とfor文-------------------------------------------------
// 配列の定義
// let 配列 = [ 値1, 値2, 値3, ... ];

const fruitArray = ["りんご", "メロン", "みかん"];
console.log(fruitArray[0]);
console.log(fruitArray[1]);

fruitArray[0] = "バナナ";
console.log(fruitArray[0]);

const numArray = [1, 2, 3, 4, 5, 6, 7];
console.log(numArray.length);

for (let index = 0; index < numArray.length; index++) {
    numArray[index] = numArray[index] + 10;
}
console.log(numArray);

// for文、for...in文、for...of分の使い分け
/* 
    配列のループ：
        for文またはfor...of文を使いましょう。
        for..of文を使う場合は添字が取得できないため、添字が必要な場合にはfor文を使うとよいでしょう。
　　オブジェクト(Object)のループ
        オブジェクトは、for文ではループ処理を記述できません。
        プロパティのみ必要な場合にはfor...in文で繰り返し処理の記述もできます。
 */

