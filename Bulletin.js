

////<script *//*type="text/javascript"*/

 // ページ読み込み時に実行したい処理*/
 window.onload = function () {

    //メッセージラベル更新
    function MessageUpdate(messageStr) {
        document.getElementById("Message").innerText = messageStr
    }

   
    //エラーメッセージ
   var errorMessage = "";
    errorMessage = 'Model.Message'.split(',').join('\r\n');
    if ('@Model.ButtonKubun' == "1") {
        //セッションにユーザIDを追加
        SessionUpdate('@Model.UserId');
        //セッションIDの値設定(裏の値)
        document.getElementById('Settion_Id').value = localStorage.getItem('UserId');
        //セッションIDのテキストの値設定(画面表示)
        document.getElementById('SettionId').innerText = localStorage.getItem('UserId');
        ////フォームを表示/非表示
         DisplayForm("fromBulletinBoard");
        //メッセージラベル更新
        MessageUpdate('');
    }
    else {
         //メッセージラベル更新
        MessageUpdate(errorMessage);
    }
    
     document.getElementById('Login').style.display = "block";
    let login = document.querySelectorAll('.menu_list li');
    login[0].style.display = "block"
    login[1].style.display = "block"
    login[2].style.display = "none"
    login[3].style.display = "none"
    login[4].style.display = "none"
    login[5].style.display = "none"

  
    //ログインボタン押下時の処理
    const send_loginid_password = document.getElementById('Send_LoginID_PassWord');
    console.log(send_loginid_password);
    send_loginid_password.onclick = function () {
    /*ログインのid取得*/
    const username = document.getElementById('LoginID');
    const inputname = username.value
    console.log("ユーザー：" + inputname);
   /*ログインのpassword取得*/
    const password = document.getElementById('PassWord');
    const inputpass = password.value
    console.log("パスワード：" + inputpass);
    //「==」は、「値」だけを比較して「型」はチェックしない
    //「===」は、「値」と「型」を比較
    //条件演算子「&&」,「または」「||」
    if (inputname === "1" && inputpass === "1") {
    alert("ログインします");
    console.log(inputvalue);
    document.getElementById('grid').style.display = "block";
    document.getElementById('Login').style.display = "none";
    login[0].style.display = "block"
    login[1].style.display = "none"
    login[2].style.display = "block"
    login[3].style.display = "block"
    login[4].style.display = "block"
    login[5].style.display = "block"
                    
    } else {
   alert("ログイン出来ませんでした");
    //名前エラーメッセージの表示させる要素の取得
    const errmsgname = document.queryselector('.login-err-msg-pass');
    // クラスを追加(エラーメッセージを表示する)
        errmsgname.classlist.add('form-invalid');
    // エラーメッセージのテキスト
    errmsgname.textcontent = 'id,passを入力してください';
   /*アカウントの入力情報(id,pass)*/
        let username = document.getElementById('LoginID')
        let userpass = document.getElementById('PassWord')
    //// クラスを追加(フォームの枠線を赤くする)
    username.classlist.add('input-invalid');
    userpass.classlist.add('input-invalid');               
    }

    /*ログアウトボタンを押下時*/
    let LogOut = document.getElementById('logout');
    LogOut.onclick = function () {
    alert("ログアウトします");
    document.getElementById('From_New_Registration').style.display = "none";
    document.getElementById('Login').style.display = "block";
    document.getElementById('account_edit').style.display = "none";
    document.getElementById('grid').style.display = "none";
    document.getElementById('article_post').style.display = "none";
    document.getElementById('detail_article_post').style.display = "none";
    login[0].style.display = "block"
    login[1].style.display = "block"
    login[2].style.display = "block"
    login[3].style.display = "block"
    login[4].style.display = "block"
    login[5].style.display = "none"
    /*アカウントの入力情報(ID,PASS)*/
    let username = document.getElementById('LoginID')
    let userpass = document.getElementById('PassWord')
    //名前エラーメッセージの表示させる要素の取得
    const errMsgName = document.querySelector('.login-err-msg-pass');
    // エラーメッセージのテキストに空文字を代入
    errMsgName.textContent = '';
    // クラスを削除
    username.classList.remove('input-invalid');
    userpass.classList.remove('input-invalid');
    username.value = '';
    userpass.value = '';
                }
            }
    }

            
    window.addEventListener('DOMContentLoaded', () => {
    //新規登録ボタン押下時の処理
    //登録ボタン押下時の処理
    const Send_New_Registration = document.getElementById('New_Registration');
    Send_New_Registration.addEventListener('click', function (e) {
    // デフォルトアクションをキャンセル
    e.preventDefault();

    //ユーザー名の入力チェック
    /*アカウントの入力情報*/
    let username = document.getElementById('username')/*.value*/;
    //名前エラーメッセージの表示させる要素の取得
    const errMsgName = document.querySelector('.err-msg-name');
    if (!username.value) {
    alert('ユーザー名が未入力です');
    // クラスを追加(エラーメッセージを表示する)
    errMsgName.classList.add('form-invalid');
    // エラーメッセージのテキスト
    errMsgName.textContent = 'お名前が入力されていません';
    // クラスを追加(フォームの枠線を赤くする)
    username.classList.add('input-invalid');
    //alert('フォームの枠線を赤くする');
    } else if (username.value.match(/^([一-龠]{1, 8})$/)|| username.value.match(/^([0-9a-zA-Z]{1, 8})$/)) {
    alert('名前の入力OK');
    // エラーメッセージのテキストに空文字を代入
    errMsgName.textContent = '';
    // クラスを削除
    username.classList.remove('input-invalid');
    } else {
    // クラスを追加(エラーメッセージを表示する)
    errMsgName.classList.add('form-invalid');
    errMsgName.textContent = '正しく入力してください';
    username.classList.add('input-invalid');
   }

    //IDの入力チェック
    let login = document.getElementById('login_id')/*.value*/;
    //IDエラーメッセージの表示させる要素の取得
    const errMsgID = document.querySelector('.err-msg-login');
    if (!login.value) {
    alert('IDが未入力です');
    // クラスを追加(エラーメッセージを表示する)
    errMsgID.classList.add('form-invalid');
    // エラーメッセージのテキスト
    errMsgID.textContent = 'IDが入力されていません';
    //クラスを追加(フォームの枠線を赤くする)
    login.classList.add('input-invalid');
    //alert('フォームの枠線を赤くする');
    } else if (login.value.match(/^([0-9a-zA-Z]{1, 8})$/)) {
    alert('IDの入力OK');
    // エラーメッセージのテキストに空文字を代入
    errMsgID.textContent = '';
    // クラスを削除
    login.classList.remove('input-invalid');
    } else {
    // クラスを追加(エラーメッセージを表示する)
    errMsgID.classList.add('form-invalid');
    errMsgID.textContent = '全角半角英数字の使用OK、8文字で入力';
    login.classList.add('input-invalid');
    }
    alert("会員登録ボタンが押されました。");
    //PASSWORDの入力チェック
    const password = document.getElementById('password');
    //PASSWORDエラーメッセージの表示させる要素の取得
    const errMsgPass = document.querySelector('.err-msg-pass');

    if (!password.value) {
    alert('PASSが未入力です');
    //クラスを追加(エラーメッセージを表示する)
    errMsgPass.classList.add('form-invalid');
    //エラーメッセージのテキスト
    errMsgPass.textContent = 'PASSが入力されていません';
    //クラスを追加(フォームの枠線を赤くする)
    password.classList.add('input-invalid');
    //alert('フォームの枠線を赤くする');
    } else if (password.value.match(/^([0-9a-zA-Z]{1, 8})$/)) {
    alert('PASSの入力OK');
    // エラーメッセージのテキストに空文字を代入
    errMsgPass.textContent = '';
    // クラスを削除
    password.classList.remove('input-invalid');
    } else {
    // クラスを追加(エラーメッセージを表示する)
    errMsgPass.classList.add('form-invalid');
    errMsgPass.textContent = '全角半角英数字の使用OK、8文字で入力';
    password.classList.add('input-invalid');
    }
    // 「パスワード」と「パスワード再入力」が一致しているかどうかのチェック
    const again_password = document.getElementById('again_password');
    //PASSWORD確認用エラーメッセージの表示させる要素の取得
    const errMsgPassAgain = document.querySelector('.err-msg-passagain');
    if (password.value !== again_password.value) {
    errMsgPassAgain.classList.add('form-invalid');
    errMsgPassAgain.textContent = 'パスワードとパスワード再入力が一致していません';
    again_password.classList.add('input-invalid');
    } else {
     errMsgPassAgain.textContent = '';
    again_password.classList.remove('input-invalid');
           }
       })
    })

        /*掲示板TOP画面メニューリストのボタン押下時*/
        /*DOMContentLoaded・・・HTML構文の解析が終わったら*/
        window.addEventListener("DOMContentLoaded", () => {
        /*掲示板TOP画面メニューリスト取得*/
        /*document.querySelectorAllで「ul」タグ「li」を取得*/
        /*「」に取得値を代入*/
        let c = document.querySelectorAll('.menu_list li');


    ///*第1引数「li」の要素*/
    /*第2引数 要素要素番号*/
    c.forEach(function (element) {
        //カスタムデータ属性の取得
        //要素.dataset.data-〇〇の〇〇の部分
        /*console.log(element.dataset.menu);*/
        element.addEventListener("click", function () {

            switch (element.dataset.menu) {
                case '1':
                    /*新規登録  */
                    document.getElementById('From_New_Registration').style.display = "block";
                    document.getElementById('Login').style.display = "none";
                    document.getElementById('account_edit').style.display = "none";
                    document.getElementById('grid').style.display = "none";
                    document.getElementById('article_post').style.display = "none";
                    document.getElementById('detail_article_post').style.display = "none";
                    break;
                case '2':
                    /*ログイン */
                    document.getElementById('From_New_Registration').style.display = "none";
                    document.getElementById('Login').style.display = "block";
                    document.getElementById('account_edit').style.display = "none";
                    document.getElementById('grid').style.display = "none";
                    document.getElementById('article_post').style.display = "none";
                    document.getElementById('detail_article_post').style.display = "none";
                    break;
                case '3':
                    /*ログアウト */
                    document.getElementById('From_New_Registration').style.display = "none";
                    document.getElementById('Login').style.display = "block";
                    document.getElementById('account_edit').style.display = "none";
                    document.getElementById('grid').style.display = "none";
                    document.getElementById('article_post').style.display = "none";
                    document.getElementById('detail_article_post').style.display = "none";
                    break;
                case '4':
                    /*アカウント編集 */
                    document.getElementById('From_New_Registration').style.display = "none";
                    document.getElementById('Login').style.display = "none";
                    document.getElementById('account_edit').style.display = "block";
                    document.getElementById('grid').style.display = "none";
                    document.getElementById('detail_article_post').style.display = "none";
                    break;
                case '5':
                    /*掲示板TOP */
                    document.getElementById('From_New_Registration').style.display = "none";
                    // document.getElementById('Login').style.display = "none";
                    document.getElementById('account_edit').style.display = "none";
                    document.getElementById('grid').style.display = "block";
                    document.getElementById('article_post').style.display = "none";
                    document.getElementById('detail_article_post').style.display = "none";
                    break;
                case '6':
                    /*掲示投稿 */
                    document.getElementById('From_New_Registration').style.display = "none";
                    // document.getElementById('Login').style.display = "none";
                    document.getElementById('account_edit').style.display = "none";
                    document.getElementById('grid').style.display = "none";
                    document.getElementById('article_post').style.display = "block";
                    document.getElementById('detail_article_post').style.display = "none";
                    break;
                case '7':
                    /*掲示投稿の詳細 */
                    document.getElementById('From_New_Registration').style.display = "none";
                    document.getElementById('Login').style.display = "none";
                    document.getElementById('account_edit').style.display = "none";
                    document.getElementById('grid').style.display = "none";
                    document.getElementById('article_post').style.display = "none";
                    document.getElementById('detail_article_post').style.display = "block";
                    break;
            }
        })
    })                                
        })


    /*load・・・画像やスクリプトなどすべての読み込みが終わったら*/
    window.addEventListener('load', function () {
        /*掲示板の画像クリック→詳細画面表示*/
        let imgs = document.querySelectorAll('.size');
    imgs.forEach(function (el, index) {
        el.onclick = function () {
            document.getElementById('grid').style.display = "none";
            document.getElementById('detail_article_post').style.display = "block";
            document.getElementById('article-img').src = el.dataset.image;
            window.scrollTo(0, 0);
        }
    })
    /*掲示板の画像のスクロール*/
    let targetElement = document.querySelectorAll(".item");
    console.log(targetElement);

    document.addEventListener("scroll", function () {
                for (let i = 0; i < targetElement.length; i++) {
                    const getElementDistance = targetElement[i].getBoundingClientRect().top
    console.log(getElementDistance);

                    if (window.innerHeight > getElementDistance) {
        targetElement[i].classList.add("show");
                    }
                }
            })
        });

    // パスワードの表示・非表示切替
    window.addEventListener("DOMContentLoaded", () => {
    //アイコンの取得
    let tl = document.getElementById('buttonEye');
    // パスワードの表示
    tl.addEventListener('click', function () {
        let txtPass = document.getElementById("password");
    if (txtPass.type === "text") {
        txtPass.type = "password";
    tl.className = "fas fa-eye";
                } else {
        txtPass.type = "text";
    tl.className = "fas fa-eye-slash";
                }
            })
    //アイコンの取得
    let rebtn = document.getElementById('rebuttonEye');
    // パスワードの確認用
    rebtn.addEventListener('click', function () {
        let againtxtPass = document.getElementById("again_password");
    if (againtxtPass.type === "text") {
        againtxtPass.type = "password";
    rebtn.className = "fas fa-eye";
    } else {
    againtxtPass.type = "text";
    rebtn.className = "fas fa-eye-slash";
           }
     })

    //ログイン画面
    //アイコンの取得
    let Send = document.getElementById('rerebuttonEye');
    Send.addEventListener('click', function () {
    let reagaintxtPass = document.getElementById("PassWord");
    if (reagaintxtPass.type === "text") {
        reagaintxtPass.type = "password";
    Send.className = "fas fa-eye";
    } else {
    reagaintxtPass.type = "text";
    Send.className = "fas fa-eye-slash";
              }
            })     
   });
