/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/**
 * Header module
 */
define(['knockout', 'ojs/ojcore', 'viewModels/dashboard', 'viewModels/phone/dashboard',
    'ojs/ojknockout', 'ojs/ojnavigationlist', 'ojs/ojoffcanvas',
    'ojs/ojdatacollection-common', 'ojs/ojdialog', 'ojs/ojselectcombobox',
    'ojs/ojcollapsible', 'ojs/ojaccordion',
    'ojs/ojnavigationlist', 'data/globalVars', 'ojs/ojswitch'
], function (ko, oj, dash, phoneDash) {
    /**
     * The view model for the header module
     */
    function HeaderViewModel() {
        var self = this;
        self.Dataval = ko.observable(["年"]);
        filterData.dataFilter =  "年";
        //
        // Button used for toggling off screen data.
        //
        var offScreenDataButton = {
            "label": "offscreen-toggle",
            "iconClass": "oj-web-applayout-offcanvas-icon",
            "url": "#"
        };

        //
        // Dropdown menu states
        //

        self.logout = function () {
            //    oj.Router.rootInstance.go('dashboard');
            window.location.reload(true);
        };


        // Data for application name
        var appName = {
            "id": "qs",
            "name": "中粮"
        };


// toggle show/hide offcanvas
        self.toggleDrawer = function (model, event)
        {
            var edge = $(event.currentTarget).find("input").attr("value");
            var drawer = this.offcanvasMap()[edge];
            drawer.edge = edge;
            var displayMode = this.displayModeValue();
            if (displayMode === "none")
                delete drawer.displayMode;
            else
                drawer.displayMode = displayMode;

            // if it's the active offcanvas, close it
            if (drawer === this._activeOffcanvas) {
                return this.closeDrawer(drawer).catch(logMessage);
            }

            // if there is no active offcanvas, open it
            else if (!this._activeOffcanvas) {
                return this.openDrawer(drawer);
            }

            // if there is another open offcanvas, close it first 
            // and then open this offcanvas
            else {
                return this.closeDrawer(this._activeOffcanvas)
                        .then(function () {
                            // show offcanvas in the viewport
                            return self.openDrawer(drawer);
                        })
                        .catch(logMessage);
            }
        }

        // show offcanvas in the viewport
        this.openDrawer = function (drawer) {
            this.toggleButton(drawer.edge);
            this._activeOffcanvas = drawer;
            return oj.OffcanvasUtils.open(drawer);
        };

        // hide offcanvas from the viewport
        self.closeDrawer = function (drawer) {
            this.toggleButton(drawer.edge);
            return oj.OffcanvasUtils.close(drawer);
        };
        //
        // Toolbar buttons
        //
        var toolbarData = {
            // user name in toolbar
            "userName": "steven.king@myorg.com",
            "toolbar_buttons": [
                {
                    "label": "toolbar_search_button",
                    "iconClass": "oj-fwk-icon-magnifier oj-fwk-icon",
                    "url": "#"
                }
            ],
            // Data for global nav dropdown menu embedded in toolbar.
            "global_nav_dropdown_items": [
                {"label": "Preferences",
                    "url": "#"
                },
                {"label": "Help",
                    "url": "#"
                },
                {"label": "Sign Out",
                    "url": "#"
                },
                {"label": "About",
                    "url": "#"
                }
            ]
        };

        self.offScreenButtonIconClass = offScreenDataButton.iconClass;
        self.offScreenButtonLabel = offScreenDataButton.label;

        self.appId = appName.id;
        self.appName = appName.name;

        self.userName = ko.observable(toolbarData.userName);
        self.toolbarButtons = toolbarData.toolbar_buttons;
        self.globalNavItems = toolbarData.global_nav_dropdown_items;

        self.appDrawer =
                {
                    "edge": "start",
                    "displayMode": "push",
                    "selector": "#appDrawer",
                    "selection": "selectedItem",
                    "content": '#pageContent'
                };

        //
        // Data for application navigation
        //
        var router = oj.Router.rootInstance;
        var appNavData = [
//            {
//                name: router.states[0].label,
//                id: router.states[0].id,
//                disabled: 'false',
//                iconClass: ''
//            },
            {
                name: router.states[0].label,
                id: router.states[0].id,
                disabled: 'false',
                iconClass: 'cust-home-icon oj-navigationlist-item-icon'
            },
            {
                name: router.states[1].label,
                id: router.states[1].id,
                disabled: 'false',
                iconClass: 'cust-menu-icon2 oj-navigationlist-item-icon'
            },
            {
                name: router.states[2].label,
                id: router.states[2].id,
                disabled: 'false',
                iconClass: 'cust-menu-icon1 oj-navigationlist-item-icon'
            },
            {
                name: router.states[3].label,
                id: router.states[3].id,
                disabled: 'false',
                iconClass: 'cust-menu-icon3 oj-navigationlist-item-icon'
            },
            {
                name: router.states[4].label,
                id: router.states[4].id,
                disabled: 'false',
                iconClass: 'cust-menu-icon4 oj-navigationlist-item-icon'
            }
        ];

        self.titleName = ko.computed(function () {
            switch (router.stateId()) {
                case 'dashboard':
                    return 'C41移动平台';
                    break;
                case 'catalog':
                    return '品类';
                    break;
                case 'area':
                    return '区域';
                    break;
                case 'industry':
                    return '渠道';
                    break;
            }
        });

        self.optionChangedHandler = function (event, data)
        {
            if (data.value && data.value !== "") {
                console.log(data);
                filterData.dataFilter = data.value[0];
            }
        };

        self.dataSource = new oj.ArrayTableDataSource(appNavData, {idAttribute: 'id'});

        self.toggleAppDrawer = function ()
        {
            return oj.OffcanvasUtils.toggle(self.appDrawer);
        };

        //
        // Close off-screen content once window becomes larger.
        //
        var query = window.matchMedia("(min-width: 39.375rem)");
        var mqListener = function (event)
        {
            oj.OffcanvasUtils.close(self.appDrawer);
        };
        query.addListener(mqListener);


        self.handleActivated = function (info) {
            // Implement if needed

        };

        /**
         * Optional ViewModel method invoked after the View is inserted into the
         * document DOM.  The application can put logic that requires the DOM being
         * attached here.
         * @param {Object} info - An object with the following key-value pairs:
         * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
         * @param {Function} info.valueAccessor - The binding's value accessor.
         * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
         */
        self.handleAttached = function (info) {

        };


        /**
         * Optional ViewModel method invoked after the bindings are applied on this View.
         * If the current View is retrieved from cache, the bindings will not be re-applied
         * and this callback will not be invoked.
         * @param {Object} info - An object with the following key-value pairs:
         * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
         * @param {Function} info.valueAccessor - The binding's value accessor.
         */
        self.handleBindingsApplied = function (info) {
            // Implement if needed

        };

        /*
         * Optional ViewModel method invoked after the View is removed from the
         * document DOM.
         * @param {Object} info - An object with the following key-value pairs:
         * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
         * @param {Function} info.valueAccessor - The binding's value accessor.
         * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
         */
        self.handleDetached = function (info) {
            // Implement if needed
        };
    }
    return new HeaderViewModel;
});
