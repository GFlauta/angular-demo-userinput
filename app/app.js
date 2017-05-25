  angular.module("app", [])
    .component("nameDisplay", {
      controller: "inputController",
      templateUrl: './templates/mytemplate.html'
    })
    .component("goodbye", {
      controller: "goodbyeController",
      templateUrl: './templates/goodbyeTemplate.html'
    })
