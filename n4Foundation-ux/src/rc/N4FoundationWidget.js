
/**
 * A module defining `N4FoundationWidget`.
 *
 * @module nmodule/n4Foundation/rc/N4FoundationWidget
 */
define(['nmodule/webEditors/rc/fe/baja/BaseEditor',
        'bajaux/mixin/subscriberMixIn',
        'jquery',
        'Promise',
        'foundation',
        'hbs!nmodule/n4Foundation/rc/template/N4FoundationWidget-structure',
        'hbs!nmodule/n4Foundation/rc/template/N4FoundationWidget-content',
        'css!nmodule/n4Foundation/rc/css/foundation'], function (
        BaseEditor,
        subscriberMixin,
        $,
        Promise,
        foundation,
        tplN4FoundationWidgetStructure,
        tplN4FoundationWidgetContent) {

  'use strict';

  var SELECTED_CLASS = 'active',
      BUTTON_CLASS = 'N4FoundationWidget-button';

  /**
   * A demonstration Widget. This builds a list of buttons from the slots of a
   * Complex value, allowing the user to select a slot.
   *
   * @class
   * @extends module:nmodule/webEditors/rc/fe/baja/BaseEditor
   * @alias module:nmodule/n4Foundation/rc/N4FoundationWidget
   */
  var N4FoundationWidget = function N4FoundationWidget() {
    /** remember to call super constructor. Javascript won't do this for you */
    BaseEditor.apply(this, arguments);
    subscriberMixin(this);
  };

  //extend and set up prototype chain
  N4FoundationWidget.prototype = Object.create(BaseEditor.prototype);
  N4FoundationWidget.prototype.constructor = N4FoundationWidget;

  /**
   * Do initial setup of the DOM for the widget. This will set up the DOM's
   * structure and create a space where the buttons will go.
   *
   * @param {jQuery} element the DOM element into which to load this widget
   */
  N4FoundationWidget.prototype.doInitialize = function (dom) {
    var that = this;

    dom.html(tplN4FoundationWidgetStructure({
      titleText: "These are the slots on your component.",
      selectedSlotText: "You've selected slot: "
    }));

    dom.on('click', '.N4FoundationWidget-content button', function () {
      var $this = $(this);
      $this.siblings().removeClass(SELECTED_CLASS);
      $this.addClass(SELECTED_CLASS);
      that.$updateSlotText();
      that.setModified(true);
    });
  };

  /**
   * Reads the currently selected slot and update the display accordingly.
   * The display will be updated asynchronously.
   *
   * @private
   * @returns {Promise}
   */
  N4FoundationWidget.prototype.$updateSlotText = function () {
    var that = this;

    return that.read().then(function (slotName) {
      that.jq().find('.N4FoundationWidget-selected-slot').text(slotName);
    });
  };

  /**
   * Builds the actual buttons and loads them into the widget.
   *
   * @private
   * @param {baja.Complex} value the value being loaded in
   */
  N4FoundationWidget.prototype.$buildButtons = function (value) {
    var that = this,
        dom = that.jq(),
        contentDom = dom.find('.N4FoundationWidget-content'),
        buttons = [];

    value.getSlots().each(function (slot) {
      buttons.push({
        name: slot.getName(),
        displayName: value.getDisplayName(slot)
      });
    });

    contentDom.html(tplN4FoundationWidgetContent({
      buttons: buttons
    }));

    that.$updateSlotText();
  };

  /**
   * Loads in a Complex value and builds up an array of buttons, one for each
   * slot.
   *
   * @param {baja.Complex} value the complex value whose slots you wish to
   * select from
   */
  N4FoundationWidget.prototype.doLoad = function (value) {
    var that = this;
    var dom = that.jq();

    that.$buildButtons(value);

    that.getSubscriber().attach('added removed renamed', function () {
      that.$buildButtons(value);
    });

    that.jq().find(".popup").on("click", function (e) {
      var popup = new foundation.Reveal($('#popup'), dom);
      popup.open();
    });
    
    $(dom).ready(function() {
       $(this).foundation();
    });
  };

  /**
   * Gets the currently selected slot
   *
   * @returns {Promise} promise to be resolved with the name of the currently
   * selected slot
   */
  N4FoundationWidget.prototype.doRead = function () {
    var selectedButton = this.jq().find(
          '.N4FoundationWidget-content .' + BUTTON_CLASS + '.' + SELECTED_CLASS);

    //promises are optional - the slot could also be returned directly
    return Promise.resolve(selectedButton.data('slot'));
  };

  return N4FoundationWidget;
});
