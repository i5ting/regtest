(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */
	
  module('张婷正则测试', {
    // This will run before each test in this module.
    setup: function() {
      this.regex = /^0/g;
			this.test_data_arr = [
												'0','0.0','0.00'
												,'.0','.00','.01','.11'
												,'-1','-1.0','-1.00'
												,'1','1.0','1.00'
												,'0.1','0.01','0.11','0.10'
											];
    }
  });

  test('is awesome', function() {
		
		// expect(this.test_data_arr.length);
		
		
    $.each(this.test_data_arr,function(i){
    	var i = this.match(/(^-{0,1}0.\d{1,2}$)|(^0$)|(^-{0,1}1(.0{1,2}){0,1})/g);
			
			ok(i, [this])
    });
		
		
  });

}(jQuery));
