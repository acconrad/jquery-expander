# tableexander: a jQuery plugin

Table Expander is a jQuery plugin that makes it easy to support expanding tables with "Show N more" functionality.

## Usage

First, load jQuery and the plugin:

```html
<script src="jquery.min.js" type="text/javascript"></script>
<script src="jquery.tableexpander.js" type="text/javascript"></script>
```

Optionally you can add the stylesheet to make the added tags look like links:

```html
<link href="tableexpander.css" rel="stylesheet" type="text/css" />
```

Now, let's attach it to your table on DOM ready:

```html
<pre>
   jQuery(document).ready(function() {
     jQuery("table.myTableClass").tableExpander();
   });
</pre>
```

This will add a span tag to the bottom of your table:

```html
<table class="myTableClass">
  ...your table info goes here...
</table>
<div class="more_activity">
  <span id="MOREID">Show <span class="show_more">N</span> More</span>
</div>
```

where MOREID is the name of this new tag (default is "myMoreLink") and N is at most 10.

## Settings

### filterClass

If your table filters on certain types of rows, such as the following:

```html
<table class="myNewTable">
  <thead>
    ...header info...
  </thead>
  <tbody>
    <tr class="type_1">
      ...stuff about item 1, type 1...
    </tr>
    <tr class="type_1">
      ...stuff about item 2, type 1...
    </tr>
    <tr class="type_2">
      ...stuff about item 3, type 2...
    </tr>
    <tr class="type_2">
      ...stuff about item 4, type 2...
    </tr>
  </tbody>
</table>
```

and you only want to show more rows of a certain type, you can add in the **filterClass** parameter and specify which rows you want to show more of. So if we wanted to only show more of *type1*, we would declare the following:

```html
$('table.myNewTable').tableExpander({ filterClass: 'type_1'});
```

### moreId

If you are expanding multiple tables on a single page, its important to distinguish which "Show More" is expanding which table. In that case you'll need to provide a name for that link:

```html
$('table.anotherNewTable').tableExpander({ moreId: 'newMore'});
```

## Author

[Adam Conrad](http://www.adamconrad.net) ([@adam_conrad](http://twitter.com/adam_conrad))

## Other

[MIT License](http://www.opensource.org/licenses/mit-license.php)

Copyright (c) 2012, Adam Conrad (acconrad -[at]- gmail [*dot*] com)
