/* JavaScriptファイルの実行は、ターミナルを開いて、ディレクトリ（chapter2）に移動して、コマンド（node review2）を実行します。 */
// Ctrl + J
// > cd chapter2
// > node review2.js

// 算術演算子：--------------------------------------------------
/// + | 加算 | 15 = 6 + 9
// - | 減算 | 5 = 20 - 15
// * | 乗算 | 21 = 3 * 7
// / | 除算 | 2 = 10 / 5
// % | 剰余 | 1 = 7 % 3　（7を3で割ったときの余り）
// ** | べき乗 | 9 = 3 ** 2　（3の2乗）
// ++ | 1を加算
// -- | 1を減算

let x = 0;
++x;
console.log(x);
--x;
console.log(x);

let a = 0;
let b = a++;
console.log("a:", a, "b:", b);

a = 0;
let c = --a;
console.log("a:", a, "c:", c);

a = 0;
let d = a--;
console.log("a:", a, "d:", d);


// 等価演算子：--------------------------------------------------
// == | 値が等しいことを確認 | 1 == "1"（true）、1 == 1（true）
// === | 値と型が等しいことを確認 | 1 === "1"（false）、1 === 1（ture）
// != | 値が等しくないことの確認 | 1 != "1"（false）、1 != 2（true）
// !== | 値と型が等しくないことの確認 | 1 !== "1"（true）、1 !== 1（false）

console.log(null == undefined);

const obj1 = {};
const obj2 = {};
console.log(obj1 === obj2);


// 関数演算子：--------------------------------------------------
// A < B | AがBより小さいことの確認 | 1 < 2（true）、1 < 1（false）
// A > B | AがBより大きいことの確認 | 2 > 1（true）、1 > 1（false）
// A <= B | AがB以下であることの確認 | 1 <= 2（true）、2 <= 2（true）
// A >= B | AがB以上であることの確認 | 2 >= 1（true）、2 >= 2（true）
// A in B | AのプロパティがBのオブジェクトのプロパティとして含まれるかの確認


// 自己代入演算子：------------------------------------------------
a = 10;
a += 2;
console.log(a);

a = 10;
a -= 2;
console.log(a);

a = 10;
a /= 2;
console.log(a);

a = 10;
a *= 2;
console.log(a);

a = 10;
a %= 3;
console.log(a);

a = 10;
a **= 2;
console.log(a);

a = true;
a &&= false;
console.log(a);

a = true;
a ||= false;
console.log(a);

a = null;
a ??= "初期値";
console.log(a);


// 論理演算子：--------------------------------------------------
// && | 論理積（AND条件）を表す。A && Bの場合、AかつBの条件を表す
// || | 論理和（OR条件）を表す。A || Bの場合、AまたはBの条件を表す

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


// 三項演算子：--------------------------------------------------
// 条件式 ? { 条件式がtrueのときに実行 } : { 条件式がfalseのときに実行 }

(1 === 1) ? console.log("真") : console.log("偽");
(1 === 2) ? console.log("真") : console.log("偽");

