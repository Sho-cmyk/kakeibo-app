window.onload = function() {
    subcategory = document.getElementById("subcategory");
    category = document.getElementById("category");
    category.onchange = changeCategory;
}

function changeCategory() {
    var changedCategory = category.value;
    if (changedCategory == "1") {
        setShokuhi();
    } else if (changedCategory == "2") {
        setNichiyohin();
    } else if (changedCategory == "3") {
        setShumi();
    } else if (changedCategory == "4") {
        setKosaihi();
    } else if (changedCategory == "5") {
        setKotuhi();
    } else if (changedCategory == "6") {
        setIfuku();
    } else if (changedCategory == "7") {
        setKenko();
    } else if (changedCategory == "8") {
        setJidosha();
    } else if (changedCategory == "9") {
        setKyoyo();
    } else if (changedCategory == "10") {
        setTokubetu();
    } else if (changedCategory == "11") {
        setGenkin();
    } else if (changedCategory == "12") {
        setSuido();
    } else if (changedCategory == "13") {
        setTushin();
    } else if (changedCategory == "14") {
        setJutaku();
    } else if (changedCategory == "15") {
        setZei();
    } else if (changedCategory == "16") {
        setHoken();
    } else if (changedCategory == "17") {
        setOther();
    } else if (changedCategory == "18") {
        setMibunrui();
    }
}

function setShokuhi() {
    subcategory.textContent = null;
    var Shokuhi = [
        {cd:"0", label:"食費"},
        {cd:"1", label:"食料品"},
        {cd:"2", label:"外食"},
        {cd:"3", label:"朝ご飯"},
        {cd:"4", label:"昼ご飯"},
        {cd:"5", label:"夜ご飯"},
        {cd:"6", label:"カフェ"},
        {cd:"7", label:"その他食費"}
    ];

    Shokuhi.forEach(function(value) {
        var op = document.createElement("option");
        op.value = value.cd;
        op.text = value.label;
        subcategory.appendChild(op);
    });
}

function setNichiyohin() {
    subcategory.textContent = null;
    var Nichiyohin = [
        {cd:"8", label:"日用品"},
        {cd:"9", label:"子育て用品"},
        {cd:"10", label:"ドラッグストア"},
        {cd:"11", label:"お小遣い"},
        {cd:"12", label:"ペット用品"},
        {cd:"13", label:"タバコ"},
        {cd:"14", label:"その他日用品"}
    ];

    Nichiyohin.forEach(function(value) {
        var op = document.createElement("option");
        op.value = value.cd;
        op.text = value.label;
        subcategory.appendChild(op);
    });
}

function setShumi() {
    subcategory.textContent = null;
    var Shumi = [
        {cd:"15", label:"アウトドア"},
        {cd:"16", label:"ゴルフ"},
        {cd:"17", label:"スポーツ"},
        {cd:"18", label:"映画・音楽・ゲーム"},
        {cd:"19", label:"本"},
        {cd:"20", label:"旅行"},
        {cd:"21", label:"秘密の趣味"},
        {cd:"22", label:"その他趣味・娯楽"}
    ];

    Shumi.forEach(function(value) {
        var op = document.createElement("option");
        op.value = value.cd;
        op.text = value.label;
        subcategory.appendChild(op);
    });
}

function setKosaihi() {
    subcategory.textContent = null;
    var Kosaihi = [
        {cd:"23", label:"交際費"},
        {cd:"24", label:"飲み会"},
        {cd:"25", label:"プレゼント代"},
        {cd:"26", label:"冠婚葬祭"},
        {cd:"27", label:"その他交際費"}
    ];

    Kosaihi.forEach(function(value) {
        var op = document.createElement("option");
        op.value = value.cd;
        op.text = value.label;
        subcategory.appendChild(op);
    });
}

function setKotuhi() {
    subcategory.textContent = null;
    var Kotuhi = [
        {cd:"28", label:"交通費"},
        {cd:"29", label:"電車"},
        {cd:"30", label:"バス"},
        {cd:"31", label:"タクシー"},
        {cd:"32", label:"飛行機"},
        {cd:"33", label:"その他交通費"}
    ];

    Kotuhi.forEach(function(value) {
        var op = document.createElement("option");
        op.value = value.cd;
        op.text = value.label;
        subcategory.appendChild(op);
    });
}

function setIfuku() {
    subcategory.textContent = null;
    var Ifuku = [
        {cd:"34", label:"衣服"},
        {cd:"35", label:"クリーニング"},
        {cd:"36", label:"美容院・理髪"},
        {cd:"37", label:"化粧品"},
        {cd:"38", label:"アクセサリー"},
        {cd:"39", label:"その他衣服・美容"}
    ];

    Ifuku.forEach(function(value) {
        var op = document.createElement("option");
        op.value = value.cd;
        op.text = value.label;
        subcategory.appendChild(op);
    });
}

function setKenko() {
    subcategory.textContent = null;
    var Kenko = [
        {cd:"40", label:"フィットネス"},
        {cd:"41", label:"ボディケア"},
        {cd:"42", label:"医療費"},
        {cd:"43", label:"薬"},
        {cd:"44", label:"その他健康・医療"}
    ];

    Kenko.forEach(function(value) {
        var op = document.createElement("option");
        op.value = value.cd;
        op.text = value.label;
        subcategory.appendChild(op);
    });
}

