//createViewController

app.controller('createViewController', function($scope,$http,$location,topicMgmtAppConfig) {

  $scope.viewObj={"title":"","description":""};
  
  $scope.saveViewObj=function(){
	  
	  var urrrlll=topicMgmtAppConfig.restServices+"/views";
		$http(
				{
					method : 'POST',					
					url :urrrlll,					
					data : $scope.viewObj				
				})
				.success(function(data) {					
					//alert("Success : "+data.message);
					$location.path('/views-list');
				})
				.error(function(data,status) { 
					alert("Error : "+data.message +"status"+data.status);
				});
  };

});
