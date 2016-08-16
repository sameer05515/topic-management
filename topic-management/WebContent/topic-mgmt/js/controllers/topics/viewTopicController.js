//viewTopicController-list

app.controller('viewTopicController', function($scope,$http,$location,$routeParams,zettaAppConfig) {
	
	$scope.topic={};
	
	///////////////////////////////////////////////
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
						$scope.topic=$scope.topicObj;
					}).error(function(data) {
						alert("Error : "+data);
					});	  
	  };
	/////////////////////////////////////////////////
	
	var counter=1;
	

  $scope.topicObj={"title":"my title","description":""};  
  $scope.topicsList={};  
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
					
					$scope.next();
				})
				.error(
				function(data) {
					alert("Error : "+data);
				});	 	  
		  };
		  
	$scope.next=function(){
		$scope.topic=$scope.topicsList[counter];
		counter=(counter>=$scope.topicsList.length-1)?0:(counter+1);
		
	};
	
	$scope.previous=function(){
		$scope.topic=$scope.topicsList[counter];
		counter=(counter==0)?($scope.topicsList.length-1):(counter-1);
		
	};
  
  
  $scope.fetchTopicObj();
  
  
  
  

});
