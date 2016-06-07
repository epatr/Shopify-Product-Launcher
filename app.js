
// Utility Functions

function convertURL(text) {
  return text
  .toLowerCase()
  .replace(/[^\w ]+/g,'')
  .replace(/ +/g,'-');
}


// Objects

var Collection = function(title, collection, vendor, sku, aws) {

  // First, set up the individual product details
  var products = 
  [ {
      "title": "Regular Survival Bracelet™",
      "price": "29.99",
      "tags": "paracord, regular",
      "img": "regular",
      "description": "<h4>Product Information</h4><div><ul><li>The Regular Survival Bracelet&trade; is expedition ready, super stylish and the size preferred by most men.</li><li>Contains up to 15' of super strong, AUTHENTIC, 550 test military spec paracord. This is not the same paracord you see sold in most stores. This is the same cordage used to rig military parachutes. It is the real deal.</li><li>In an emergency, unravel the bracelet to deploy the paracord for your use. Make a tourniquet. Tie down a piece of equipment. Use it in however you need it.</li><li>If you use it in an emergency, we'll replace it for free in exchange for your story and the rights to publish it. All you pay is shipping.</li><li>The stainless closure is a load bearing marine grade stainless steel shackle that adjusts on your wrist and is guaranteed to never rust or break.</li><li>The nylon 6-6 closure contains no metal and is made of nylon. It is super tough, black and stealth. It also adjusts on your wrist.</li><li>Logo - If one of our logo products is chosen, the logos themselves are as tough as the rest of the bracelet. They will not scratch, rust, fade or show fingerprints.</li><li>Logo tag - The dog tag will match the closure chosen. If a stainless closure is chosen, the logo dog tag will be stainless. If a nylon 6-6 closure is chosen, the dog tag will be black nylon 6-6.</li><li>A break-away safety feature is included with every bracelet. If your bracelet gets hung up on something, it will break away from your wrist.</li><li>All our products are completely waterproof. They will not fade, mildew or rot.</li><li>Hand wash with warm water and soap or detergent.</li><li>Made in America!</li></ul></div><div class=gt-accordion><h4>Closure Types</h4><div><img src=https://s3.amazonaws.com/sstrapfiles/staticresources/closures/full.jpg></div><h4>Get the Perfect Size</h4><div><p>Here at Survival Straps&trade; we custom build each piece of gear based on your exact wrist measurement. We want the size of your wrist, not the length you would like the bracelet.We ask that you follow these 3 steps closely:<ol><li>Take a tape measure, string, or scotch tape and wrap it around your wrist to where the two ends touch and there isn't any slack. Keep in mind this doesn't need to be so tight that it cuts off your circulation, but merely a true wrist size without slack.</li><li>Mark this exact length on your string and use a ruler to determine your true wrist size. Order this exact wrist size when checking out, and you are good to go!</li></ol></p><h6>Side Notes</h6><p>If you are in-between sizes, round down to the nearest size. Please remember not to compensate for slack as we do that here in-house based on your true size. Lastly, if you have any questions for our team please shoot us an email at <a href=mailto: customerservice@survivalstraps.com>customerservice@survivalstraps.com</a> or give us a ring at 1-800-971-3360 and we will gladly walk through the steps with you.</p><img width=529 height=487 src=https://s3.amazonaws.com/sstrapfiles/staticresources/sizing_chart.jpg></div></div>"
    }, {
      "title": "Light Duty Survival Bracelet™",
      "price": "29.99",
      "tags": "paracord, lightduty",
      "img": "lightduty",
      "description": "<h4>Product Information</h4><div><ul><li>The Light Duty Survival Bracelet&trade; is the size preferred by most women. It only uses the outer sheath of the paracord making it much lighter and thinner than the regular version.</li><li>Contains up to 12' of super strong, AUTHENTIC, 550 test military spec paracord. This is not the same paracord you see sold in most stores. This is the same cordage used to rig military parachutes. It is the real deal.</li><li>In an emergency, unravel the bracelet to deploy the paracord for your use. Make a tourniquet. Tie down a piece of equipment. Use it in however you need it.</li><li>If you use it in an emergency, we'll replace it for free in exchange for your story and the rights to publish it. All you pay is shipping.</li><li>The stainless closure is a load bearing marine grade stainless steel shackle that adjusts on your wrist and is guaranteed to never rust or break.</li><li>The nylon 6-6 closure contains no metal and is made of nylon. It is super tough, black and stealth. It also adjusts on your wrist.</li><li>Logo - If one of our logo products is chosen, the logos themselves are as tough as the rest of the bracelet. They will not scratch, rust, fade or show fingerprints.</li><li>Logo tag - The dog tag will match the closure chosen. If a stainless closure is chosen, the logo dog tag will be stainless. If a nylon 6-6 closure is chosen, the dog tag will be black nylon 6-6.</li><li>A break-away safety feature is included with every bracelet. If your bracelet gets hung up on something, it will break away from your wrist.</li><li>All our products are completely waterproof. They will not fade, mildew or rot.</li><li>Hand wash with warm water and soap or detergent.</li><li>Made in America!</li></ul></div><div class=gt-accordion><h4>Closure Types</h4><div><img src=https://s3.amazonaws.com/sstrapfiles/staticresources/closures.jpg></div><h4>Get the Perfect Size</h4><div><p>Here at Survival Straps&trade; we custom build each piece of gear based on your exact wrist measurement. We want the size of your wrist, not the length you would like the bracelet.We ask that you follow these 3 steps closely:<ol><li>Take a tape measure, string, or scotch tape and wrap it around your wrist to where the two ends touch and there isn't any slack. Keep in mind this doesn't need to be so tight that it cuts off your circulation, but merely a true wrist size without slack.</li><li>Mark this exact length on your string and use a ruler to determine your true wrist size. Order this exact wrist size when checking out, and you are good to go!</li></ol></p><h6>Side Notes</h6><p>If you are in-between sizes, round down to the nearest size. Please remember not to compensate for slack as we do that here in-house based on your true size. Lastly, if you have any questions for our team please shoot us an email at <a href=mailto: customerservice@survivalstraps.com>customerservice@survivalstraps.com</a> or give us a ring at 1-800-971-3360 and we will gladly walk through the steps with you.</p><img width=529 height=487 src=https://s3.amazonaws.com/sstrapfiles/staticresources/sizing_chart.jpg></div></div>"
    }, {
      "title": "Wide Survival Bracelet™",
      "price": "32.99",
      "tags": "paracord, wide",
      "img": "wide",
      "description": "<h4>Product Information</h4><div><ul><li>The WIDE Survival Bracelet&trade; is expedition ready, super stylish and the size to get if you are looking for the maximum cordage to carry. This bracelet is huge!</li><li>Contains up to 24' of super strong, AUTHENTIC, 550 test military spec paracord. This is not the same paracord you see sold in most stores. This is the same cordage used to rig military parachutes. It is the real deal.</li><li>In an emergency, unravel the bracelet to deploy the paracord for your use. Make a tourniquet. Tie down a piece of equipment. Use it in however you need it.</li><li>If you use it in an emergency, we'll replace it for free in exchange for your story and the rights to publish it. All you pay is shipping.</li><li>The stainless closure is a load bearing marine grade stainless steel shackle that adjusts on your wrist and is guaranteed to never rust or break.</li><li>The nylon 6-6 closure contains no metal and is made of nylon. It is super tough, black and stealth. It also adjusts on your wrist.</li><li>Logo - If one of our logo products is chosen, the logos themselves are as tough as the rest of the bracelet. They will not scratch, rust, fade or show fingerprints.</li><li>Logo tag - The dog tag will match the closure chosen. If a stainless closure is chosen, the logo dog tag will be stainless. If a nylon 6-6 closure is chosen, the dog tag will be black nylon 6-6.</li><li>A break-away safety feature is included with every bracelet. If your bracelet gets hung up on something, it will break away from your wrist.</li><li>All our products are completely waterproof. They will not fade, mildew or rot.</li><li>Hand wash with warm water and soap or detergent.</li><li>Made in America!</li></ul></div><div class=gt-accordion><h4>Closure Types</h4><div><img src=https://s3.amazonaws.com/sstrapfiles/staticresources/closures/full.jpg></div><h4>Get the Perfect Size</h4><div><p>Here at Survival Straps&trade; we custom build each piece of gear based on your exact wrist measurement. We want the size of your wrist, not the length you would like the bracelet.We ask that you follow these 3 steps closely:<ol><li>Take a tape measure, string, or scotch tape and wrap it around your wrist to where the two ends touch and there isn't any slack. Keep in mind this doesn't need to be so tight that it cuts off your circulation, but merely a true wrist size without slack.</li><li>Mark this exact length on your string and use a ruler to determine your true wrist size. Order this exact wrist size when checking out, and you are good to go!</li></ol></p><h6>Side Notes</h6><p>If you are in-between sizes, round down to the nearest size. Please remember not to compensate for slack as we do that here in-house based on your true size. Lastly, if you have any questions for our team please shoot us an email at <a href=mailto: customerservice@survivalstraps.com>customerservice@survivalstraps.com</a> or give us a ring at 1-800-971-3360 and we will gladly walk through the steps with you.</p><img width=529 height=487 src=https://s3.amazonaws.com/sstrapfiles/staticresources/sizing_chart.jpg></div></div>"
    }, {
      "title": "Key Fob",
      "price": "19.95",
      "tags": "paracord, fob",
      "img": "fob",
      "description": "<h4>Product Information</h4><div><ul><li>Contains up to 6' of super strong, AUTHENTIC, 550 test military spec paracord. This is not the same paracord you see sold in most stores. This is the same cordage used to rig military parachutes. It is the real deal.</li><li>In an emergency, unravel to deploy the paracord for your use. Make a tourniquet. Tie down a piece of equipment. Use it in however you need it.</li><li>If you use it in an emergency, we'll replace it for free in exchange for your story and the rights to publish it. All you pay is shipping.</li><li>Built with a small ring embedded in one end. A 1” key ring is included and attached to this. Allows the key fob to sit flat while in a pocket.</li><li>The logo is affixed to a stainless military dog tag. It will not rust, fade or scratch. It is made to last.</li><li>Made in America.</li></ul></div>"
    }, {
      "title": "Gear Tag",
      "price": "12.95",
      "tags": "paracord, geartag",
      "img": "geartag",
      "description": "<h4>Product Information</h4><div><ul><li>Great as a luggage tag but very cool to hang on your backpack, briefcase, range bag, golf bag, purse or whatever. It is a great way to have your bag stand out from all the others.</li><li>Contains up to 3' of super strong, AUTHENTIC, 550 test military spec paracord. This is not the same paracord you see sold in most stores. This is the same cordage used to rig military parachutes. It is the real deal.</li><li>In an emergency, unravel to deploy the paracord for your use. Make a tourniquet. Tie down a piece of equipment. Use it in however you need it.</li><li>If you use it in an emergency, we'll replace it for free in exchange for your story and the rights to publish it. All you pay is shipping.</li><li>The logo is affixed to a stainless military dog tag. It will not rust, fade or scratch. It is made to last. </li><li>Made in America.</li></ul></div>"
    }, {
      "title": "Neck ID Lanyard",
      "price": "21.95",
      "tags": "paracord, neckid",
      "img": "neckid",
      "description": "<h4>Product Information</h4><div><ul><li>Contains up to 7' of super strong, AUTHENTIC, 550 test military spec paracord. This is not the same paracord you see sold in most stores. This is the same cordage used to rig military parachutes. It is the real deal. </li><li>In an emergency, unravel to deploy the paracord for your use. Make a tourniquet. Tie down a piece of equipment. Use it in however you need it. </li><li>If you use it in an emergency, we'll replace it for free in exchange for your story and the rights to publish it. All you pay is shipping. </li><li>Fully adjustable. Wear your ID or badge as high or low as you would like.  </li><li>Built with a small swivel clip to attach your keys, ID, or badge. </li><li>The logo is affixed to a stainless military dog tag. It will not rust, fade or scratch. It is made to last.  </li><li>Made in America.</li></ul></div>"
    }, {
      "title": "Necklace",
      "price": "29.95",
      "tags": "paracord, necklace",
      "img": "necklace",
      "description": "<h4>More Product Information</h4><div><p>The Survival Straps® Necklace is the perfect way to show off one of our great military-style dog tags around your neck. We make them standard with a light duty shackle attached. They carry approximately 12' of paracord and you have the choice of either 21 or 24 in length. The dog tag is free floating on a stainless ring.</p></div><div class=gt-accordion><h4>Closure Styles</h4><div><img src=https://s3.amazonaws.com/sstrapfiles/staticresources/necklace_closure.jpg></div></div>"
    }, {
      "title": "Neck Cord",
      "price": "14.95",
      "tags": "paracord, neckcord",
      "img": "neckcord",
      "description": "<h4>More Product Information</h4><div><p>The Survival Straps® Neck Cord is the perfect way to have a piece of paracord handy, and a great way to show what is important to you. We make them standard with a breakaway attachment for safety. They are 26'' in total length. We affix the logo to a stainless steel military spec dog tag that is made to last. It will not rust, scratch, or show fingerprints.</p></div>"
    }
  ];

  // Now that we've got the products set up, you can apply common rules for the rest
  for (i = 0; i < products.length; i++){
    products[i].productName = products[i].title + " - " + title;
    products[i].collection = collection;
    products[i].vendor = vendor;
    products[i].sku = sku;
    products[i].slug = convertURL(products[i].productName);
    products[i].img = aws + products[i].img + ".jpg";
    sku++;
  }

  return products;

};



