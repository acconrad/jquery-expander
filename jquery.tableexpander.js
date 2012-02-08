/*
 * tableexpander: a jQuery plugin, version: 0.1.0 (2012-02-08)
 * @requires jQuery v1.4.3 or later
 *
 * Table Expander is a jQuery plugin that makes it easy to support expanding tables
 * with "Show N more" functionality
 *
 * For usage and examples, visit:
 * http://github.com/acconrad/jquery-tableexpander
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2012, Adam Conrad (acconrad -[at]- gmail [*dot*] com)
 */
(function( $ ) {

    $.fn.tableExpander = function( options ) {

        var settings = $.extend( {
            filterClass : null,
            moreId      : 'myMoreLink'
        }, options);

        return this.each(function() {

            var $this = $(this), moreLink = $('#' + settings.moreId), numShown = 5, numMore = 10, numRows;
            numRows = settings.filterClass ? $this.find('tr.' + settings.filterClass).length : $this.find('tr').length;

            if (numRows > numShown) {
                if (settings.filterClass) {
                    $this.find('tr.' + settings.filterClass + ':gt(' + (numShown - 1) + ')').hide();
                } else {
                    $this.find('tr:gt(' + (numShown - 1) + ')').hide();
                }

                moreLink = $('#' + settings.moreId);
                if (moreLink.length === 0) {
                    $this.after('<div class="more_activity"><span id="' + settings.moreId + '">Show <span class="show_more">' + numMore + '</span> More</span></div>');
                } else {
                    moreLink.replaceWith('<span id="' + settings.moreId + '">Show <span class="show_more">' + numMore + '</span> More</span></div>');
                }
                $('#' + settings.moreId).click(function () {
                    numShown = numShown + numMore;
                    if (numShown >= numRows) {
                        $('#' + settings.moreId).remove();
                    }
                    if (numRows - numShown < numMore) {
                        $('#' + settings.moreId + ' span.show_more').html(numRows - numShown);
                    }
                    if (settings.filterClass) {
                        $this.find('tr.' + settings.filterClass + ':lt(' + numShown + ')').show();
                    } else {
                        $this.find('tr:lt(' + numShown + ')').show();
                    }
                });
            }
        });
    };
})( jQuery );
