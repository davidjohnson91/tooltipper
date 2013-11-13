# Super-simple tooltips for everyday use.

![alt tag](https://raw.github.com/davidjohnson91/tooltipper/master/assets/Tip-from-Brad.gif)

1.   Instantiate the plugin

        $('body').tooltipper();

2.    Save the javascript object in a variable for later use:
        
        tooltipper = $('body').data('tooltipper');

3.    Have fun producing tooltips

        tooltipper.insertTooltip(
          $('#tooltip1 .anchor1'),
          '<img src="assets/brad.jpg" class="avatar" /><h1 class="headline">Brad Wilson</h1><p>Check out this awesome feature of BradsDeals.com</p>',
          'bottom'
        );
      
## Two simple functions

1.    insertTooltip($node, content, direction) - takes 2..3 options: a jQuery node, HTML content, and an optional position
2.    dismissTooltip() - hide the currently-displayed tooltip