//  Results

var Products = function() {
  var collections = [
  {
    "name": "Team RWB Black",
    "vendor": "Team RWB",
    "sku": 201600000000350,
    "s3": "https://s3.amazonaws.com/dev-ukyrgf/shopify/team-rwb/rwb-black/"
  },
  {
    "name": "Team RWB Lt. OD Green",
    "vendor": "Team RWB",
    "sku": 201600000000360,
    "s3": "https://s3.amazonaws.com/dev-ukyrgf/shopify/team-rwb/rwb-lt-od-green/"
  },
  {
    "name": "Team RWB White Tag",
    "vendor": "Team RWB",
    "sku": 201600000000370,
    "s3": "https://s3.amazonaws.com/dev-ukyrgf/shopify/team-rwb/rwb-white-tag/"
  },
  {
    "name": "Team RWB Red Tag",
    "vendor": "Team RWB",
    "sku": 201600000000380,
    "s3": "https://s3.amazonaws.com/dev-ukyrgf/shopify/team-rwb/rwb-red-tag/"
  }];

  var csv = [];

  for (c = 0; c < collections.length; c++) {
    csv.push(Collection(collections[c].name, collections[c].vendor, collections[c].vendor, collections[c].sku, collections[c].s3));
  }

  return csv;
};


// Create all of our product objects
var products = Products();

