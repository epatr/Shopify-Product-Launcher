var Collection = function() {

  var products = [ {
      "title": "Regular Survival Bracelet™",
      "price": "29.99",
      "tags": "",
      "description": ""
    }, {
      "title": "Light Duty Survival Bracelet™",
      "price": "29.99",
      "tags": "",
      "description": ""
    }, {
      "title": "Wide Survival Bracelet™",
      "price": "32.99",
      "tags": "",
      "description": ""
    }, {
      "title": "Key Fob",
      "price": "19.95",
      "tags": "",
      "description": ""
    }, {
      "title": "Gear Tag",
      "price": "12.95",
      "tags": "",
      "description": ""
    }, {
      "title": "Neck ID Lanyard",
      "price": "21.95",
      "tags": "",
      "description": ""
    }, {
      "title": "Necklace",
      "price": "29.95",
      "tags": "",
      "description": ""
    }, {
      "title": "Neck Cord",
      "price": "14.95",
      "tags": "",
      "description": ""
    }
  ];
};

var convertURL = function(text) {
  return text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
};