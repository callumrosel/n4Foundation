# n4Foundation

A remarkable Niagara module brought to you by callum.

#### Foundation Demo Module



```javascript
  require(['/nmodule/n4Foundation/rc/N4FoundationWidget'], function (N4FoundationWidget) {
    var widget = new N4FoundationWidget();
    widget.initialize($('#myWidgetGoesHere')).then(function () {
      return widget.load('my value');
    });
  });
```



## Building

This module builds with Gradle. The Gradle build will perform r.js optimization,
minification, and JSDoc generation. Just type: `gradlew :n4Foundation:build`

## Development

You can do development on this module with the help of Grunt. Just cd into
the module directory and type `grunt watch` to begin; JSHint and Karma tests
will be run on every file save. You can also type `grunt jshint:src` and
`grunt karma` just to run them once.

Just type `grunt` for a listing of all options.