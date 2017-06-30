/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
define(['knockout', 'ojs/ojcore', 'data/data', 'ojs/ojknockout', 'ojs/ojchart', 'ojs/ojgauge', 'ojs/ojtabs', 'ojs/ojinputtext', 'ojs/ojchart', 'ojs/ojselectcombobox', 'ojs/ojtabs', 'ojs/ojinputtext', 'ojs/ojinputnumber', 'ojs/ojgauge'],
        function (ko, oj, data)
        {
            /*
             * Your application specific code will go here
             */

            function DashboardViewModel() {
                var self = this;
                self.thresholdValues = [{max: 33}, {max: 67}, {}];
                self.gauge4OptionChange = function (e, data) {
                    if (data.option == "value") {
                        $("#gauge1").attr('title', "Value: " + Math.round(data['value']) + "<br>Thresholds: Low 33, Medium 67, High 100");
                        $("#gauge1").ojStatusMeterGauge('refresh');
                    }
                }

                //first part              
                self.value1_3 = ko.observable(60);
                self.total_val1_1 = ko.observable(450000);
                self.total_val1_3 = ko.computed(function () {
                    return parseInt(self.value1_3()) + '%';
                });

                self.value2_3 = ko.observable(83);
                self.total_val2_1 = ko.observable(345222);
                self.total_val2_3 = ko.computed(function () {
                    return parseInt(self.value2_3()) + '%';
                });

                self.value3_3 = ko.observable(63);
                self.total_val3_1 = ko.observable(4532);
                self.total_val3_3 = ko.computed(function () {
                    return parseInt(self.value3_3()) + '%';
                });

                self.value4_3 = ko.observable(43);
                self.total_val4_1 = ko.observable(23124);
                self.total_val4_3 = ko.computed(function () {
                    return parseInt(self.value4_3()) + '%';
                });

                self.value5_3 = ko.observable(93);
                self.total_val5_1 = ko.observable(43212);
                self.total_val5_3 = ko.computed(function () {
                    return parseInt(self.value5_3()) + '%';
                });

                self.value6_3 = ko.observable(43);
                self.total_val6_1 = ko.observable(43212);
                self.total_val6_3 = ko.computed(function () {
                    return parseInt(self.value6_3()) + '%';
                });


                //second chart
                self.color1 = ko.observable('#267DB3');
                self.borderColor1 = ko.observable('#0F3248');
                self.pattern1 = ko.observableArray(['smallChecker']);
                self.markerShape1 = ko.observableArray(['auto']);

                self.plotAreaColor = ko.observable('#13152a');
                self.plotAreaBorderColor = ko.observable('#000000');
                self.plotAreaBorderWidth = ko.observable(0);

                self.plotArea = ko.pureComputed(function () {
                    return {
                        backgroundColor: self.plotAreaColor(),
                        borderColor: self.plotAreaBorderColor(),
                        borderWidth: self.plotAreaBorderWidth()
                    }
                });

                /* chart axes */
                self.xTitle = ko.observable('X-Axis Title');
                self.xStyle = ko.observable('font-style:italic;color:#13152a;');
                self.xMajorTickColor = ko.observable('#484a5f');
                self.xMajorTickWidth = ko.observable(1);
                self.xMajorTickStyle = ko.observableArray(['solid']);
                self.xAxisLineColor = ko.observable('#484a5f');
                self.xAxisLineWidth = ko.observable(1);

                self.yTitle = ko.observable('Y-Axis Title');
                self.yStyle = ko.observable('font-style:italic;color:#6070C7;');
                self.yAxisLineColor = ko.observable('#484a5f');
                self.yAxisLineWidth = ko.observable(1);
                self.yMajorTickColor = ko.observable('#484a5f');
                self.yMajorTickWidth = ko.observable(1);
                self.yMajorTickStyle = ko.observableArray(['solid']);
                self.yTickLabelPosition = ko.observableArray(['outside']);

                self.xAxis = ko.pureComputed(function () {
                    return {
                        title: "",
                        titleStyle: self.xStyle(),
                        axisLine: {
                            lineColor: "#484a5f",
                            lineWidth: self.xAxisLineWidth()
                        },
                        majorTick: {
                            lineColor: "#484a5f",
                            lineWidth: self.xMajorTickWidth(),
                            lineStyle: self.xMajorTickStyle()[0]
                        }
                    };
                });

                self.yAxis = ko.pureComputed(function () {
                    return {
                        title: "",
                        titleStyle: self.yStyle(),
                        axisLine: {
                            lineColor: "#484a5f",
                            lineWidth: self.yAxisLineWidth()
                        },
                        majorTick: {
                            lineColor: "#484a5f",
                            lineWidth: self.yMajorTickWidth(),
                            lineStyle: self.yMajorTickStyle()[0]
                        },
                        tickLabel: {
                            position: self.yTickLabelPosition()[0]
                        }
                    };
                });

                /* basic chart data */
                self.series = [{name: "订单满足率", items: [{x: 15, y: 25, z: 5}, {x: 25, y: 30, z: 12}, {x: 25, y: 45, z: 12}]},
                    {name: "库存未满足率", items: [{x: 15, y: 15, z: 8}, {x: 20, y: 35, z: 14}, {x: 40, y: 55, z: 35}]},
                    {name: "参透率", items: [{x: 10, y: 10, z: 8}, {x: 18, y: 55, z: 10}, {x: 40, y: 50, z: 18}]},
                    {name: "售点数", items: [{x: 8, y: 20, z: 6}, {x: 11, y: 30, z: 8}, {x: 30, y: 40, z: 15}]}];

                self.bubbleSeriesValue = ko.computed(function () {
                    self.series[0]['color'] = self.color1();
                    self.series[0]['borderColor'] = self.borderColor1();
                    self.series[0]['markerShape'] = self.markerShape1()[0];
                    self.series[0]['pattern'] = self.pattern1()[0];
                    return  self.series;
                });

                self.bubbleGroupsValue = ["Group A", "Group B", "Group C"];


                //KPI
                self.kpiChartt1_thresholdValues = [{max: 40}, {max: 70}, {}];

                self.kpi_chart1_title = ko.observable("总体经营情况");
                self.kpi_value1 = ko.observable(65);
                self.kpi_value1_2 = ko.observable(80);
                self.kpi_value1_3 = ko.observable(45);
                self.kpi_value1_4 = ko.observable("+2%");

                self.kpi_chart2_title = ko.observable("非赚销量达成率");
                self.kpi_value2 = ko.observable(75);
                self.kpi_value2_2 = ko.observable(40);
                self.kpi_value2_3 = ko.observable(45);
                self.kpi_value2_4 = ko.observable("+2%");

                self.kpi_chart3_title = ko.observable("应收账款周转率");
                self.kpi_value3 = ko.observable(80);
                self.kpi_value3_2 = ko.observable(30);
                self.kpi_value3_3 = ko.observable(45);
                self.kpi_value3_4 = ko.observable("+2%");

                self.kpi_chart4_title = ko.observable("存货周转率");
                self.kpi_value4 = ko.observable(40);
                self.kpi_value4_2 = ko.observable(92);
                self.kpi_value4_3 = ko.observable(45);
                self.kpi_value4_4 = ko.observable("+2%");


                //Zhi biao

                self.zb_value1_1 = ko.observable(3000);
                self.zb_value1_2 = ko.observable(80);
                self.zb_value1_3 = ko.observable(92);

                self.zb_value2_1 = ko.observable(3000);
                self.zb_value2_2 = ko.observable(80);
                self.zb_value2_3 = ko.observable(92);

                self.zb_value3_1 = ko.observable(3000);
                self.zb_value3_2 = ko.observable(80);
                self.zb_value3_3 = ko.observable(92);

                self.zb_value4_1 = ko.observable(3000);
                self.zb_value4_2 = ko.observable(80);
                self.zb_value4_3 = ko.observable(92);

                self.zb_value5_1 = ko.observable(3000);
                self.zb_value5_2 = ko.observable(80);
                self.zb_value5_3 = ko.observable(92);


                self.zb_value6_1 = ko.observable(3000);
                self.zb_value6_2 = ko.observable(80);
                self.zb_value6_3 = ko.observable(92);

                self.zb_value7_1 = ko.observable(3000);
                self.zb_value7_2 = ko.observable(80);
                self.zb_value7_3 = ko.observable(92);

                self.zb_value8_1 = ko.observable(3000);
                self.zb_value8_2 = ko.observable(80);
                self.zb_value8_3 = ko.observable(92);

                self.zb_value9_1 = ko.observable(3000);
                self.zb_value9_2 = ko.observable(80);
                self.zb_value9_3 = ko.observable(92);

                self.zb_value10_1 = ko.observable(3000);
                self.zb_value10_2 = ko.observable(80);
                self.zb_value10_3 = ko.observable(92);

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
                    $.getJSON("js/data/home.json",
                            function (data)
                            {
                                self.total_val1_1(data.overall.total_val1_1);
                                self.value1_3(data.overall.value1_3);
                                self.total_val2_1(data.overall.total_val2_1);
                                self.value2_3(data.overall.value2_3);
                                self.total_val3_1(data.overall.total_val3_1);
                                self.value3_3(data.overall.value3_3);
                                self.total_val4_1(data.overall.total_val4_1);
                                self.value4_3(data.overall.value4_3);
                                self.total_val5_1(data.overall.total_val5_1);
                                self.value5_3(data.overall.value5_3);
                                self.total_val6_1(data.overall.total_val6_1);
                                self.value6_3(data.overall.value6_3);

                                self.series = data.sales;

                                self.kpi_value1(data.KPI.kpi_value1);
                                self.kpi_value1_2(data.KPI.kpi_value1_2);
                                self.kpi_value1_3(data.KPI.kpi_value1_3);
                                self.kpi_value1_4(data.KPI.kpi_value1_4);

                                self.kpi_value2(data.KPI.kpi_value2);
                                self.kpi_value2_2(data.KPI.kpi_value2_2);
                                self.kpi_value2_3(data.KPI.kpi_value2_3);
                                self.kpi_value2_4(data.KPI.kpi_value2_4);

                                self.kpi_value3(data.KPI.kpi_value3);
                                self.kpi_value3_2(data.KPI.kpi_value3_2);
                                self.kpi_value3_3(data.KPI.kpi_value3_3);
                                self.kpi_value3_4(data.KPI.kpi_value3_4);

                                self.kpi_value4(data.KPI.kpi_value4);
                                self.kpi_value4_2(data.KPI.kpi_value4_2);
                                self.kpi_value4_3(data.KPI.kpi_value4_3);
                                self.kpi_value4_4(data.KPI.kpi_value4_4);


                                self.zb_value1_1(data.goals.zb_value1_1);
                                self.zb_value1_2(data.goals.zb_value1_2);
                                self.zb_value1_3(data.goals.zb_value1_3);

                                self.zb_value2_1(data.goals.zb_value2_1);
                                self.zb_value2_2(data.goals.zb_value2_2);
                                self.zb_value2_3(data.goals.zb_value2_3);

                                self.zb_value3_1(data.goals.zb_value3_1);
                                self.zb_value3_2(data.goals.zb_value3_2);
                                self.zb_value3_3(data.goals.zb_value3_3);

                                self.zb_value4_1(data.goals.zb_value4_1);
                                self.zb_value4_2(data.goals.zb_value4_2);
                                self.zb_value4_3(data.goals.zb_value4_3);

                                self.zb_value5_1(data.goals.zb_value5_1);
                                self.zb_value5_2(data.goals.zb_value5_2);
                                self.zb_value5_3(data.goals.zb_value5_3);

                                self.zb_value6_1(data.goals.zb_value6_1);
                                self.zb_value6_2(data.goals.zb_value6_2);
                                self.zb_value6_3(data.goals.zb_value6_3);

                                self.zb_value7_1(data.goals.zb_value7_1);
                                self.zb_value7_2(data.goals.zb_value7_2);
                                self.zb_value7_3(data.goals.zb_value7_3);

                                self.zb_value8_1(data.goals.zb_value8_1);
                                self.zb_value8_2(data.goals.zb_value8_2);
                                self.zb_value8_3(data.goals.zb_value8_3);

                                self.zb_value9_1(data.goals.zb_value9_1);
                                self.zb_value9_2(data.goals.zb_value9_2);
                                self.zb_value9_3(data.goals.zb_value9_3);

                                self.zb_value10_1(data.goals.zb_value10_1);
                                self.zb_value10_2(data.goals.zb_value10_2);
                                self.zb_value10_3(data.goals.zb_value10_3);

                            });
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

            return new DashboardViewModel;

        });