function setJidosha() {
    subcategory.textContent = null;
    var Jidosha = [
        {cd:"45", label:"自動車ローン"},
        {cd:"46", label:"道路料金"},
        {cd:"47", label:"ガソリン"},
        {cd:"48", label:"駐車場"},
        {cd:"49", label:"車両"},
        {cd:"50", label:"車検・整備"},
        {cd:"51", label:"自動車保険"},
        {cd:"52", label:"その他自動車"}
    ];

    Jidosha.forEach(function(value) {
        var op = document.createElement("option");
        op.value = value.cd;
        op.text = value.label;
        subcategory.appendChild(op);
    });
}

function setKyoyo() {
    subcategory.textContent = null;
    var Kyoyo = [
        {cd:"53", label:"書籍"},
        {cd:"54", label:"新聞・雑誌"},
        {cd:"55", label:"習いごと"},
        {cd:"56", label:"学費"},
        {cd:"57", label:"塾"},
        {cd:"58", label:"その他教養・教育"}
    ];

    Kyoyo.forEach(function(value) {
        var op = document.createElement("option");
        op.value = value.cd;
        op.text = value.label;
        subcategory.appendChild(op);
    });
}

function setTokubetu() {
    subcategory.textContent = null;
    var Tokubetu = [
        {cd:"59", label:"家具・家電"},
        {cd:"60", label:"住宅・リフォーム"},
        {cd:"61", label:"その他特別な支出"}
    ];

    Tokubetu.forEach(function(value) {
        var op = document.createElement("option");
        op.value = value.cd;
        op.text = value.label;
        subcategory.appendChild(op);
    });
}

function setGenkin() {
    subcategory.textContent = null;
    var Genkin = [
        {cd:"62", label:"ATM引き出し"},
        {cd:"63", label:"カード引き落とし"},
        {cd:"64", label:"電子マネー"},
        {cd:"65", label:"使途不明金"},
        {cd:"66", label:"その他現金・カード"}
    ];

    Genkin.forEach(function(value) {
        var op = document.createElement("option");
        op.value = value.cd;
        op.text = value.label;
        subcategory.appendChild(op);
    });
}

function setSuido() {
    subcategory.textContent = null;
    var Suido = [
        {cd:"67", label:"光熱費"},
        {cd:"68", label:"電気代"},
        {cd:"69", label:"ガス・灯油代"},
        {cd:"70", label:"水道代"},
        {cd:"71", label:"その他水道・光熱費"}
    ];

    Suido.forEach(function(value) {
        var op = document.createElement("option");
        op.value = value.cd;
        op.text = value.label;
        subcategory.appendChild(op);
    });
}

function setTushin() {
    subcategory.textContent = null;
    var Tushin = [
        {cd:"72", label:"携帯電話"},
        {cd:"73", label:"固定電話"},
        {cd:"74", label:"インターネット"},
        {cd:"75", label:"放送視聴料"},
        {cd:"76", label:"情報サービス"},
        {cd:"77", label:"宅配便・運送費"},
        {cd:"78", label:"その他通信費"}
    ];

    Tushin.forEach(function(value) {
        var op = document.createElement("option");
        op.value = value.cd;
        op.text = value.label;
        subcategory.appendChild(op);
    });
}

function setJutaku() {
    subcategory.textContent = null;
    var Jutaku = [
        {cd:"79", label:"住宅"},
        {cd:"80", label:"家賃・地代"},
        {cd:"81", label:"ローン返済"},
        {cd:"82", label:"管理費・積立金"},
        {cd:"83", label:"地震・火災保険"},
        {cd:"84", label:"その他住宅"}
    ];

    Jutaku.forEach(function(value) {
        var op = document.createElement("option");
        op.value = value.cd;
        op.text = value.label;
        subcategory.appendChild(op);
    });
}

function setZei() {
    subcategory.textContent = null;
    var Zei = [
        {cd:"85", label:"所得税・住民税"},
        {cd:"86", label:"年金保険料"},
        {cd:"87", label:"健康保険料"},
        {cd:"88", label:"その他税・社会保障"}
    ];

    Zei.forEach(function(value) {
        var op = document.createElement("option");
        op.value = value.cd;
        op.text = value.label;
        subcategory.appendChild(op);
    });
}

function setHoken() {
    subcategory.textContent = null;
    var Hoken = [
        {cd:"89", label:"生命保険"},
        {cd:"90", label:"医療保険"},
        {cd:"91", label:"その他保険"}
    ];

    Hoken.forEach(function(value) {
        var op = document.createElement("option");
        op.value = value.cd;
        op.text = value.label;
        subcategory.appendChild(op);
    });
}

function setOther() {
    subcategory.textContent = null;
    var Other = [
        {cd:"92", label:"仕送り"},
        {cd:"93", label:"事業経費"},
        {cd:"94", label:"事業原価"},
        {cd:"95", label:"事業投資"},
        {cd:"96", label:"寄付金"},
        {cd:"97", label:"雑費"}
    ];

    Other.forEach(function(value) {
        var op = document.createElement("option");
        op.value = value.cd;
        op.text = value.label;
        subcategory.appendChild(op);
    });
}

function setMibunrui() {
    subcategory.textContent = null;
    var Mibunrui = [
        {cd:"98", label:"未分類"}
    ];

    Mibunrui.forEach(function(value) {
        var op = document.createElement("option");
        op.value = value.cd;
        op.text = value.label;
        subcategory.appendChild(op);
    });
}
var data = [
    {
     value: 300,
     color:"#F7464A",
     highlight: "#FF5A5E",
     label: "Red"
    },
    {
     value: 50,
     color: "#46BFBD",
     highlight: "#5AD3D1",
     label: "Green"
    },
    {
     value: 100,
     color: "#FDB45C",
     highlight: "#FFC870",
     label: "Yellow"
    }
   ];
   
   var myChart = new Chart(document.getElementById("pie").getContext("2d")).Doughnut(data);
   