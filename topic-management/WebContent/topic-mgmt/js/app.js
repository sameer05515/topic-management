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
