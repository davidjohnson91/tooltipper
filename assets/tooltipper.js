(function($){
  $.fn.tooltipper = function(options){
    var Tooltipper = function(element, options){
      var $el = $(element),
          obj = this,
          $tooltip;

      var options = $.extend({
        animationDuration: 200
      }, options || {});

      var buildTooltipStub = function(){
        if($('#tooltipper').length < 1){
          return $($('<div id="tooltip-bubble"><span class="close-btn">x</span><div class="content"></div></div>').appendTo('body')[0]);
        }
      }

      obj.insertTooltip = function($node, content, direction){
        $tooltip.removeClass('top bottom left right')
          .addClass(direction)
          .content.html(content);

        $node.addClass('tooltipper')
          .append($tooltip);

        $tooltip.show();
      }

      obj.dismissTooltip = function(){
        $tooltip.fadeOut(options.animationDuration);
      }

      var init = function(){
        $tooltip = buildTooltipStub();
        $tooltip.content = $('.content', $tooltip);
        $('.close-btn', $tooltip).on('click', function(){
          obj.dismissTooltip();
        })
      }();
    }

    return this.each(function(){
      var el = $(this);
      if(el.data('tooltipper')) return;
      var tooltipper = new Tooltipper(this, options);
      el.data('tooltipper', tooltipper);
      return el.data('tooltipper');
    });
  }
})(jQuery);