
require(['baja!',
         'bajaux/events',
         'nmodule/n4Foundation/rc/n4Foundation',
         'jquery',
         'nmodule/n4Foundation/rc/N4FoundationWidget',
         'hbs!nmodule/n4Foundation/rc/template/n4Foundation'], function (
         baja,
         events,
         n4Foundation,
         $,
         N4FoundationWidget,
         template) {

  'use strict';

  $("#template").html(template({
    virtues: n4Foundation.extolVirtues()
  }));

  var widget = new N4FoundationWidget(),
      comp = baja.$('baja:Component', {
        'sublime': true,
        'splendid': true,
        'renowned': true,
        'resplendent': true,
        'superb': true
      });

  var widgetDiv = $('#widget'),
      description = $('#description');

  widget.initialize(widgetDiv)
    .then(function () {

      widgetDiv.on(events.MODIFY_EVENT, function () {
        widget.read()
          .then(function (value) {
            description.text(value);
          });
      });

      return widget.load(comp);
    });
});

