// 实际填写值为: =>  设计图px值(单倍值) / 11.765   单位: rem
// orientationchange 设备方向改变事件
// 三目判断的意义为, 设备方向改变的监听事件 包含 resize, 故支持 orientationchange 的话,  优先监听orientationchange
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientHeight;
            if(!clientWidth) return;
            if(clientWidth > 750) clientWidth = 750;
            docEl.style.fontSize = `${10 * (clientWidth / 320)}px`;
        }
        if(!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded',recalc, false);
})(document, window)