!function(){
    var width = 640;
    var iw = window.innerWidth || width,
        ow = window.outerWidth || iw,
        sw = window.screen.width || iw,
        saw = window.screen.availWidth || iw,
        ih = window.innerHeight || width,
        oh = window.outerHeight || ih,
        sh = window.screen.height || ih,
        sah = window.screen.availHeight || ih,
        w = Math.min(iw,ow,sw,saw,ih,oh,sh,sah),
        ratio = w/width,
        dpr = window.devicePixelRatio;
        ratio = Math.min(ratio,dpr);

    var ua = navigator.userAgent;
    if (/Android (\d+\.\d+)/.test(ua)){
        var version = parseFloat(RegExp.$1);
        // andriod 2.3
        if(version>2.3){
            document.write('<meta name="viewport" content="width=640, minimum-scale = '+ratio+', maximum-scale = '+ratio+', target-densitydpi=device-dpi">');
            // andriod 2.3以上
        }else{
            document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
        }
        // 其他系统
    } else {
        document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
    }
}();