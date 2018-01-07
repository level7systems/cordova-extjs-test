Ext.define('Ext.overrides.event.gesture.DoubleTap', {
    override: 'Ext.event.gesture.DoubleTap',
    
    onTouchEnd: function(e) {
    	console.log('Ext.overrides.event.gesture.DoubleTap onTouchEnd');
        var me = this,
            maxDuration = me.getMaxDuration(),
            time = e.time,
            target = e.target,
            lastTapTime = me.lastTapTime,
            lastTarget = me.lastTarget,
            point = e.changedTouches[0].point,
            duration, scale, distance;

        me.lastTapTime = time;
        me.lastTarget = target;

        if (lastTapTime) {
            duration = time - lastTapTime;

            if (duration <= maxDuration) {
                scale = Ext.Element.getViewportScale();
                // account for scale so that move distance is actual screen pixels, not page pixels
                distance = Math.round(Math.abs(point.getDistanceTo(me.startPoint) * scale));

                if (distance <= me.getTapDistance()) {
                    if (target !== lastTarget) {
                        return me.cancel(e);
                    }

                    me.lastTarget = null;
                    me.lastTapTime = 0;

                    me.fire('doubletap', e, {
                        touch: e.changedTouches[0],
                        duration: duration
                    });

                    return me.callParent([e]);
                }
            }
        }

        if (time - me.startTime > maxDuration) {
            me.fire('singletap', e);
            me.reset();
        } else {
            me.setSingleTapTimer(e);
        }
    },
});