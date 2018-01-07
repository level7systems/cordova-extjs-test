/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('CordovaExtJSTest.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.Toast',
        'Ext.layout.Fit'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: {
        animation: false
    },

    defaults: {
        tab: {
            iconAlign: 'top',
            listeners: {
                'tap': 'onTabTap'
            }
        }
    },

    tabBarPosition: 'bottom',

    listeners: {
        painted: 'onPainted',
        activeItemchange: 'onActiveItemChange'
    },

    items: [
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            items: [{
                html: 'Tab One'
            },{
                xtype: 'button',
                text: 'Tap Me',
                listeners: {
                    tap: 'onButtonTap'
                }
            }
            ]
        },{
            title: 'Users',
            iconCls: 'x-fa fa-user',
            html: 'Tab Two'
        },{
            title: 'Groups',
            iconCls: 'x-fa fa-users',
            html: 'Tab Three'
        },{
            title: 'Settings',
            iconCls: 'x-fa fa-cog',
            html: 'Tab Four'
        }
    ]
});
