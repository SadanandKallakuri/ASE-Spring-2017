/**
 * Created by sadan on 2/3/2017.
 */

var app=angular.module("Review",[]);
app.controller("Reviewcontroller",function ($scope,$http) {
    $scope.venueList = new Array();
    $scope.review = function () {
        var start = document.getElementById('txt_search').value;
        var end=document.getElementById('txt_searchFilter').value;

        console.log(start);
        $http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+start+'&key=AIzaSyD_B68_tYBrwpWg7XT5HiMnr0qwY49c8qI').success(function (data) {
            console.log(5 + 6);
            $scope.tempe = data.results[0].geometry.location.lat;
            $scope.tempe1 = data.results[0].geometry.location.lng;

            console.log($scope.tempe)

            $http.get('https://places.cit.api.here.com/places/v1/autosuggest?at='+$scope.tempe+','+$scope.tempe1+'&&q='+end+'&app_id=78ay9j5QxXesvvh8a8yn&app_code=F3gGhQy5ITquZbyKZcQhlg').success(function (data) {
                $scope.venueList=data.results[0].title;
                $scope.venueList1=data.results[1].title;
                $scope.venueList2=data.results[2].title;


                var callback = $http.get("http://gateway-a.watsonplatform.net/calls/text/TextGetTextSentiment" +
                    "?apikey=d0e7bf68cdda677938e6c186eaf2b755ef737cd8" +
                    "&outputMode=json&text=" + $scope.venueList);
                callback.success(function (data) {
                    if(data!=null && data.docSentiment!=null)
                    {
                        $scope.sentiment = {"reviewText" : $scope.venueList,
                            "sentiment":data.docSentiment.type,
                            "score":data.docSentiment.score,
                            "language":data.language};
                        document.getElementById('div_ReviewList').style.display = 'block';


                    }
                })


            })

        })
    }




})




