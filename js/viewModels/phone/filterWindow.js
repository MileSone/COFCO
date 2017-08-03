/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * filterWindow module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'viewModels/header', 'ojs/ojknockout', 'promise', 'data/globalVars',
    'ojs/ojdatagrid', 'ojs/ojrowexpander', 'ojs/ojflattenedtreedatagriddatasource', 'ojs/ojjsontreedatasource'
], function (oj, ko, $, header) {
    /**
     * The view model for the main content view template
     */
    function filterWindowContentViewModel() {
        var self = this;
        self.dataSource = ko.observable();
        self.dataArray = new Array();


        self.updateoption = function (event, data)
        {
            if (data.option === "currentCell") {
                if (undefined !== data.value) {
                    var tempVar = data.value.indexes.row;
//                    console.log("choose ： ", self.dataArray[tempVar]);
                    header.presentTitle(self.dataArray[tempVar]);
                    chooseFilter = self.dataArray[tempVar];
                    oj.Router.rootInstance.go('dashboard');
                }
            }
        };

        self.handleActivated = function (info) {
            $('#grid_window').ojDataGrid("refresh");
        };
        self.handleAttached = function (info) {
            $.getJSON("js/data/dash_filter.json",
                    function (data)
                    {
                        self.dataArray = new Array();
                        self.dataSource();

                        var options = {
                            'expanded': 'all',
                            'rowHeader': 'name',
                            'columns': ['btn']
                        };

                        for (var i = 0; i < data.length; i++) {
                            self.dataArray.push(data[i].attr.name);
                            if (data[i].children) {
                                var lvOne = data[i].children;
                                for (var k = 0; k < lvOne.length; k++) {
                                    self.dataArray.push(lvOne[k].attr.name);
                                    if (lvOne[k].children) {
                                        var lvTwo = lvOne[k].children;
                                        for (var m = 0; m < lvTwo.length; m++) {
                                            self.dataArray.push(lvTwo[m].attr.name);
                                            if (lvTwo[m].children) {
                                                var lvThree = lvTwo[m].children;
                                                for (var n = 0; n < lvThree.length; n++) {
                                                    self.dataArray.push(lvThree[n].attr.name);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        console.log(self.dataArray);

                        var flattenedData = new oj.FlattenedTreeDataGridDataSource(
                                new oj.JsonTreeDataSource(data), options);

                        self.dataSource(flattenedData);
                        console.log(flattenedData);
                    }
            );
        };
        self.handleBindingsApplied = function (info) {

        };
        self.handleDetached = function (info) {
            self.dataSource();
        };
    }

    return filterWindowContentViewModel;
});