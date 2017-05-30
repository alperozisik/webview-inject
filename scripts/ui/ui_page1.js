/* 
		WARNING 
		Auto generated file. 
		Do not modify its contents.
*/

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const WebView = require('sf-core/ui/webview');
const FlexLayout = require('sf-core/ui/flexlayout');
const Color = require('sf-core/ui/color');



const Page1_ = extend(Page)(
	//constructor
	function(_super){
		// initalizes super class for this page scope
		_super(this, {
			onLoad: onLoad.bind(this),
			orientation: Page.Orientation.PORTRAIT
		});

		var webview1 = new WebView({
			left: 0,
			top: 0,
			positionType: FlexLayout.PositionType.ABSOLUTE,
			right: 0,
			bottom: 0,
			backgroundColor: Color.create("#FFFFFF"),
			alpha: 1,
			borderColor: Color.create(255, 0, 0, 0),
			borderWidth: 0,
			visible: true
		}); 
		this.layout.addChild(webview1);
		this.webview1 = webview1;
		
		//assign the children to page 
		this.children = Object.assign({}, {
			webview1: webview1
		});

});

function onLoad() { 

  this.headerBar.title = "page1";
  this.headerBar.titleColor = Color.create(255, 0, 0, 0);
  this.headerBar.visible = true;
  this.statusBar.visible = true;
  this.layout.flexDirection = FlexLayout.FlexDirection.COLUMN;
  this.layout.alignItems = FlexLayout.AlignItems.CENTER;
  this.layout.direction = FlexLayout.Direction.INHERIT;
  this.layout.flexWrap = FlexLayout.FlexWrap.NOWRAP;
  this.layout.justifyContent = FlexLayout.JustifyContent.SPACE_AROUND;
  this.layout.backgroundColor = Color.create("#EEEEEE");

}

module && (module.exports = Page1_);