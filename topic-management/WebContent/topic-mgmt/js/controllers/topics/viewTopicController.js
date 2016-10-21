//viewTopicController-list

app
		.controller(
				'viewTopicController',
				function($scope/* , $http */, $log, $location, $routeParams,
						zettaAppConfig, TopicManagementServices) {

					/** Variable Declaration start */
					$scope.topic = {};

					$scope.topicObj = {
						"title" : "my title",
						"description" : ""
					};

					var counter = 1;

					$scope.topicObj = {
						"title" : "my title",
						"description" : ""
					};
					$scope.topicsList = [];

					$scope.groupsList = [];

					$scope.checked_groups = [];
					/** Variable Declaration end ################################ */

					/** ##################################################################################################### */

					/** Method Declaration start */

					$scope.fetchTopicObj = function() {

						TopicManagementServices.fetchTopicObj($routeParams.id)
								.success(function(data) {
									// $log.log("Success : "+data);
									$scope.topicObj = data;
									$scope.topic = $scope.topicObj;
								}).error(function(data) {
									$log.log("Error : " + data);
								});
					};

					$scope.fetchTopicList = function() {

						TopicManagementServices.fetchTopicList().success(
								function(data) {
									// $log.log("Success : "+data);
									$scope.topicsList = data;

									$scope.next();
								}).error(function(data) {
							$log.log("Error : " + data);
						});
					};

					$scope.next = function() {
						$scope.topic = $scope.topicsList[counter];
						counter = (counter >= $scope.topicsList.length - 1) ? 0
								: (counter + 1);

					};

					$scope.previous = function() {
						$scope.topic = $scope.topicsList[counter];
						counter = (counter == 0) ? ($scope.topicsList.length - 1)
								: (counter - 1);

					};

					$scope.fetchGroupList = function() {
						$scope.groupsList = [];
						TopicManagementServices.fetchGroupList().success(
								function(data) {
									$scope.groupsList = data;
									// $log.log(data);
								});
					};

					$scope.resetGroupsAndShowTopicGroupRelations = function() {
						$scope.groupsList = [];
						$scope.checked_groups = [];
					};

					$scope.fetchTopicGroupRelationList = function() {

						var topicGroupRelationResource = {};
						topicGroupRelationResource.id = [];
						// topicGroupRelationResource.groupIdList=[];

						topicGroupRelationResource.id.push($routeParams.id);

						TopicManagementServices
								.fetchTopicGroupRelationList(
										topicGroupRelationResource)
								.success(
										function(data) {
											$log.log("data : "
													+ angular.toJson(data));
											$log
													.log("successfully saved relations, now fetching will be started soon!!!");
										}).error(function(data) {

									$log.log("Error in saving relations!!!");
								});

					};

					$scope.saveTopicGroupRelationList = function() {

						if ($scope.checked_groups.length <= 0) {
							$log.log("Please select any group first!!!");
							return;
						}

						$log.log($scope.checked_groups + "");

						var topicGroupRelationResource = {};
						topicGroupRelationResource.topicIdList = [];
						topicGroupRelationResource.groupIdList = [];

						topicGroupRelationResource.topicIdList
								.push($routeParams.id);

						for (var i = 0; i < $scope.checked_groups.length; i++) {
							var objeee = angular
									.fromJson($scope.checked_groups[i]);
							$log.log("Vlaue is : " + objeee.id + "");
							topicGroupRelationResource.groupIdList
									.push(objeee.id);
						}

						$log.log(""
								+ angular.toJson(topicGroupRelationResource)
								+ "");

						TopicManagementServices
								.saveTopicGroupRelationList(
										topicGroupRelationResource)
								.success(
										function(data) {
											$log.log("data : "
													+ angular.toJson(data));
											$log
													.log("successfully saved relations, now fetching will be started soon!!!");
										}).error(function(data) {

									$log.log("Error in saving relations!!!");
								});

						// $log.log("Topic Group relations will be soon
						// saved!!!");

					};

					/** Method Declaration end ################################ */

					/** ##################################################################################################### */

					/** Initial Method start */

					$scope.fetchTopicObj();

					$scope.fetchTopicGroupRelationList();

					/** Initial Method end ################################ */

				});
