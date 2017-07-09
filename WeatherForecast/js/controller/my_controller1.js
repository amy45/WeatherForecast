'use strict';

define(function () {
    return ['$scope','$http', function ($scope,$http) {
    	
    	 $scope.currentPage = 0;
    	    $scope.pageSize = 10;
    	   
    	    $scope.formatNumber = function(i) {
    	    	var temp=(( i - 273.15) * 9/5) + 32
    	    	
    	    	return Math.round(temp * 100)/100; 
    	    }
    	
    	 $http.get("http://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1")
    	    .then(function(response) {
    	        $scope.myWelcome = response.data.list;
    	        $scope.city = response.data.city.name;
    	        if(true){
    	        	
    	        }
    	        else{
    	        $scope.data=$scope.myWelcome;
    	      //  alert($scope.myWelcome);
    	        }
    	        });

    	 $scope.numberOfPages=function(int fix1,int fix2){
    	        return Math.ceil($scope.myWelcome.length/$scope.pageSize);                
    	    }
    	
    	
    }];
});
