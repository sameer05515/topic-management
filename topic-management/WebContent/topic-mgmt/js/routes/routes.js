/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html"/* , controller: "PshortDescriptionCtrl" */})
    // PshortDescriptions
    .when("/about", {templateUrl: "partials/about.html"/* , controller: "PshortDescriptionCtrl" */})
    .when("/faq", {templateUrl: "partials/faq.html"/* , controller: "PshortDescriptionCtrl" */})
    .when("/pricing", {templateUrl: "partials/pricing.html"/* , controller: "PshortDescriptionCtrl" */})
    .when("/services", {templateUrl: "partials/services.html"/* , controller: "PshortDescriptionCtrl" */})
    .when("/contact", {templateUrl: "partials/contact.html"/* , controller: "PshortDescriptionCtrl" */})
    // links
    .when("/links", {templateUrl: "partials/link-mgmt/links-list.html"/* , controller: "repeatController" */})
	// topics
    .when("/topics", {templateUrl: "partials/topics/viewAllTopics.html", controller: "viewAllTopicsController"})
	.when("/topics-list", {templateUrl: "partials/topics/viewAllTopics-list.html", controller: "viewAllTopicsController-list"})
	.when("/topics-list/:id", {templateUrl: "partials/topics/viewTopic.html", controller: "viewTopicController"})
	.when("/topics/new", {templateUrl: "partials/topics/createTopic.html", controller: "createTopicController"})
	.when("/topics/:id", {templateUrl: "partials/topics/updateTopic.html" , controller: "updateTopicController"})
	// groups
    .when("/groups", {templateUrl: "partials/groups/viewAllGroups.html", controller: "viewAllGroupsController"})
	.when("/groups-list", {templateUrl: "partials/groups/viewAllGroups-list.html", controller: "viewAllGroupsController-list"})
	.when("/groups-list/:id", {templateUrl: "partials/groups/viewGroup.html", controller: "viewGroupController"})
	.when("/groups/new", {templateUrl: "partials/groups/createGroup.html", controller: "createGroupController"})
	.when("/groups/:id", {templateUrl: "partials/groups/updateGroup.html" , controller: "updateGroupController"})
	// views
    .when("/views", {templateUrl: "partials/views/viewAllViews.html", controller: "viewAllViewsController"})
	.when("/views-list", {templateUrl: "partials/views/viewAllViews-list.html", controller: "viewAllViewsController-list"})
	.when("/views-list/:id", {templateUrl: "partials/views/viewView.html", controller: "viewViewController"})
	.when("/views/new", {templateUrl: "partials/views/createView.html", controller: "createViewController"})
	.when("/views/:id", {templateUrl: "partials/views/updateView.html" , controller: "updateViewController"})
	// Blog
    .when("/blog", {templateUrl: "partials/blog.html"/* , controller: "BlogCtrl" */})
    .when("/blog/post", {templateUrl: "partials/blog_item.html"/* , controller: "BlogCtrl" */})
    // else 404
    .otherwise("/404", {templateUrl: "../../partials/404.html"/* , controller: "PshortDescriptionCtrl" */});
}]);