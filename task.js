var services = {
    "стрижка": "60грн",
    "гоління": "80грн",
    "миття голови": "100грн"
  };
  
  services["розбите скло"] = "200грн";
  
  var serviceUtils = {
    getPrices: function() {
      return Object.values(services).map(function(value) {
        return parseInt(value); 
      });
    },
  
    price: function() {
      var prices = this.getPrices();
      var total = 0;
      for (var i = 0; i < prices.length; i++) {
        total += prices[i];
      }
      return total;
    },
  
    minPrice: function() {
      var prices = this.getPrices();
      return Math.min.apply(null, prices);
    },
  
    maxPrice: function() {
      var prices = this.getPrices();
      return Math.max.apply(null, prices);
    }
  };
  
  console.log("Загальна вартість: " + serviceUtils.price() + "грн");
  console.log("Мінімальна ціна: " + serviceUtils.minPrice() + "грн");
  console.log("Максимальна ціна: " + serviceUtils.maxPrice() + "грн");