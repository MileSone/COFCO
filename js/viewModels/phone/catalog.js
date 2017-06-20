/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * catalog module
 */


define(['ojs/ojcore', 'knockout', 'data/data', 'moment', 'viewModels/personDetails/catalog/detail_catalog', 'data/globalVars', 'ojs/ojknockout', 'ojs/ojvalidation-datetime', 'ojs/ojtagcloud', 'ojs/ojchart', 'ojs/ojnavigationlist', 'ojs/ojconveyorbelt', 'ojs/ojdatacollection-common', 'ojs/ojdatetimepicker',
    'ojs/ojselectcombobox', 'ojs/ojtimezonedata', 'ojs/ojswitch'],
        function (oj, ko, jsonData, moment, CC)
        {
            /**
             * The view model for the main content view template
             */
            function catalogContentViewModel() {
                var self = this;
                self.infoTiles = ko.observableArray();
                self.detailsContentTemplate = ko.observable('personDetails/catalog/detail_catalog');
                self.datavalue = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date(2014, 1, 1)));
                self.isChecked = ko.observable(true);
                self.selectedTab = ko.observable(1);
                self.orientationValue = ko.observable('vertical');
                self.personProfile = ko.observableArray([]);
                self.infoTilesDataSource = ko.observable();
                self.navListDataReady = ko.observable(false);
                self.val1 = ko.observable(["2016"]);
                self.val2 = ko.observable(["一"]);
                self.val3 = ko.observable(["1"]);
                self.val4 = ko.observable(["一级品类"]);
                self.val5 = ko.observable(["油种"]);
                filterData.val1 = self.val1()[0];
                filterData.val2 = self.val2()[0];
                filterData.val3 = self.val3()[0];
                filterData.val4 = self.val4()[0];
                filterData.val5 = self.val5()[0];
                filterData.cusCheck = self.isChecked();

                self.infoTiles([
                    {"sid": "1", "name": "Item1", "title": "品类", "html": "detail_catalog"},
                    {"sid": "2", "name": "Item2", "title": "区域", "html": "detail_area"},
                    {"sid": "3", "name": "Item3", "title": "渠道", "html": "detail_industry"},
                    {"sid": "4", "name": "Item4", "title": "客户系统", "html": "detail_system"}
                ]);

                self.infoTilesDataSource = new oj.ArrayTableDataSource(self.infoTiles(), {idAttribute: 'sid'});
                self.navListDataReady(true);

                self.optionChangedHandler2 = function (event, data)
                {
                    filterData.val1 = self.val1()[0];
                    filterData.val2 = self.val2()[0];
                    filterData.val3 = self.val3()[0];
                    filterData.val4 = self.val4()[0];
                    filterData.val5 = self.val5()[0];
                    filterData.cusCheck = self.isChecked();
                    CC.init(filterData);
                };

                self.navListOptionChangeHandler = function (event, data) {
                    self.selectedTab(data.value);
                    var newPage = "";
                    switch (data.value) {
                        case "1":
                            newPage = "detail_catalog";
                            break;
                        case "2":
                            newPage = "detail_area";
                            break;
                        case "3":
                            newPage = "detail_industry";
                            break;
                        case "4":
                            newPage = "detail_system";
                            break;
                    }
                    self.currentModule(newPage);
                    return true;
                };

                self.personClickHandler = function (data) {
                    self.selectedTab(data.sid);
                    var newPage = "personDetails/catalog/" + data.html.toLowerCase();
                    self.currentModule(newPage);
                    return true;
                };

                self.currentModule = ko.observable("detail_catalog");
                self.modulePath = ko.pureComputed(
                        function ()
                        {
                            return {name: 'personDetails/catalog/' + self.currentModule()};
                        }
                );

                self.personClickHandler = function (data) {
                    self.selectedTab(data.sid);
                    ko.utils.arrayForEach(self.personProfile().comps, function (item) {
                    });

                    self.currentModule(data.title.toLowerCase());
                    return true;
                };
            }

            return new catalogContentViewModel;
        });
