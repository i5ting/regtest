/*
 * regextest
 * https://github.com/i5ting/regtest
 *
 * Copyright (c) 2014 
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.regextest = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.regextest = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.regextest.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.regextest.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].regextest = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
