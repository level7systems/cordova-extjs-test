/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('CordovaExtJSTest.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    touchendAt: null,
    tabtapAt: null,

    onButtonTap: function() {
        var me = this,
            dt = new Date(),
            ms = Ext.Date.format(dt, 'time'),
            diffItem = ms - me.touchendAt;

        Ext.log('CordovaExtJSTest.view.main.MainController onButtonTap '+diffItem+' ms after tap event');

        var info = 'touchend at ' + me.touchendAt + '<br/>';
        info+= 'button tap at ' + ms + ' ('+diffItem+' ms)';

        Ext.toast(info, 5000);
    },

    onTabTap: function() {
        var dt = new Date(),
            ms = Ext.Date.format(dt, 'time'),
            diff = ms - this.touchendAt;
        Ext.log('CordovaExtJSTest.view.main.MainController tab tap ' + diff + ' ms after touchend');
        this.tabtapAt = ms;
    },

    onPainted: function() {
        Ext.log('CordovaExtJSTest.view.main.MainController onPainted');

        var me = this;

        Ext.each(document.querySelectorAll( "button" ), function(btn) {

            btn.addEventListener( "touchend", function() {
                Ext.log('CordovaExtJSTest.view.main.MainController button touchend');
                var dt = new Date();
                me.touchendAt = Ext.Date.format(dt, 'time');
            });
        });
    },

    onActiveItemChange: function() {

        var me = this,
            dt = new Date(),
            ms = Ext.Date.format(dt, 'time'),
            diffTap = me.tabtapAt - me.touchendAt,
            diffItem = ms - this.tabtapAt;

        Ext.log('CordovaExtJSTest.view.main.MainController active item changed '+diffItem+' ms after tab tap');

        var info = 'touchend at ' + me.touchendAt + '<br/>';
        info+= 'tap at ' + me.tabtapAt + ' ('+diffTap+' ms)' + '<br/>';
        info+= 'item changed at ' + ms + ' ('+diffItem+' ms)';

        Ext.toast(info, 5000);

    }
});
