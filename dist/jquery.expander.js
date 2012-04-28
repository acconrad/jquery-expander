/*! jQuery Expander - v0.2.5 - 2012-04-28
* https://github.com/acconrad/jquery-expander
* Copyright (c) 2012 Adam Conrad; Licensed MIT, GPL */

(function ($) {
  "use strict";

  $.fn.expander = function (options) {

    var settings = $.extend({}, $.fn.expander.options, options)
      , filterName = settings.filter === '' ? settings.filter : '.' + settings.filter
      , expandSize = 10

    return this.each(function (index) {

      var $this = $(this)
        , $more = $this.next()
        , isTable = $this.is('table')
        , totalRows = isTable ? $this.children('tbody').children(filterName).length : $this.children(filterName).length
        , currExpandSize
        , expandDiff

      if (expandSize < totalRows) {

        if (isTable) {
          $this.children('tbody').children(filterName + ':gt(' + (expandSize - 1) + ')').addClass('hidden')
        } else {
          $this.children(filterName + ':gt(' + (expandSize - 1) + ')').addClass('hidden')
        }

        expandDiff = totalRows - expandSize
        currExpandSize = expandDiff < expandSize ? expandDiff : expandSize
        
        if ($more.hasClass('expander-more')) {
          $more.html('Show ' + currExpandSize + ' More').removeClass('hidden').attr('name', settings.filter)
        } else {
          $this.after('<a href="#" name="' + settings.filter + '" class="expander-more">Show ' + currExpandSize + ' More</a>')
        }

      } else if (expandSize >= totalRows && $more.hasClass('expander-more')) {

        $more.addClass('hidden')

      }

    })

  }

  $.fn.expander.options = { filter: '' }

  $(document).on('click', '.expander-more', function (event) {

    event.preventDefault()

    var $target = $(event.target)
      , $list = $target.prev()
      , targetFilter = typeof $target.attr('name') === 'undefined' ? '' : '.' + $target.attr('name')
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

}(jQuery))
