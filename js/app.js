//var app = angular.module('app', ['ngRoute']);
//
//'use strict';
//
//angular.module('app')
var app = angular.module('mgcrea.ngStrapDocs', ['ngAnimate', 'ngSanitize', 'mgcrea.ngStrap','ngRoute']);

'use strict';

angular.module('mgcrea.ngStrapDocs')

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'login_page.html',
            controller: 'loginCtrl'
        })
        .when('/clientpage', {
            templateUrl: 'client_page.html',
            controller: 'clientpageCtrl'
        })
        .when('/clienpage/sales', {
            templateUrl: 'sales.html',
            controller: 'salesCtrl'
        })
        .when('/clienpage/mortality', {
            templateUrl: 'mortality.html',
            controller: 'mortalityCtrl'
        })
        .when('/clienpage/problems', {
            templateUrl: 'problems.html',
            controller: 'problemsCtrl'
        })
        .when('/clienpage/orders', {
            templateUrl: 'orders.html',
            controller: 'ordersCtrl'
        })
        .when('/clienpage/suggestions', {
            templateUrl: 'suggestions.html',
            controller: 'suggestionsCtrl'
        })
        .otherwise({
            redirectTo: '/404'
        });
    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: false
    //});
});

app.config(function($datepickerProvider) {
    angular.extend($datepickerProvider.defaults, {
        dateFormat: 'dd/MM/yyyy',
        startWeek: 1
    });
})

    app.controller('DatepickerDemoCtrl', function($scope, $http) {

        $scope.selectedDate = new Date();
        $scope.selectedDateAsNumber = Date.UTC(1986, 1, 22);
        // $scope.fromDate = new Date();
        // $scope.untilDate = new Date();
        $scope.getType = function (key) {
            return Object.prototype.toString.call($scope[key]);
        };

        $scope.clearDates = function () {
            $scope.selectedDate = null;
        }
    });


app.controller("loginCtrl", function($scope) {
    //var parol = $alert({
    //    title: "Невірний пароль",
    //    //content: 'Best check yo self, you\'re not looking too good.',
    //    //placement: 'top',
    //    type: 'danger',
    //    container : "#error_msg",
    //    duration : '3',
    //    show: false
    //
    //});
    $scope.logins = {}
    //$http.post("http://10.7.131.134/exampleService/PostWithZero/")
    //    .success(function (data) {
    //
    //        $scope.logins = JSON.parse(data);
    //        console.log($scope.logins);
    //    })
    //    .error(function (data)
    //    {
    //        $scope.error = "SUBMIT ERROR";
    //    });
    //$scope.login_submit = function(){
    //    var user_info = {Id:$scope.user_id, Pass:$scope.user_pass }
    //    $http.post("http://10.7.131.134/exampleService/UserRegistry/",user_info)
    //        .success(function (data) {
    //            console.log(user_info)
    //            console.log(data)
    //        })
    //        .error(function (data){
    //            console.log(user_info)
    //            console.log(data)
    //        });
    //}
    });
app.controller("clientpageCtrl", function($scope) {

    $scope.logins = {}

    });

app.controller("salesCtrl", function($scope) {
    $scope.sortType = 'name';
    $scope.sortReverse = false;
    $scope.searchFish = '';


    $scope.sushi = [
        {name: 'Cali Roll', fish: 'Crab', tastiness: 2},
        {name: 'Philly', fish: 'Tuna', tastiness: 4},
        {name: 'Tiger', fish: 'Eel', tastiness: 7},
        {name: 'Rainbow', fish: 'Variety', tastiness: 6}
    ];
    $scope.sales = {}

    });
app.controller("mortalityCtrl", function($scope) {
    $scope.sortType = 'articul';
    $scope.sortReverse = false;
    $scope.searchFish = '';


    $scope.mortalitys = [
        {articul: 'Cali Roll', name: 'Crab',type:1, count: 2},
        {articul: 'Philly', name: 'Tuna',type:1, count: 4},
        {articul: 'Tiger', name: 'Eel', type:1,count: 7},
        {articul: 'Rainbow', name: 'Variety',type:1, count: 6}
    ];
    $scope.addRow = function(){
        $scope.mortalitys.push({ 'articul':$scope.articul, 'name': $scope.name,'type':$scope.type, 'count':$scope.count });
        $scope.name='';
        $scope.type='';
        $scope.articul='';
        $scope.count='';
    };
    //$scope.mortalitys = {}

    });
app.controller("problemsCtrl", function($scope) {

    $scope.problems = {}

    });
app.controller("ordersCtrl", function($scope) {

    $scope.orders = {}

    });
app.controller("suggestionsCtrl", function($scope) {

    $scope.suggestions = {}

    });
