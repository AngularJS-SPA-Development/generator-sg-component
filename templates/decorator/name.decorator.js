(function() {

  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .config(Config);

  function Config($provide) {
    $provide.decorator('<%= classedName %>', function ($delegate) {
      // decorate the $delegate
      return $delegate;
    });
  }

})();