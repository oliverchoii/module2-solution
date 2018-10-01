(function () {
  'use strict';





  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);



  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyItem = this;
    toBuyItem.toBuyList = ShoppingListCheckOffService.getToBuyList();

    toBuyItem.moveItemToBoughtList = function (itemIdex) {
        ShoppingListCheckOffService.moveItemToBoughtList(itemIdex);
    }
  }



  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtItem = this;
    boughtItem.boughtList = ShoppingListCheckOffService.getboughtList();
  }



  function ShoppingListCheckOffService() {
  var service = this;

  var toBuyList = [
    {
      name: "FACEBOOK",
      quantity: "1000"
    },
    {
      name: "AMAZON",
      quantity: "2000"
    },
    {
      name: "APPLE",
      quantity: "3000"
    },
    {
      name: "NETFLIX",
      quantity: "4000"
    },
    {
      name: "GOOLGE",
      quantity: "5000"
    }
  ];

  var boughtList = [];

  //moveToBoughtList()

  /*
  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };
  */

  service.getToBuyList = function () {
    return toBuyList;
  };
  service.getboughtList = function () {
    return boughtList;
  };

  service.moveItemToBoughtList = function (itemIdex) {
    console.log(itemIdex);
    var item = {
        name: toBuyList[itemIdex].name,
        quantity: toBuyList[itemIdex].quantity
      };
      boughtList.push(item);
    toBuyList.splice(itemIdex, 1);
  };

}

})();
