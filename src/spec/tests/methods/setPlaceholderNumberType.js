"use strict";

describe("setPlaceholderNumberType: init plugin", function() {

  beforeEach(function() {
    intlSetup(true);
    input = $("<input>");
    input.intlTelInput();
  });

  afterEach(function() {
    input.intlTelInput("destroy");
    input = null;
  });

  it("sets the placeholder according to the default placeholderNumberType", function() {
    expect(input.attr("placeholder")).toEqual("(201) 555-0123");
  });

  it("calling setPlaceholderNumberType with TOLL_FREE updates the placeholder accordingly", function() {
    input.intlTelInput("setPlaceholderNumberType", intlTelInputUtils.numberType.TOLL_FREE);
    expect(input.attr("placeholder")).toEqual("(800) 234-5678");
  });

});
