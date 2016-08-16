//createGroupController

app.controller('createGroupController', function($scope,$http,$location,zettaAppConfig) {

  $scope.groupObj={"title":"","description":""};
  
  $scope.saveGroupObj=function(){
	  
	  var urrrlll=zettaAppConfig.restServices+"/groups";
		$http(
				{
					method : 'POST',					
					url :urrrlll,					
					data : $scope.groupObj				
				})
				.success(function(data) {					
					//alert("Success : "+data.message);
					$location.path('/groups-list');
				})
				.error(function(data,status) { 
					alert("Error : "+data.message +"status"+data.status);
				});
  };

});
