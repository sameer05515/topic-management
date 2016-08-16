//updateTopicController

app.controller('updateTopicController', function($scope,$http,$location,$routeParams,zettaAppConfig) {

  $scope.topicObj={"title":"my title","description":""};
  
  $scope.fetchTopicObj=function(){	  
	  var urrrlll=zettaAppConfig.restServices+"/topics";
		$http(
				{
					method : 'GET',					
					url :urrrlll+"/"+$routeParams.id
				})
				.success(function(data) {
					//alert("Success : "+data);
					$scope.topicObj=data;
				}).error(function(data) {
					alert("Error : "+data);
				});	  
  };
  
  $scope.updateTopicObj=function(){
	  var urrrlll=zettaAppConfig.restServices+"/topics";
		$http(
				{
					method : 'PUT',					
					url :urrrlll,
					data: $scope.topicObj
				})
				.success(function(data) {
					//alert("Success : "+data.message);					
					$location.path('/topics-list/'+$routeParams.id);
				}).error(function(data) {							
					alert("Error : "+data.message);
				});
	  //////////////////
	  
  };
  
  
  $scope.fetchTopicObj();
  
  

});
