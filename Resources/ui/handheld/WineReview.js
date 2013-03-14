
// WineReview.js
// Author: Matthew Johnson  & David Wells

function WineReview(wine){
	var global = require('ui/common/globals');	
	var self = global.createWindow('');
	self.barImage='images/iPhone_Nav_Bar_With_Bkgrd.png';
	var all = wine.all_information;

	var overview = Ti.UI.createView({
		height: '100%',
		width: '100%',
		layout: 'vertical'		
	});
	Ti.API.info(all.Labels[0].Url);
	// Add the header to the view.
	var header = require('ui/handheld/Wine_Review/header');
	var head = header(
			wine.name,
			all.Vineyard.Name,
			all.Appellation.Name,
			all.Appellation.Region.Name,
			all.Labels[0].Url,
			all
	);
	overview.add(head);
	get_checkin_view = require('ui/handheld/Wine_Review/Checkin');

	var ch = get_checkin_view(all);
	var dd = require('ui/common/elements/dropdown');
	dd(ch.view, self, "Finish Checkin", "Check In", "up", function(){
		alert("wine: "+ all.Id + " "+ ch.ta.value + " - " + Math.round(ch.rating.value));
		global.api.checkin(wine.id, ch.ta.value, Math.round(ch.rating.value), function(){
			alert('You have successfully checked in. Eventually, this will be more graceful');
		});
	});
	//alert("wineid: "+ JSON.stringify(wine));
	global.api.previous_checkins(wine.id, function(data){
		
		
		var reviews = [];
		
		for (var i = 0; i < data.length; i++) {
			var review = data[i];
			var r = Ti.UI.createTableViewRow({
				hasChild:false,
				selectionStyle: 'none',
				layout: 'vertical'
			});
			
			var rv = Ti.UI.createView({
				layout: 'vertical',
				height: Ti.UI.SIZE,
				width: Ti.UI.FILL,
			});
			r.add(rv);
			rv.add(Ti.UI.createLabel({
				text: review.rating,
				height: Ti.UI.SIZE,
				width: Ti.UI.FILL
			}));
			
			
			reviews.push(r);
			
		}
		
		
		// create table view
		var tableview = Titanium.UI.createTableView({
			data:reviews,
			width: Ti.UI.FILL,
			height: Ti.UI.SIZE,
			backgroundColor:'transparent'
		});
		
		overview.add(tableview);
	});
	self.add(overview);
	return self;
};

module.exports = WineReview;