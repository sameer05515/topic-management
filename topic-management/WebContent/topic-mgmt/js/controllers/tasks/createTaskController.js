//createTaskController

app.controller('createTaskController', function($scope, $http, $location,
		$log, topicMgmtAppConfig,TopicManagementServices) {

	$scope.topicObj = {
		"title":"",
		"environment":"",
		"taskDescription" : "",
		"frequency" : "",
		"activityType" : "",
		"box" : "",
		"sequence":"",
		"remarks":"",
		"routineScheduleDescription":"",
		"status":"",
		"scheduleDate":"",
		"endDate":"",
		"performedBy":"",
		"taskPriorityGroup":"",
		"nextOccurance":"",
		"highestPoint":"",
		"pointsEarnedToday":"",
		"whatIfNotDoing":"",
		"rating":1
	};

	var initialTopicObj = {};
	
	$scope.maxRatingValue=TopicManagementServices.maxTopicMgmtRatingValue;

	$scope.isDirty = function() {
		// do your logic and return 'true' to display the prompt, or 'false'
		// otherwise.

		var isThereSomeChange = !angular.equals(initialTopicObj,
				$scope.topicObj);
		$log.log("--Comparing data to check if there is any change?");
		$log.log("$scope.groupObj : " + angular.toJson($scope.topicObj));
		$log.log("initialGroupObj : " + angular.toJson(initialTopicObj));
		$log.log("isThereSomeChange : " + isThereSomeChange);
		// return isThereSomeChange;
		// return angular.equals(initialTopicObj, $scope.topicObj);
		return true;
	};

	$scope.saveTopicObj = function() {
		
		$log.log("going to save topic : " + angular.toJson($scope.topicObj));

		var urrrlll = topicMgmtAppConfig.taskMgmtService + "/tasks";
		$http({
			method : 'POST',
			url : urrrlll,
			data : $scope.topicObj
		}).success(function(data) {
			// alert("Success : "+data.message);
			
			TopicManagementServices.saveTopicReads(data.new_topic_id);
//			.success(function(data) {
//				// alert("Success : "+data);
//				//$scope.topicsReads = data;
//				//$scope.fetchTopicReads();
//			// $scope.sortBy($scope.propertyName);
//			})
//			.error(function(data) {
//				alert("Error : " + data);
//			});
			
			$location.path('/tasks-list');
		}).error(function(data, status) {
			alert("Error : " + data );
		});
	};
	
	$scope.getSelectedRating = function (rating) {
        console.log(rating);
    };

});
