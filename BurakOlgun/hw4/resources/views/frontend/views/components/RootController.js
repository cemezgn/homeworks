angular
    .module('foodBoxApp')
    .controller('rootController' , rootController);
function rootController($scope, $rootScope) {
    $scope.tab1 = true;
    $scope.tab2 = false;
    $scope.tab3 = false;
    $scope.tab4 = false;
    $scope.foods = [];

    var rootBasket = [];


    $scope.goesToRootBasket = function (food) {
      rootBasket.push({'id': food.id,
                       'name': food.name,
                       'price': food.price,
                       'quantity': 1
                      });
      $rootScope.$broadcast('baskedChanged',rootBasket);
    };

    $scope.navFalser = function (tab) {
        $scope.tab1 = false;
        $scope.tab2 = false;
        $scope.tab3 = false;
        $scope.tab4 = false;
        if(tab === 'tab1') {
            $scope.tab1 = true;
        } else if (tab === 'tab2') {
            $scope.tab2 = true;
        } else if (tab === 'tab3') {
            $scope.tab3 = true;
        } else if (tab === 'tab4') {
            $scope.tab4 = true;
        }
    };
}