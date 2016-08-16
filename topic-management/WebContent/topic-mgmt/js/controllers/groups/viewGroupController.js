//viewGroupController-list

app.controller('viewGroupController', function($scope,$http,$location,$routeParams,zettaAppConfig) {
	
	$scope.group={};
	
	///////////////////////////////////////////////
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
						$scope.group=$scope.groupObj;
					}).error(function(data) {
						alert("Error : "+data);
					});	  
	  };
	/////////////////////////////////////////////////
	
	var counter=1;
	

  $scope.groupObj={"title":"my title","description":""};  
  $scope.groupsList={};  
  $scope.fetchGroupList=function(){	 
			var urrrlll=zettaAppConfig.restServices+"/groups";
			$http(
				{
					method : 'GET',
					url :urrrlll
				})
				.success(function(data) {
					//alert("Success : "+data);
					$scope.groupsList=data;
					
					$scope.next();
				})
				.error(
				function(data) {
					alert("Error : "+data);
				});	 	  
		  };
		  
	$scope.next=function(){
		$scope.group=$scope.groupsList[counter];
		counter=(counter>=$scope.groupsList.length-1)?0:(counter+1);
		
	};
	
	$scope.previous=function(){
		$scope.group=$scope.groupsList[counter];
		counter=(counter==0)?($scope.groupsList.length-1):(counter-1);
		
	};
  
  
  $scope.fetchGroupObj();
  
  
  
  

});
