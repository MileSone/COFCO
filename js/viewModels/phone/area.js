/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * catalog module
 */


define(['ojs/ojcore', 'knockout', 'data/data', 'moment', 'ojs/ojknockout', 'ojs/ojvalidation-datetime', 'ojs/ojtagcloud', 'ojs/ojchart', 'ojs/ojnavigationlist', 'ojs/ojconveyorbelt', 'ojs/ojdatacollection-common', 'ojs/ojdatetimepicker',
    'ojs/ojselectcombobox', 'ojs/ojtimezonedata', 'ojs/ojswitch', 'data/globalVars'],
        function (oj, ko, jsonData, moment)
        {
            /**
             * The view model for the main content view template
             */
            function areaContentViewModel() {
                var self = this;
                self.infoTiles = ko.observableArray();
                self.detailsContentTemplate = ko.observable('personDetails/catalog/detail_area');
                self.datavalue = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date(2014, 1, 1)));
                self.isChecked = ko.observable(true);
                self.selectedTab = ko.observable(1);
                self.orientationValue = ko.observable('vertical');
                self.personProfile = ko.observableArray([]);
                self.infoTilesDataSource = ko.observable();
                self.navListDataReady = ko.observable(false);
                self.area = ko.observableArray([]);

                self.areaArray = ko.observableArray([]);
                self.val1 = ko.observable([""]);
                var totalObject = new Array;
                self.areaChild = ko.observableArray([]);
//set up selecets
                self.year = ko.observable("2017");
                self.session = ko.observable("1");
                self.month = ko.observable("1");
                self.firstArea = ko.observable("所有");
                self.secondArea = ko.observable("所有");
                self.JYchange = ko.observable("所有");
                filterData.secondSelection = "detail_catalog";

                self.infoTiles([
                    {"sid": "1", "name": "Item1", "title": "品类", "html": "detail_catalog"},
                    {"sid": "2", "name": "Item2", "title": "区域", "html": "detail_area"},
                    {"sid": "3", "name": "Item3", "title": "渠道", "html": "detail_industry"},
                    {"sid": "4", "name": "Item4", "title": "客户系统", "html": "detail_system"}
                ]);


                self.infoTilesDataSource = new oj.ArrayTableDataSource(self.infoTiles(), {idAttribute: 'sid'});
                self.navListDataReady(true);

                self.optionChangedHandler = function (event, data) {
                    self.areaChild([]);
                    if (data.option == "value") {
                        var tempArray = new Array();
                        if (totalObject) {
                            for (var k = 0; k < totalObject.length; k++) {
                                if (data.value[0] === totalObject[k].label) {
                                    for (var m = 0; m < totalObject[k].child.length; m++) {
                                        var tempVar = {value: totalObject[k].child[m], label: totalObject[k].child[m]};
                                        tempArray.push(tempVar);
                                    }
                                    self.areaChild(tempArray);
                                    $('.changableSelect2').ojSelect("refresh");
                                }
                            }
                        }
                    }
                };

                self.handleAttached = function (info) {
                    $.getJSON("js/data/AreaSelection.json",
                            function (data)
                            {
                                var object = data.ary;
                                totalObject = object;
                                self.areaArray([]);

                                for (var i = 0; i < object.length; i++) {
                                    var tempVar = {value: object[i].label, label: object[i].label};
                                    self.areaArray.push(tempVar);
                                    var tempvar = object[i].label;
                                }
                                $('.changableSelect1').ojSelect("refresh");
                            });
                };

                self.ArrayToSendString = function (obj) {

                };

                self.filterAction = function () {
                    filterData.year = self.year();
                    filterData.quarter = self.session();
                    filterData.month = self.month();
                    filterData.firstArea = self.firstArea();
                    filterData.secondArea = self.secondArea();
                    filterData.change = self.JYchange();
                    filterData.primarySelection = "area";

                    var stringFilter = "?" + "primarySelection=" + filterData.primarySelection
                            + "&secondSelection=" + filterData.secondSelection
                            + "&year=" + filterData.year
                            + "&quarter=" + filterData.quarter
                            + "&month=" + filterData.month
                            + "&firstArea=" + filterData.firstArea
                            + "&secondArea=" + filterData.secondArea
                            + "&change=" + filterData.change;

                    console.log(stringFilter);
                    $.ajax({
                        type: "GET",
                        url: servURL + stringFilter,
                        dataType: "json",
                        success: function (resp) {
                            // we have the response  
                            alert(JSON.stringify(resp));
                        },
                        error: function (e) {
                            alert('Error: ' + e);
                        }
                    });
                };

                self.optionChangedHandler2 = function (event, data)
                {

                };

                self.optionChangedHandler3 = function (event, data)
                {

                };

                self.navListOptionChangeHandler = function (event, data) {
                    self.selectedTab(data.value);
                    var newPage = "";
                    switch (data.value) {
                        case "1":
                            newPage = "detail_catalog";
                            filterData.secondSelection = "detail_catalog";
                            break;
                        case "2":
                            newPage = "detail_area";
                            filterData.secondSelection = "detail_area";
                            break;
                        case "3":
                            newPage = "detail_industry";
                            filterData.secondSelection = "detail_industry";
                            break;
                        case "4":
                            newPage = "detail_system";
                            filterData.secondSelection = "detail_system";
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

                self.currentModule = ko.observable("detail_area");
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

            return new areaContentViewModel;
        });
