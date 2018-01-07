Ext.define('Ext.overrides.event.gesture.Tap', {
    override: 'Ext.event.gesture.Tap',
    
    onTouchEnd: function(e) {
    	console.log('Ext.overrides.event.gesture.Tap onTouchEnd');
        this.fire('tap', e, {
            touch: e.changedTouches[0]
        });

        return this.callParent([e]);
    },
});