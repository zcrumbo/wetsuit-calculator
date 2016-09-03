'use strict';

describe('Service: WetsuitResults', function () {

  // load the service's module
  beforeEach(module('wetsuitGeneratorApp'));

  // instantiate service
  var WetsuitResults;
  beforeEach(inject(function (_WetsuitResults_) {
    WetsuitResults = _WetsuitResults_;
  }));

  it('should do something', function () {
    expect(!!WetsuitResults).toBe(true);
  });

});
