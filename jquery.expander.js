/*
 * expander: a jQuery plugin, version: 0.2.5 (2012-04-23)
 * @requires jQuery v1.4.3 or later
 *
 * Expander is a jQuery plugin that makes it easy to expand
 * a long list of objects with "Show N more" functionality
 *
 * For usage and examples, visit:
 * http://github.com/acconrad/jquery-expander
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2012, Adam Conrad (acconrad -[at]- gmail [*dot*] com)
 */
(function ($) {
  "use strict";

  $.fn.expander = function (options) {

    var settings = $.extend({ filter : null }, options)
      , filterName = settings.filter ? '.' + settings.filter : ''
      , expandSize = 10

    return this.each(function (index) {

      var $this = $(this)
        , $more = $this.next()
        , isTable = $this.is('table')
        , totalRows = isTable ? $(this).children('tbody').children(filterName).length : $this.children(filterName).length
        , currExpandSize
        , expandDiff

      if (expandSize < totalRows) {

        if (isTable)
          $this.children('tbody').children(filterName + ':gt(' + (expandSize - 1) + ')').addClass('hidden')
        else
          $this.children(filterName + ':gt(' + (expandSize - 1) + ')').addClass('hidden')
        
        expandDiff = totalRows - expandSize
        currExpandSize = expandDiff < expandSize ? expandDiff : expandSize
        
        if ($more.hasClass('expander-more'))
          $more.html('Show ' + currExpandSize + ' More').removeClass('hidden').attr('name', filterName)
        else
          $this.after('<a href="#" name="' + filterName + '" class="expander-more">Show ' + currExpandSize + ' More</a>')

      } else if (expandSize >= totalRows && $more.hasClass('expander-more')) {

        $more.addClass('hidden')

      }

    })

  }

  $(document).on('click', '.expander-more', function (event) {

    event.preventDefault()

    var $target = $(event.target)
      , $list = $target.prev()
      , targetFilter = $target.attr('name')
      , listIsTable = $list.is('table')
      , listRows = listIsTable ? $list.children('tbody').children(targetFilter).length : $list.children(targetFilter).length
      , listVisibleRows = listIsTable ? (listRows - $list.children('tbody').children('.hidden').length) : (listRows - $list.children('.hidden').length)
      , $expandedList
      , standardExpandSize
      , expandedListSize
      , currExpandListSize
      , expandListDiff

    if (listVisibleRows < listRows) {

      standardExpandSize = 10
      expandListDiff = listRows - listVisibleRows
      currExpandListSize = expandListDiff < standardExpandSize ? expandListDiff : standardExpandSize
      $expandedList = listIsTable ?
        $list.children('tbody').children(targetFilter + ':lt(' + (listVisibleRows + currExpandListSize) + ')').removeClass('hidden') :
        $list.children(targetFilter + ':lt(' + (listVisibleRows + currExpandListSize) + ')').removeClass('hidden')
      expandedListSize = $expandedList.length
      
      if (expandedListSize === listRows) {
        $target.remove()
      } else {
        expandListDiff = listRows - expandedListSize
        currExpandListSize = expandListDiff < standardExpandSize ? expandListDiff : standardExpandSize
        $target.html('Show ' + currExpandListSize + ' More')
      }

    }

  })

})( jQuery )