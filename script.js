let header = document.querySelector("header");
//重複的部分可設定變數用來簡化語法

window.addEventListener("scroll",() => {
    if(window.scrollY != 0){
        header.style.boxShadow = "3px 3px 5px #757474";
    }else{
        header.style.boxShadow = "none";
    }
});

/*  在網頁視窗裡增加一個事件監控→對象:捲軸,執行函式 =>

    設定if條件：捲軸Y軸不為0時(滑鼠下捲，定位離開最上方)顯示陰影；
    反之，捲軸Y軸為0時(回到最上方定位點)不顯示陰影

    →執行文件(視窗裡的文件=該網頁html).搜尋選擇器(網頁標籤).style(要執行的屬性).boxshadow(屬性裡的屬性) = "要填入的值"

window.addEventListener("scroll",() => {
    if(window.scrollY != 0){
        document.querySelector("header").style.boxShadow = "3px 3px 5px #757474";
    }else{
        document.querySelector("header").style.boxShadow = "none";
    }
});*/