(function(jQuery){
    jQuery.fn.zoomImage = function(paras) {
        var defaultParas = {
            layerW: 200,
            layerH: 200,
            layerOpacity: 0.2,
            layerBgc: '#000',
            showPanelW: 500,
            showPanelH: 500,
            marginL: 5,
            marginT: 0
        };
        
        paras = jQuery.extend({}, defaultParas, paras);
        
        jQuery(this).each(function() {
            var self = jQuery(this).css({ position: 'relative' });
            self.find('img').css({ width: '100%', height: '100%' });
        });
    };
})(jQuery);
