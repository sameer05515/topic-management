//createTopicController

app.controller('createTopicController', function($scope,$http,$location,topicMgmtAppConfig) {

  $scope.topicObj={"title":"","description":"", "personal":"false"};
  
  $scope.saveTopicObj=function(){
	  
	  var urrrlll=topicMgmtAppConfig.restServices+"/topics";
		$http(
				{
					method : 'POST',					
					url :urrrlll,					
					data : $scope.topicObj				
				})
				.success(function(data) {					
					//alert("Success : "+data.message);
					$location.path('/topics-list');
				})
				.error(function(data,status) { 
					alert("Error : "+data.message +"status"+data.status);
				});
  };

});
