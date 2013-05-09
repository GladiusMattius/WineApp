function AddWineWindow(){
	var global = require('ui/common/globals');
	var make_row = require('ui/common/elements/search_results/make_row');
	var self = global.createWindow();
	var TU = require ('/TitanUp/TitanUp');
	
	if(!global.android)
		self.barImage = 'images/iPhone_Nav_Bar_Bkgrd_With_Black.png';
	//win2.barImage='images/iPhone_Nav_Bar_Bkgrd_With_Black.png';

if(!global.android){
		var back = Ti.UI.createButton({ title: "Back" });
	 	back.addEventListener("click", function() 
		{
	 		self.close({animated:true});
		});
		self.setLeftNavButton(back);
	}
	
	
		 var allwines = [ 'Albarino', 'Barbera','Carmenere', 'Cabernet Sauvignon', 
 'Cabernet Franc', 'Chardonnay', 'Chenin Blanc', 'Dessert Wines', 'Dolcetto', 'Gamay', 'Gewurztraminer', 'Grenache', 'Grigio', 
 'Gris', 'Gruner Veltliner', 'Malbec', 'Madeira', 'Merlot', 'Mourvedre', 'Muscat', 'Nebbiolo', 'Petite Sirah', 'Pinot Blanc', 
 'Pinot Noir', 'Port', 'Primitivo', 'Riesling','Sangiovese', 'Sauvignon Blanc', 'Semillon', 'Sherry', 'Shiraz', 'Syrah', 
 'Tempranillo', 'Torrontes', 'Viognier', 'Zinfandel', 'Non-Vintage'];
	
	
	// Main View
	var view_scroll = Ti.UI.createScrollView({
		layout: 'vertical',
		height: Ti.UI.SIZE,
		width: Ti.UI.FILL,
	});
	
	var lbl_title = Ti.UI.createLabel({
		color: global.colors.dark,
//		top: 10,
//		bottom: 10,
		text:"Add Wine",
		font:{
            fontFamily:'Helvetica Neue',
            fontSize:22,
            fontWeight:'Bold',
            fontStyle:'italic',
           }
	});
	
	var	select_bar = global.TU.UI.createSelectBar ({
		width: Ti.UI.FILL,
		top:10,
		left: '5%',
		right: '5%',
		backgroundColor: global.colors.dark,
		allow_deselect: false,
		borderRadius: 0,
		labels: ['Other Wine', 'Red Wine', 'White Wine']
	});
	
	var image_wine = Ti.UI.createImageView({
  		width: '30%',
		top: 0,
		borderWidth: 1,
		borderRadius: 10,
	});
	
	var view_variety = Ti.UI.createView({
		layout: 'horizontal',
		height: Ti.UI.SIZE,
		width: Ti.UI.FILL,
		top:10,
	});

	var lbl_variety = Ti.UI.createLabel({
		color: global.colors.dark,
		left: '5%',
		text:"Variety",
		font:{
            fontFamily:'Helvetica Neue',
            fontSize:20,
            fontWeight:'Bold'
           }
	});		
	
	var picker_variety = TU.UI.createSimplePicker ({
		left: '5%',
		right: '5%',
		title: "Type",
		values: allwines 
	});
	
	view_variety.add(lbl_variety);
	view_variety.add(picker_variety);
	
	var view_year = Ti.UI.createView({
		layout: 'horizontal',
		height: Ti.UI.SIZE,
		width: Ti.UI.FILL,
		top:10,
	});

	var lbl_year = Ti.UI.createLabel({
		color: global.colors.dark,
		left: '5%',
		text:"Year    ",
		font:{
            fontFamily:'Helvetica Neue',
            fontSize:20,
            fontWeight:'Bold'
           }
	});	

	var txt_year = Ti.UI.createTextField({
		left: '5%',
		right: '5%',
		font:{
            fontFamily:'Helvetica Neue', fontSize: 18
           },  
		hintText:' i.e. 1996',
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});	
	
	view_year.add(lbl_year);
	view_year.add(txt_year);
	
	var textArea = Ti.UI.createTextArea({
		borderRadius: 5,
		left: '5%',
		right: '5%',
		top: 10,
		height: 60,
		width: Ti.UI.FILL,
		color: '#888',
		textAlign: 'left',
		value: 'Leave a comment about this wine...'
	});
	

	view_scroll.add(lbl_title);
	view_scroll.add(select_bar);
	view_scroll.add(view_variety);
	view_scroll.add(view_year);
	view_scroll.add(textArea);
	//view_scroll.add(image_wine);
	
	self.add(view_scroll);

	
	return self;
}
module.exports = AddWineWindow;