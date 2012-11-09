(function($) {
    
    // ----------------------------------------------------------------------------
    // Checkbox Event Handlers
    // ----------------------------------------------------------------------------
    
    var handlers = {
        // If the exclusive option is true, this handler is bound to the 'change'
        // event of the check-all checkbox.
        exclusiveCheckAllChanged: function(checkAll, checkTargets, checked) {
            if(checked) {
               checkTargets.removeAttr("checked"); 
            }
        },
        
        // If the exclusive option is true, this handler is bound to the 'change'
        // event of the check-all checkbox.
        nonexclusiveCheckAllChanged: function(checkAll, checkTargets, checked) {
            if(checked) {
                checkTargets.attr("checked", true);
            } else {
                checkTargets.removeAttr("checked");
            }
        },
        
        // If the exclusive option is true, this handler is bound to the 'change'
        // event of the check-all-target checkboxes.
        exclusiveCheckTargetChanged: function(checkAll, checkTargets, checked) {
            checkAll.removeAttr("checked");
        },
        
        // Wraps the handler function with an event callback function.  The callback
        // unpacks relevant data and supplies this data as a list of arguments to the
        // handler function.
        wrap: function(handlerFn, checkAll, checkTargets) {
            return function(evt) {
                var checked = checkAll.attr("checked");
                handlerFn.call(this, checkAll, checkTargets, checked);
            }
        }
    };
    
    // ----------------------------------------------------------------------------
    // Plugin Function
    // ----------------------------------------------------------------------------
    
    $.fn.checkboxGroup = function(options) {
        var settings = $.extend({
            exclusive: false
        }, options);
        
        var checkAll        = this.find("[type='checkbox'].check-all"),
            checkTargets    = this.find("[type='checkbox'].check-all-target");
        
        checkTargets.unbind(".checkbox-group");
        checkAll.unbind(".checkbox-group");
        
        if(settings.exclusive) {
            var targetHandler   = handlers.wrap(handlers.exclusiveCheckTargetChanged, checkAll, checkTargets),
                allHandler      = handlers.wrap(handlers.exclusiveCheckAllChanged, checkAll, checkTargets);
            
            checkTargets.bind("change.checkbox-group", $.proxy(targetHandler, this));
            checkAll.bind("change.checkbox-group", $.proxy(allHandler, this));
        } else {
            var allHandler = handlers.wrap(handlers.nonexclusiveCheckAllChanged, checkAll, checkTargets);
            
            checkAll.bind("change.checkbox-group", $.proxy(allHandler, this));
        }
        
        return this;
    };
})(jQuery);