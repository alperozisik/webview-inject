/* 
		WARNING 
		Auto generated file. 
		Do not modify its contents.
*/

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const ImageView = require('sf-core/ui/imageview');
const FlexLayout = require('sf-core/ui/flexlayout');
const Image = require('sf-core/ui/image');
const ImageFillType = require('sf-core/ui/imagefilltype');
const Label = require('sf-core/ui/label');
const TextAlignment = require('sf-core/ui/textalignment');
const Color = require('sf-core/ui/color');
const Font = require('sf-core/ui/font');
const Button = require('sf-core/ui/button');



const Page2_ = extend(Page)(
	//constructor
	function(_super){
		// initalizes super class for this page scope
		_super(this, {
			onLoad: onLoad.bind(this),
			orientation: Page.Orientation.PORTRAIT
		});

		var img = new ImageView({
			height: 60.3,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			marginLeft: 20,
			marginRight: 20,
			alpha: 1,
			visible: true,
			image: Image.createFromFile("images://smartface.png"),
			imageFillType: ImageFillType.ASPECTFIT
		}); 
		this.layout.addChild(img);
		
		var lbl = new Label({
			height: 90.45000000000002,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			marginLeft: 20,
			marginRight: 20,
			textAlignment: TextAlignment.MIDCENTER,
			alpha: 1,
			borderColor: Color.create(255, 255, 255, 255),
			borderRadius: 0,
			borderWidth: 0,
			backgroundColor: Color.create(0, 0, 0, 0),
			visible: true,
			text: "This is second page"
		});
		lbl.font = Font.create("Arial", 16, Font.NORMAL); 
		this.layout.addChild(lbl);
		
		var btn = new Button({
			height: 60,
			positionType: FlexLayout.PositionType.RELATIVE,
			marginLeft: 20,
			marginRight: 20,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			backgroundColor: Color.create(255, 0, 161, 241),
			textColor: Color.create(255, 255, 255, 255),
			alpha: 1,
			visible: true,
			text: "Back"
		});
		btn.font = Font.create("Arial", 16, Font.NORMAL); 
		this.layout.addChild(btn);
		
		
		//assign the children to page 
		this.children = Object.assign({}, {
			img: img,
			lbl: lbl,
			btn: btn
		});

});

function onLoad() { 

  this.headerBar.title = "page2";
  this.headerBar.titleColor = Color.create(255, 0, 0, 0);
  this.headerBar.visible = true;
  this.statusBar.visible = true;
  this.layout.alignItems = FlexLayout.AlignItems.CENTER;
  this.layout.justifyContent = FlexLayout.JustifyContent.SPACE_AROUND;
  this.layout.flexDirection = FlexLayout.FlexDirection.COLUMN;
  this.layout.flexWrap = FlexLayout.FlexWrap.NOWRAP;
  this.layout.direction = FlexLayout.Direction.INHERIT;
  this.layout.backgroundColor = Color.create(255, 197, 210, 28);

}

module && (module.exports = Page2_);