app.factory('TopicManagementServices', [
		'$http',
		'$routeParams',
		'zettaAppConfig',
		function($http, $routeParams, zettaAppConfig) {

			var TopicManagementServices = {};

			TopicManagementServices.getStudents = function(a, b) {

				return a + b;
			};

			TopicManagementServices.fetchGroupList = function() {

				return $http.get(zettaAppConfig.restServices + "/groups");
			};

			TopicManagementServices.fetchTopicList = function() {

				return $http.get(zettaAppConfig.restServices + "/topics");
			};

			TopicManagementServices.fetchTopicObj = function(topicId) {

				return $http.get(zettaAppConfig.restServices + "/topics" + "/"
						+ topicId);
			};

			TopicManagementServices.saveTopicGroupRelationList = function(
					topicGroupRelationResource) {

				var req = {
					method : 'POST',
					url : zettaAppConfig.restServices + "/tgservices",
					headers : {
						'Content-Type' : 'application/json'
					},
					data : angular.fromJson(topicGroupRelationResource)
				};

				return $http(req);
			};

			TopicManagementServices.fetchTopicGroupRelationList = function(
					topicGroupRelationResource) {

				var req = {
					method : 'GET',
					url : zettaAppConfig.restServices + "/tgservices/topics",
					headers : {
						'Content-Type' : 'application/json'
					},
					params : angular.fromJson(topicGroupRelationResource)
				};

				return $http(req);
			};

			/*
			 * $http.get('/someUrl', config).then(successCallback,
			 * errorCallback);
			 * 
			 * $http.post('/someUrl', data, config).then(successCallback,
			 * errorCallback);
			 */

			/**
			 * var req = { method: 'POST', url: 'http://example.com', headers: {
			 * 'Content-Type': undefined }, data: { test: 'test' } }
			 * 
			 * $http(req).then(function(){...}, function(){...});
			 */

			TopicManagementServices.next = function(list, counter) {
				// $scope.topic=list[counter];
				counter = (counter >= list.length - 1) ? 0 : (counter + 1);
				return counter;

			};

			TopicManagementServices.previous = function(list, counter) {
				// $scope.topic=$scope.topicsList[counter];
				counter = (counter == 0) ? (list.length - 1) : (counter - 1);
				return counter;

			};

			return TopicManagementServices;

		} ]);