//updateTopicController

app.controller('updateTopicController', function($scope,$http,$location,$routeParams,zettaAppConfig) {

  $scope.topicObj={"title":"my title","description":"" , "personal":"false"};
  
  $scope.fetchTopicObj=function(){	  
	  var urrrlll=zettaAppConfig.restServices+"/topics";
		$http(
				{
					method : 'GET',					
					url :urrrlll+"/"+$routeParams.id
				})
				.success(function(data) {
					//alert(angular.toJson(data));
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
					//alert($scope.topicObj.personal);					
					$location.path('/topics-list/'+$routeParams.id);
				}).error(function(data) {							
					alert("Error : "+data.message);
				});
	  //////////////////
	  
  };
  
  
  $scope.fetchTopicObj();
  
  

});
