(function($) {
    $.ck_openWindow = function(options) {
        var defaults = {title: "", name: "", content: ""},
            settings = $.extend({}, defaults, options);

        if(!settings.name) {
            $.alert("创建 窗口失败：name不能为空");
            return false;
        }
        if(!settings.content) {
            $.alert("创建 窗口失败：没有指定content位置");
            return false;
        }

        //主webview
        var mainWebview = $.openWindow({
            id: settings.name + "-main",
            url: "../layouts/default-template.html",      
            extras:{
                title: settings.title
            }
        });

        //子webview
        var subWebview = $.preload({
            id: settings.name + "-sub",
            url: settings.content,
            styles:{
                top: '45px',
                bottom: '0px',
            }       
        });
        subWebview.addEventListener('loaded', function() {
            setTimeout(function() {
                mainWebview.append(subWebview);
            }, 400);
             });
    }
})(mui);