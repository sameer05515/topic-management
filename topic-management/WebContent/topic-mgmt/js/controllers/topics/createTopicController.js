//createTopicController

app.controller('createTopicController', function($scope,$http,$location,zettaAppConfig) {

  $scope.topicObj={"title":"","description":""};
  
  $scope.saveTopicObj=function(){
	  
	  var urrrlll=zettaAppConfig.restServices+"/topics";
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
