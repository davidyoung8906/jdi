/*
 * This file is part of JDI.
 * Copyright (c) 2013 Simon Brunel.
 * Contact: http://www.github.com/simonbrunel
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * @class App.view.UserPanel
 * @author Simon Brunel
 */
Ext.define('App.view.UserPanel', {
    extend: 'Ext.Panel',
    xtype: 'userpanel',

    config: {

        email: null,

        pseudo: '',

        avatar: null,

        cls: 'view-userpanel',

        layout: 'hbox',

        items: [
            {   // avatar
                xtype: 'image',
                itemId: 'avatar',
                cls: 'user-avatar'
            },
            {   // user info
                layout: 'vbox',
                flex: 1,
                items: [
                    {   // pseudo
                        itemId: 'pseudo',
                        cls: 'user-pseudo',
                        tpl: '{pseudo}'
                    },
                    {   // email
                        itemId: 'email',
                        cls: 'user-email',
                        tpl: '{email}'
                    },
                    {   xtype: 'spacer'
                    },
                    {   // logout button
                        xtype: 'button',
                        action: 'user-logout',
                        text: 'Sign Out',
                        iconCls: 'logout',
                        iconMask: true,
                        ui: 'action'
                    }
                ]
            }
        ]
    },

    updateEmail: function(email) {
        var component = this.down('#email');
        if (!Ext.isEmpty(email)) {
            component.setData({email: email});
            component.show();
        } else {
            component.hide();
        }
    },

    updatePseudo: function(pseudo) {
        var component = this.down('#pseudo');
        if (!Ext.isEmpty(pseudo)) {
            component.setData({pseudo: pseudo});
            component.show();
        } else {
            component.hide();
        }
    },

    updateAvatar: function(url) {
        var component = this.down('#avatar');
        if (!Ext.isEmpty(url)) {
            component.setSrc(url);
            component.show();
        } else {
            component.hide();
        }
    }

});
