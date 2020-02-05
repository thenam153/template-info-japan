const moduleName = 'info-japan';
const componentName = "infoJapan";
module.exports = {
  name: moduleName
};
var app = angular.module(moduleName, []);
var config = require('../config/config');
console.log(config);
app.component(componentName, {
    template: require('./template.html'),
    controller: infoJapan,
    style: require('./style.less'),
    controllerAs: 'self',
  });

  infoJapan.$inject = ['$scope', '$timeout', '$http'];

  function infoJapan($scope, $timeOut, $http) {
        const self = this;
        this.students = config.students;
        this.teachers = config.teacher_and_admins;
        this.showStudent = true;
  }