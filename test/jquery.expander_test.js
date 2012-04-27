/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
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
      raises(block, [expected], [message])
  */

  module('jQuery.expander');

  test('default options: no filter', function () {
    ok($.fn.expander.options, 'options set up correctly');
    equal($.fn.expander.options.filter, '', 'default global options are set');
    $.fn.expander.options.filter = 'test';
    equal($.fn.expander.options.filter, 'test', 'change change the defaults globally');
  });

  test('chainable', function () {
    ok($('.myTable').expander().addClass('testing'), 'can be chained');
    equal($('.myTable').attr('class'), 'testing', 'class added correctly via chaining');
  });

  test('functionality', function () {
    $('.myTable').expander();
    ok($('.expander-more').length, 'more link created');
    equal($('.expander-more').html(), 'Show 10 More', 'it gets the right text');
  });

  test('changing options: adding a filter', function () {
    $('.myTable').expander({ filter: 'filterClass' });
    ok($('.expander-more').length, 'more link created');
    equal($('.expander-more').length, 'Show 3 More', 'it gets the right text');
  });

}(jQuery));
