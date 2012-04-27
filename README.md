# expander: a jQuery plugin

Expander is a jQuery plugin that makes it easy to support expanding long lists, tables and any group of items with "Show N more" functionality.

## Changelog

* Apr 23, 2012 (0.2.5): Major plugin overhaul. Supports all DOM tags with at least one child element. Packaged with minified script.
* Feb 08, 2012 (0.1.0): Initial plugin release.

## Usage

First, load jQuery and the plugin:

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
<script src="jquery.expander.min.js" type="text/javascript"></script>
```

Second, make sure you have a class in your Stylesheet to handle hidden elements:

```html
.hidden {
  display: none;
  visibility: hidden;
}
```

Now, let's attach it to your list on DOM ready:

```html
<pre>
   jQuery(document).ready(function() {
     jQuery(".expander").expander();
   });
</pre>
```

This will add a link to the bottom of your list object:

```html
<table class="expander">
  ...your table info goes here as usual...
</table>
<a href="#" name class="expander-more">Show N More</span>
```

where N is at most 10.

## Settings

### filter

If your items are filtered on certain types of rows, such as the following:

```html
<table class="expander">
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

and you only want to show more rows of a certain type, you can add in the **filter** parameter and specify which rows you want to expand. For example, if we wanted to only show more of *type1*, we would declare the following:

```html
$('.expander').expander({ filter: 'type_1'});
```

## Author

[Adam Conrad](http://www.adamconrad.net) ([@adam_conrad](http://twitter.com/adam_conrad))

## Other

[MIT License](http://www.opensource.org/licenses/mit-license.php)

Copyright (c) 2012, Adam Conrad (acconrad -[at]- gmail [*dot*] com)
