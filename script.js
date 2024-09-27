function generateTemplate() {
    const name = document.getElementById('onamae').value;
    const user = document.getElementById('yu-za-').value;
    const date = document.getElementById('start').value;
    const project = document.getElementById('pj').value;
    const mokuteki = document.getElementById('mokuteki').value;
    const isCheckLogo = document.getElementById('lo').checked;
    const isCheckBanner = document.getElementById('banner').checked;
    const isCheckIcon = document.getElementById('icon').checked;
    const isCheckFly = document.getElementById('fly').checked;
    const isCheckOther = document.getElementById('etc').checked;
    const other = document.getElementById('sonota1').value;
    const size = document.getElementById('size').value;
    const isPng = document.getElementById('png').checked;
    const isJpeg = document.getElementById('jpg').checked;
    const isEtc = document.getElementById('sonota').checked;
    const other2 = document.getElementById('sonota2').value;
    const color = document.getElementById('color').value;
    const style = document.getElementById('style').value;
    const text = document.getElementById('text').value;
    const logo = document.getElementById('logo').value;
    const sankou = document.getElementById('sankou').value;
    const time = document.getElementById('meeting-time').value;
    const youbou = document.getElementById('youbou').value;
    const isYes = document.getElementById('yes').checked;
    const isNo = document.getElementById('no').checked;
    const bikou = document.getElementById('bikou').value;
    const isHai = document.getElementById('hai').checked;
    const isIie = document.getElementById('iie').checked;
    const bikou2 = document.getElementById('bikou2').value;
    const comment = document.getElementById('comment').value;

    console.log("logo: " + isCheckLogo);
    console.log("banner: " + isCheckBanner);
    console.log("icon: " + isCheckIcon);
    console.log("fly: " + isCheckFly);
    console.log("etc: " + isCheckOther);
    console.log("isYes" + isYes);
    console.log("isNo" + isNo);
    console.log("hai: " + isHai);
    console.log("iie: " + isIie);

    if (!isYes && !isNo) {
        alert('アイデアの提案が必要か選択してください．');
        return;
    }

    if (!isHai && !isIie) {
        alert('製作開始の依頼を選択してください．');
        return;
    }

    let target = "";
    if (isCheckLogo) {
        target += "ロゴ";
    }

    if (isCheckBanner) {
        if (target.length > 0) {
            target += ", バナー";
        }else{
            target += "バナー";
        }
    }

    if (isCheckIcon) {
        if (target.length > 0) {
            target += ", アイコン";
        }else{
            target += "アイコン";
        }
    }

    if (isCheckFly) {
        if (target.length > 0) {
            target += ", フライヤー";
        }else{
            target += "フライヤー";
        }
    }

    if (isCheckOther) {
        if (target.length > 0) {
            target += `, その他：${other}`
        }else{
            target += `その他：${other}`
        }
    }

    let targetType = "";
    if (isPng) {
        targetType += "png";
    }

    if (isJpeg) {
        if (targetType.length > 0) {
            targetType += ", jpeg";
        }else{
            targetType += "jpeg";
        }
    }

    if (isEtc) {
        if (targetType.length > 0) {
            targetType += `, その他：${other2}`
        } else{
            targetType += `その他：${other2}`
        }
    }

    const output = `### デザイン制作依頼書
    
依頼者名： [${name}]
ユーザーID(数字のみ)： [${user}]
依頼日： [${date}]
    
1. プロジェクト名：
    - [${project}]
    
2. デザインの目的：
    - [${mokuteki}]
    
3. 必要なデザイン物：
    - [${target}]
    
4. デザインのサイズと形式：
    - サイズ： [${size}]
    - 形式： [${targetType}]
    
5. カラーパレット
    - [${color}]
    
6. デザインのスタイル
    - [${style}]
    
7. 必要な要素
    - テキスト: [${text.length > 0 ? text : "なし"}]
    - ロゴ： [${logo.length > 0 ? logo : "なし"}]
    
8. 参考例
    - [${sankou.length > 0 ? sankou : "なし"}]
    
9. 納期
    - [${time}]
    
10. 追加の要望
    - [${youbou.length > 0 ? youbou : "なし"}]
    
11. デザイン案の提案
    - デザイン案の提案： [${isYes ? "はい" : "いいえ"}]
    - 備考： [${bikou.length > 0 ? bikou : "なし"}]
    
12. 製作開始の依頼
    - 製作開始： [${isHai ? "はい" : "いいえ"}]
    - 備考: [${bikou2.length > 0 ? bikou2 : "なし"}]
    
13. 追加のコメント
    - [${comment.length > 0 ? comment : "なし"}]`

    document.getElementById('output').value = output;
}

function copyToClipboard() {
    const outputTextarea = document.getElementById('output');
    outputTextarea.select();
    document.execCommand('copy');
}
