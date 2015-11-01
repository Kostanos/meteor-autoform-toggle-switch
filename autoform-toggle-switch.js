AutoForm.addInputType("toggle-switch", {
  template: "cssToggleSwitch",
  valueOut: function () {
    return this.is(":checked");
  },
  contextAdjust: function (context) {
    context.options = {atts: _.omit(context.atts, 'toggleSwitchOptions')};
    if (context.value){
      context.options.atts.checked = "checked";
    }
    if (context.atts.toggleSwitchOptions){
      context.options = _.extend(context.options, context.atts.toggleSwitchOptions);
    }
    // Add default parameters
    if (context.options.valueOn === undefined) context.options.valueOn = 'On';
    if (context.options.valueOff === undefined) context.options.valueOff = 'Off';
    if (context.options.classLabel === undefined) context.options.classLabel = 'well';
    if (context.options.classButton === undefined) context.options.classButton = 'btn-default';

    return context.options;
  }
});
