/* var app = angular.module('topicMgmtApp', ['pdf']); */
var app = angular.module('topicMgmtApp', ['ngRoute','ngAnimate','angularTrix','ngSanitize']);

/*app.constant("zettaAppConfig", {
		"serviceBase": "https://dev-api.zetta.concentrix.com:8443/ZettaUserProfileService/rest",
        "serviceBaseCoaching": "https://dev-api.zetta.concentrix.com:8443/ZettaCoachingService/coaching",
       "serviceBasePerformance":"https://dev-api.zetta.concentrix.com:8443/ZettaPerformanceService/performance",
       "serviceBaseKnowledge":"https://dev-api.zetta.concentrix.com:8443/ZettaKnowledgeService/knowledge",
       "serviceFileUpload":"https://dev-api.zetta.concentrix.com:8443/CommonFileUploadService/commonfileupload/filesystem",
       "serviceBaseQuiz" : "https://dev-api.zetta.concentrix.com:8443/ZettaQuizService/quiz",
       "serviceFileQuality":"https://dev-api.zetta.concentrix.com:8443/ZettaQualityService/quality",
       "serviceBaseNews": "https://dev-api.zetta.concentrix.com:8443/ZettaNewsService/news",
       "serviceBaseSurvey": "https://dev-api.zetta.concentrix.com:8443/ZettaSurveyService/survey",
       "appPath": "/ZettaUI/",
	   "restServices":"http://127.0.0.1:9999/RestServices/rest"
    });*/

app.constant("zettaAppConfig", {
   "restServices":"http://127.0.0.1:9999/RestServices/rest"
});

app.directive('checkList', function() {
	  return {
			scope: {
			  list: '=checkList',
			  value: '@'
			},
			link: function(scope, elem, attrs) {
			  var handler = function(setup) {
				var checked = elem.prop('checked');
				var index = scope.list.indexOf(scope.value);

				if (checked && index == -1) {
				  if (setup) elem.prop('checked', false);
				  else scope.list.push(scope.value);
				} else if (!checked && index != -1) {
				  if (setup) elem.prop('checked', true);
				  else scope.list.splice(index, 1);
				}
			  };

			  var setupHandler = handler.bind(null, true);
			  var changeHandler = handler.bind(null, false);

			  elem.bind('change', function() {
				scope.$apply(changeHandler);
			  });
			  scope.$watch('list', setupHandler, true);
			}
		  };
		});
