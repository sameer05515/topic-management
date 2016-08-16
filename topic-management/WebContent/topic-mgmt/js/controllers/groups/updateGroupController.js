//updateGroupController

app.controller('updateGroupController', function($scope,$http,$location,$routeParams,zettaAppConfig) {

  $scope.groupObj={"title":"my title","description":""};
  
  $scope.fetchGroupObj=function(){	  
	  var urrrlll=zettaAppConfig.restServices+"/groups";
		$http(
				{
					method : 'GET',					
					url :urrrlll+"/"+$routeParams.id
				})
				.success(function(data) {
					//alert("Success : "+data);
					$scope.groupObj=data;
				}).error(function(data) {
					alert("Error : "+data);
				});	  
  };
  
  $scope.updateGroupObj=function(){
	  var urrrlll=zettaAppConfig.restServices+"/groups";
		$http(
				{
					method : 'PUT',					
					url :urrrlll,
					data: $scope.groupObj
				})
				.success(function(data) {
					//alert("Success : "+data.message);					
					$location.path('/groups-list/'+$routeParams.id);
				}).error(function(data) {							
					alert("Error : "+data.message);
				});
	  //////////////////
	  
  };
  
  
  $scope.fetchGroupObj();
  
  

});
