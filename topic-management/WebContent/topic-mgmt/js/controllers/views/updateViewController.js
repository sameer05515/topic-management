//updateViewController

app.controller('updateViewController', function($scope,$http,$location,$routeParams,zettaAppConfig) {

  $scope.viewObj={"title":"my title","description":""};
  
  $scope.fetchViewObj=function(){	  
	  var urrrlll=zettaAppConfig.restServices+"/views";
		$http(
				{
					method : 'GET',					
					url :urrrlll+"/"+$routeParams.id
				})
				.success(function(data) {
					//alert("Success : "+data);
					$scope.viewObj=data;
				}).error(function(data) {
					alert("Error : "+data);
				});	  
  };
  
  $scope.updateViewObj=function(){
	  var urrrlll=zettaAppConfig.restServices+"/views";
		$http(
				{
					method : 'PUT',					
					url :urrrlll,
					data: $scope.viewObj
				})
				.success(function(data) {
					//alert("Success : "+data.message);					
					$location.path('/views-list/'+$routeParams.id);
				}).error(function(data) {							
					alert("Error : "+data.message);
				});
	  //////////////////
	  
  };
  
  
  $scope.fetchViewObj();
  
  

});
