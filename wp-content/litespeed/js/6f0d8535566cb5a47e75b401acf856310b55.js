(function ($) {
    $.fn.zoomImage = function (options) {
        var defaultOptions = {
            layerW: 200,
            layerH: 200,
            layerOpacity: 0.2,
            layerBgc: '#000',
            showPanelW: 500,
            showPanelH: 500,
            marginL: 5,
            marginT: 0
        };

        options = $.extend({}, defaultOptions, options);

        this.each(function () {
            var $self = $(this).css({ position: 'relative' });
            var imageW = $self.width();
            var imageH = $self.height();

            $self.find('img').css({ width: '100%', height: '100%' });
        });
    };
})(jQuery);
