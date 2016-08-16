//viewAllViewsController-list

app.controller('viewAllViewsController-list', function($scope,$http,zettaAppConfig) {
	
	var counter=1;
	$scope.view={};

  $scope.viewObj={"title":"my title","description":""};  
  $scope.viewsList={};  
  $scope.fetchViewList=function(){	 
			var urrrlll=zettaAppConfig.restServices+"/views";
			$http(
				{
					method : 'GET',
					url :urrrlll
				})
				.success(function(data) {
					//alert("Success : "+data);
					$scope.viewsList=data;
					
					$scope.next();
				})
				.error(
				function(data) {
					alert("Error : "+data);
				});	 	  
		  };
		  
	$scope.next=function(){
		$scope.view=$scope.viewsList[counter];
		counter=(counter>=$scope.viewsList.length-1)?0:(counter+1);
		
	};
	
	$scope.previous=function(){
		$scope.view=$scope.viewsList[counter];
		counter=(counter==0)?($scope.viewsList.length-1):(counter-1);
		
	};
  
  
  $scope.fetchViewList();
  
  
  
  

});
