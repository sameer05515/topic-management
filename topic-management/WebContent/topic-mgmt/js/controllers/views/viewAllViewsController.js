//viewAllViewsController

app.controller('viewAllViewsController', function($scope,$http,zettaAppConfig) {

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
				})
				.error(
				function(data) {
					alert("Error : "+data);
				});	 	  
		  };
  
  
  $scope.fetchViewList();

});
