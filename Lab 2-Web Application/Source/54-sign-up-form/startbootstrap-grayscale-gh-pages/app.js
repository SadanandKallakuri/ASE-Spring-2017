/**
 * Created by sadan on 1/31/2017.
 */

var app=angular.module("Weather",[]);
app.controller("Weathercontroller",function ($scope,$http) {
    $scope.weather = function () {
        var start = document.getElementById('origin-input').value;
        console.log(start);
        $http.get('http://api.openweathermap.org/data/2.5/weather?q='+start+'&appid=1920897eee7dbbbb21d4a710962e51bc').success(function (data) {
            console.log(5+6);
            $scope.tempe=data.main.temp;

            $scope.pressure=data.main.pressure;
            $scope.humidity=data.main.humidity;
            $scope.minTemp=data.main.temp_min;
            $scope.maxTemp=data.main.temp_max;
            $scope.windSpeed=data.wind.speed;
            $scope.visibility=data.visibility;
            $scope.icon=data.weather.main;




        })

        var end=document.getElementById('destination-input').value;
        console.log(end);
        $http.get('http://api.wunderground.com/api/e9e6428c0bb5f4e4/conditions/q/CA/San_Francisco.json').success(function (data) {

            console.log(5+9);
            $scope.tempEnd=data.main.temp;
            $scope.pressure=data.main.pressure;
            $scope.humidity=data.main.humidity;
            $scope.minTemp=data.main.temp_min;
            $scope.maxTemp=data.main.temp_max;
            $scope.windSpeed=data.wind.speed;
            $scope.visibility=data.visibility;
            $scope.icon=data.weather[0].icon.png;



        })
    }
})