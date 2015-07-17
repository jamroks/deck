'use strict';

angular.module('spinnaker.pipelines.trigger.cron')
  .config(function(pipelineConfigProvider) {
    pipelineConfigProvider.registerTrigger({
      label: 'CRON',
      description: 'Executes the pipeline on a CRON schedule',
      key: 'cron',
      controller: 'CronTriggerCtrl',
      controllerAs: 'cronTriggerCtrl',
      templateUrl: 'scripts/modules/pipelines/config/triggers/cron/cronTrigger.html',
      popoverLabelUrl: 'scripts/modules/pipelines/config/triggers/cron/cronPopoverLabel.html'
    });
  })
  .controller('CronTriggerCtrl', function($scope, trigger) {

    $scope.trigger = trigger;

    function getRandom(max) {
      return Math.random() * max;
    }

    function v4() {
      var id = '', i;

      for(i = 0; i < 36; i++)
      {
        if (i === 14) {
          id += '4';
        }
        else if (i === 19) {
          id += '89ab'.charAt(getRandom(4));
        }
        else if(i === 8 || i === 13 || i === 18 || i === 23) {
          id += '-';
        }
        else
        {
          id += '0123456789abcdef'.charAt(getRandom(16));
        }
      }
      return id;
    }

    trigger.id = trigger.id || v4();

  });
