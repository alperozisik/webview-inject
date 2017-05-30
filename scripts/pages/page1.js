const extend = require("js-base/core/extend");
const Router = require("sf-core/ui/router");

// Get generetad UI code
var Page1Design = require("../ui/ui_page1");

const Page1 = extend(Page1Design)(
    function(_super) {
        var page = this;
        _super(page);

        var baseOnLaod = page.onLoad;
        page.onLoad = function() {
            baseOnLaod && baseOnLaod();
        };

        var baseOnShow = page.onShow;
        page.onShow = function() {
            baseOnShow && baseOnShow();

            var myWebView = page.webview1;
            myWebView.loadURL('http://example.com/');
            myWebView.onLoad = function(event) {
                console.log("web page loaded");
                setTimeout(function() { //this is UI thread via Timer; modified original setTimeout in app.js
                    var script = 'document.querySelector("body > div > p:nth-child(3) > a").style.display = "none";';
                    myWebView.evaluateJS(script);
                    console.log("script evaluated");
                }, 3000);
            };
        };


    });


module && (module.exports = Page1);
