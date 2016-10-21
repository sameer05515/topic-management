//viewAllTopicsController-list

app.controller('viewAllTopicsController-list', function($scope,$http,zettaAppConfig) {
	
	var counter=1;
	$scope.topic={};

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
  
  
  $scope.fetchTopicList();
  
  ////////////////////////
  $scope.propertyName = 'dateLastModified';
  $scope.reverse = true;
  //$scope.friends = friends;

  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };
  
  
  

});
