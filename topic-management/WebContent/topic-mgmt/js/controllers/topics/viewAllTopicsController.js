//viewAllTopicsController

app.controller('viewAllTopicsController', function($scope,$http,zettaAppConfig) {

  $scope.topicObj={"title":"my title","description":""};  
  $scope.topicsList=[];  
  $scope.fetchTopicList=function(){	 
			var urrrlll=zettaAppConfig.restServices+"/topics";
			$http(
				{
					method : 'GET',
					url :urrrlll
				})
				.success(function(data) {
					//alert("Success : "+data);
					$scope.topicsList=data;
				})
				.error(
				function(data) {
					alert("Error : "+data);
				});	 	  
		  };
  
  
  $scope.fetchTopicList();

});