// Get the textarea element from index.html
var textArea = document.getElementById('output');

// var header = "Handle,Title,Body (HTML),Vendor,Type,Tags,Published,Option1 Name,Option1 Value,Option2 Name,Option2 Value,Option3 Name,Option3 Value,Variant SKU,Variant Grams,Variant Inventory Tracker,Variant Inventory Qty,Variant Inventory Policy,Variant Fulfillment Service,Variant Price,Variant Compare At Price,Variant Requires Shipping,Variant Taxable,Variant Barcode,Image Src,Image Alt Text,Gift Card,Google Shopping / MPN,Google Shopping / Age Group,Google Shopping / Gender,Google Shopping / Google Product Category,SEO Title,SEO Description,Google Shopping / AdWords Grouping,Google Shopping / AdWords Labels,Google Shopping / Condition,Google Shopping / Custom Product,Google Shopping / Custom Label 0,Google Shopping / Custom Label 1,Google Shopping / Custom Label 2,Google Shopping / Custom Label 3,Google Shopping / Custom Label 4,Variant Image,Variant Weight Unit\n";

for (v = 0; v < products.length; v++) {
  for (a = 0; a < products[v].length; a++) {
    console.log(products[v][a].title);

    var details = products[v][a].slug + "," +
                  products[v][a].productName + ",\"" +
                  products[v][a].description + "\"" +
                  products[v][a].vendor + "," +
                  products[v][a].collection + "," +
                  products[v][a].tags + ",FALSE,Title,Default Title,,,,,"  +
                  products[v][a].sku + ",0,,1,deny,manual," + 
                  products[v][a].price + ",,TRUE,TRUE,,,,FALSE,,,,,,,,,,,,,,,,,lb\n";
    var images =  products[v][a].slug + ",,,,,,,,,,,,,,,,,,,,,,,," +
                  products[v][a].img + ",,,,,,,,,,,,,,,,,,,\n";

    var newText = document.createTextNode(details + images);
    textArea.appendChild(newText);
  }
}

