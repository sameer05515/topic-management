//viewAllTopicsController

app
		.controller(
				'showAllTopicsController',
				function($scope, $http, zettaAppConfig) {

					$scope.topicObj = {
						"title" : "my title",
						"description" : ""
					};
					$scope.topicsList = [];
					$scope.topic = {};
					var counter = 1;
					$scope.filteredItems=[];
					$scope.showList=false;

					$scope.fetchTopicList = function() {
						var urrrlll = zettaAppConfig.restServices + "/topics";
						$http({
							method : 'GET',
							url : urrrlll
						}).success(function(data) {
							// alert("Success : "+data);
							$scope.topicsList = data;
							//$scope.sortBy($scope.propertyName);
						}).error(function(data) {
							alert("Error : " + data);
						});
					};

					$scope.showAt = function(indexVal) {
						counter = indexVal;
						$scope.topic = $scope.filteredItems[counter];
						counter = (counter >= $scope.filteredItems.length - 1) ? 0
								: (counter + 1);
					};

					$scope.next = function() {
						$scope.topic = $scope.filteredItems[counter];
						counter = (counter >= $scope.filteredItems.length - 1) ? 0
								: (counter + 1);

					};

					$scope.previous = function() {
						$scope.topic = $scope.filteredItems[counter];
						counter = (counter == 0) ? ($scope.filteredItems.length - 1)
								: (counter - 1);

					};

					// //////////////////////
					$scope.propertyName = 'dateLastModified';
					$scope.reverse = true;
					// $scope.friends = friends;

					$scope.sortBy = function(propertyName) {
						$scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse
								: false;
						$scope.propertyName = propertyName;
						
						$scope.showAt(1);
					};

					$scope.init = function() {
						$scope.fetchTopicList();
					};

					$scope.init();

				});
