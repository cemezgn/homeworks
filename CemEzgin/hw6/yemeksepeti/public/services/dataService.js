angular.module('foodDeliveryApp')
    .factory('DataService', dataService);

function dataService($http) {
    return {
        getRestaurantList: getRestaurantList,
        getFoods: getFoods,
        getOrders: getOrders,
        postOrder: postOrder,
        getOrderDetail: getOrderDetail,
        getOldOrders: getOldOrders
    }

    function getRestaurantList(callback, errorCallback) {
        $http({
            method: 'GET',
            url: '/api/restaurant'
        }).then(function (response) {
            callback && callback(response.data);
        }, function (error) {
            errorCallback && errorCallback(error);
        });
    }

    function getFoods(restaurantId, callback, errorCallback) {
        $http({
            method: 'GET',
            url: '/api/restaurant/' + restaurantId
        }).then(function (response) {
            callback && callback(response.data);
        }, function (error) {
            errorCallback && errorCallback(error)
        });
    }

    function getOrders(callback, errorCallback) {
        $http({
            method: 'GET',
            url: '/api/order'
        }).then(
            function (response) {
                callback && callback(response.data);
            }, function (response) {
                errorCallback && errorCallback(response)
            });
    }

    function getOldOrders(callback, errorCallback) {
        $http({
            method: 'GET',
            url: '/api/order'
        }).then(
            function (response) {
                callback && callback(response.data);
            }, function (response) {
                errorCallback && errorCallback(response)
            });
    }

    function getOrderDetail(orderId, callback, errorCallback) {
        $http({
            method: 'GET',
            url: '/api/order/' + orderId
        }).then(
            function (response) {
                callback && callback(response.data);
            }, function (response) {
                errorCallback && errorCallback(response)
            });
    }

    function postOrder(order, restaurantId, callback, errorCallback) {
        $http.post('/api/order', {items: order, restaurantId: restaurantId})
            .then(function (response) {
                callback && callback(response.data);
            }, function (error) {
                errorCallback && errorCallback(error);
            });
    }
}
