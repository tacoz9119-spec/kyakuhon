/* ===== Firebaseの設定 =====
   手順書の「手順5」で、Firebaseの画面に次のような部分が表示されます。

     const firebaseConfig = {
       apiKey: "……",
       authDomain: "……",
       ……
     };

   その部分（const firebaseConfig = { から }; まで）をそのままコピーして、
   下の「ここに貼り付け」の行と入れ替えてください。
   この値は公開されても問題のない値です（原稿はログインした本人しか読み書きできないよう、ルールで守ります）。 */

// ここに貼り付け

/* ↓ここから下は変更しないでください */
window.GENKO_FIREBASE = (typeof firebaseConfig !== 'undefined') ? firebaseConfig : null;
