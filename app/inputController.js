angular.module("app")
  .controller("inputController", function(){
    const vm = this
    vm.username = ""
    vm.updateName = function(name){
    vm.username = name
  }
})
