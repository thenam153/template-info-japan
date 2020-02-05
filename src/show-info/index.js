const moduleName = 'info-japan';
const componentName = "infoJapan";
module.exports = {
  name: moduleName
};
var app = angular.module(moduleName, []);

app.component(componentName, {
    template: require('./template.html'),
    controller: infoJapan,
    style: require('./style.less'),
    controllerAs: 'self',
  });

  infoJapan.$inject = ['$scope', '$timeout', '$http'];

  function infoJapan($scope, $timeOut, $http) {
    
  }