define(['nmodule/n4Foundation/rc/n4Foundation'], function (n4Foundation) {
  'use strict';

  describe("nmodule/n4Foundation/rc/n4Foundation", function () {
    it("can extol its own virtues", function () {
      expect(n4Foundation.extolVirtues()).toBe('n4Foundation is great!');
    });
  });

});