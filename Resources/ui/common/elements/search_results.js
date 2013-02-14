module.exports = function(result){
	var view = Ti.UI.createView({
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		top: 0,
		left: 0,
		layout: 'vertical'
	});
	var tbl_data = [];
	//result.Products.List
	var pl = result.Products.List;
	for(var i = 0; i < pl.length; ++i)
	{
		wine = pl[i];
		imageurl = wine.Labels[0].Url;
		name = wine.Name;
		winetype = wine.Varietal.WineType.Name;
		location = wine.Appellation.Name + " - " +wine.Appellation.Region.Name;
		
		var row = Ti.UI.createTableViewRow
		({
			hasChild:true
		});
		
		// This image will be the image of the wine
		var image = Ti.UI.createImageView
		({ 		
  			height: 90,
  			width: 90,
  			left: 10,
  			top: 5,
  			bottom: 5,
  			borderRadius: 10,
  			borderColor: 'black',
			borderWidth: 1,
  			contentMode: 'aspectfill',
  			clipsToBounds: false,
  			image: imageurl,
  			layout:'vertical'
		});
	
		// Label for the location of the wine within the row
		var lbl_location = Ti.UI.createLabel
		({
			left:'40%',
			color:'black',
			bottom:5,
			right: 5,
			text: location,
			font:{fontSize:12,fontWeight:'normal',fontFamily:'Helvetica Neue'},
			touchEnabled:false
		});
		
		// Label for the type of wine within the row
		var lbl_type = Ti.UI.createLabel
		({
			left:'40%',
			color:'black',
			text: name,
			bottom:lbl_location.top,
			font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
			touchEnabled:false
		
		});	

		// Label for the date within the row
		var lbl_date = Ti.UI.createLabel
		({
			right:5,
			top:5,
			color:'black',
			text: winetype,
			font:{fontSize:12,fontWeight:'normal',fontFamily:'Helvetica Neue'},
			touchEnabled:false
		});

		// Add each of these features to the row, then push the row
		row.add(image);
		row.add(lbl_location);
		row.add(lbl_type);
		row.add(lbl_date);
		tbl_data.push(row);
	}
	var table = Titanium.UI.createTableView
	({
		backgroundColor:'transparent',
		top:10,
		width:'100%',
		height:'100%',
		data:tbl_data
	});
	view.add(table);
	return view;	
}

