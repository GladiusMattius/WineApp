function AddWineWindow(){
	var global = require('ui/common/globals');
	var make_row = require('ui/common/elements/search_results/make_row');
	var self = global.createWindow();

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
	return self;
}
module.exports = AddWineWindow;