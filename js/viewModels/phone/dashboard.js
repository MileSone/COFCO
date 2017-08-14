/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
define(['knockout', 'ojs/ojcore', 'data/data', 'ojs/ojknockout', 'ojs/ojchart', 'ojs/ojgauge', 'ojs/ojtabs', 'ojs/ojinputtext', 'ojs/ojchart',
    'ojs/ojselectcombobox', 'ojs/ojtabs', 'ojs/ojinputtext', 'ojs/ojinputnumber', 'ojs/ojgauge'],
        function (ko, oj, data)
        {
            /*
             * Your application specific code will go here
             */

            function DashboardViewModel() {
                var self = this;
                self.thresholdValues = [{max: 75}, {max: 85}, {}];
                self.gauge4OptionChange = function (e, data) {
                    /*
                     if (data.option == "value") {
                     $("#gauge1").attr('title', "Value: " + Math.round(data['value']) + "<br>Thresholds: Low 33, Medium 67, High 100");
                     $("#gauge1").ojStatusMeterGauge('refresh');
                     }
                     */
                }

                self.total_val1_1_color=ko.observable("red");
                self.value1_3_color=ko.observable("red");
                self.value1_4_color=ko.observable("red");
                self.total_val2_1_color=ko.observable("red");
                self.value2_3_color=ko.observable("red");
                self.value2_4_color=ko.observable("red");
                self.total_val3_1_color=ko.observable("red");
                self.value3_3_color=ko.observable("red");
                self.value3_4_color=ko.observable("red");
                self.total_val4_1_color=ko.observable("red");
                self.value4_3_color=ko.observable("red");
                self.value4_4_color=ko.observable("red");
                self.total_val5_1_color=ko.observable("red");
                self.value5_3_color=ko.observable("red");
                self.value5_4_color=ko.observable("red");
                self.total_val6_1_color=ko.observable("red");
                self.value6_3_color=ko.observable("red");
                self.value6_4_color=ko.observable("red");

                self.kpi_value1_color=ko.observable("red");//kpi_value1);
                self.kpi_value1_2_color=ko.observable("red");//kpi_value1_2);
                self.kpi_value1_3_color=ko.observable("red");//kpi_value1_3);
                self.kpi_value1_4_color=ko.observable("red");//kpi_value1_4);

                self.kpi_value2_color=ko.observable("red");//kpi_value2);
                self.kpi_value2_2_color=ko.observable("red");//kpi_value2_2);
                self.kpi_value2_3_color=ko.observable("red");//kpi_value2_3);
                self.kpi_value2_4_color=ko.observable("red");//kpi_value2_4);

                self.kpi_value3_color=ko.observable("red");//kpi_value3);
                self.kpi_value3_2_color=ko.observable("red");//kpi_value3_2);
                self.kpi_value3_3_color=ko.observable("red");//kpi_value3_3);
                self.kpi_value3_4_color=ko.observable("red");//kpi_value3_4);

                self.kpi_value4_color=ko.observable("red");//kpi_value4);
                self.kpi_value4_2_color=ko.observable("red");//kpi_value4_2);
                self.kpi_value4_3_color=ko.observable("red");//kpi_value4_3);
                self.kpi_value4_4_color=ko.observable("red");//kpi_value4_4);

                self.zb_value1_1_color=ko.observable("red");//zb_value1_1);
                self.zb_value1_2_color=ko.observable("red");//zb_value1_2);
                self.zb_value1_3_color=ko.observable("red");//zb_value1_3);

                self.zb_value2_1_color=ko.observable("red");//zb_value2_1);
                self.zb_value2_2_color=ko.observable("red");//zb_value2_2);
                self.zb_value2_3_color=ko.observable("red");//zb_value2_3);

                self.zb_value3_1_color=ko.observable("red");//zb_value3_1);
                self.zb_value3_2_color=ko.observable("red");//zb_value3_2);
                self.zb_value3_3_color=ko.observable("red");//zb_value3_3);

                self.zb_value4_1_color=ko.observable("red");//zb_value4_1);
                self.zb_value4_2_color=ko.observable("red");//zb_value4_2);
                self.zb_value4_3_color=ko.observable("red");//zb_value4_3);

                self.zb_value5_1_color=ko.observable("red");//zb_value5_1);
                self.zb_value5_2_color=ko.observable("red");//zb_value5_2);
                self.zb_value5_3_color=ko.observable("red");//zb_value5_3);

                self.zb_value6_1_color=ko.observable("red");//zb_value6_1);
                self.zb_value6_2_color=ko.observable("red");//zb_value6_2);
                self.zb_value6_3_color=ko.observable("red");//zb_value6_3);

                self.zb_value7_1_color=ko.observable("red");//zb_value7_1);
                self.zb_value7_2_color=ko.observable("red");//zb_value7_2);
                self.zb_value7_3_color=ko.observable("red");//zb_value7_3);

                self.zb_value8_1_color=ko.observable("red");//zb_value8_1);
                self.zb_value8_2_color=ko.observable("red");//zb_value8_2);
                self.zb_value8_3_color=ko.observable("red");//zb_value8_3);

                self.zb_value9_1_color=ko.observable("red");//zb_value9_1);
                self.zb_value9_2_color=ko.observable("red");//zb_value9_2);
                self.zb_value9_3_color=ko.observable("red");//zb_value9_3);

                self.zb_value10_1_color=ko.observable("red");//zb_value10_1);
                self.zb_value10_2_color=ko.observable("red");//zb_value10_2);
                self.zb_value10_3_color=ko.observable("red");//zb_value10_3);

                //first part              
                self.value1_3 = ko.observable(70);
                self.value1_4 = ko.observable(80);
                self.total_val1_1 = ko.observable(450000);
                self.total_val1_3_perc = ko.computed(function () {
                    return parseFloat(self.value1_3()) + '%';
                });
                self.val1_4_perc = ko.computed(function () {
                    return parseFloat(self.value1_4()) + '%';
                });



                self.value2_3 = ko.observable(83);
                self.value2_4 = ko.observable(80);
                self.total_val2_1 = ko.observable(345222);
                self.total_val2_3_perc = ko.computed(function () {
                    return parseFloat(self.value2_3()) + '%';
                });
                self.val2_4_perc = ko.computed(function () {
                    return parseFloat(self.value2_4()) + '%';
                });

                self.value3_3 = ko.observable(63);
                self.value3_4 = ko.observable(80);
                self.total_val3_1 = ko.observable(4532);
                self.total_val3_3_perc = ko.computed(function () {
                    return parseFloat(self.value3_3()) + '%';
                });
                self.val3_4_perc = ko.computed(function () {
                    return parseFloat(self.value3_4()) + '%';
                });

                self.value4_3 = ko.observable(43);
                self.value4_4 = ko.observable(80);
                self.total_val4_1 = ko.observable(23124);
                self.total_val4_3_perc = ko.computed(function () {
                    return parseFloat(self.value4_3()) + '%';
                });
                self.val4_4_perc = ko.computed(function () {
                    return parseFloat(self.value4_4()) + '%';
                });

                self.value5_3 = ko.observable(93);
                self.value5_4 = ko.observable(80);
                self.total_val5_1 = ko.observable(43212);
                self.total_val5_3_perc = ko.computed(function () {
                    return parseFloat(self.value5_3()) + '%';
                });
                self.val5_4_perc = ko.computed(function () {
                    return parseFloat(self.value5_4()) + '%';
                });

                self.value6_3 = ko.observable(43);
                self.value6_4 = ko.observable(80);
                self.total_val6_1 = ko.observable(43212);
                self.total_val6_3_perc = ko.computed(function () {
                    return parseFloat(self.value6_3()) + '%';
                });
                self.val6_4_perc = ko.computed(function () {
                    return parseFloat(self.value6_4()) + '%';
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


                self.polylineSeriesValue =ko.observable([{name: "东北大区", items: [74, 38, 45, 32, 63]},
                    {name: "京津冀大区", items: [50, 45, 56, 54, 72]},
                    {name: "华北大区", items: [39, 62, 30, 66, 42]},
                    {name: "西北大区", items: [50, 55, 56, 14, 72]},
                    {name: "华中大区", items: [50, 35, 16, 54, 72]},
                    {name: "西南大区", items: [50, 55, 56, 54, 72]},
                    {name: "华南大区", items: [50, 85, 56, 54, 72]},
                    {name: "江泸大区", items: [50, 95, 56, 54, 72]},
                    {name: "浙江大区", items: [50, 15, 56, 54, 72]}]);
/*
                this.polylineSeriesValue = ko.computed(function () {
                    return self.polyseries;
                });
*/
                self.polylineGroupsValue = ko.observable(["销量", "收入", "毛利", "毛利率", "贡献"]);

                /* chart axes */
                self.xTitle = ko.observable('%');
                self.xStyle = ko.observable('font-style:italic;color:#13152a;');
                self.xMajorTickColor = ko.observable('#484a5f');
                self.xMajorTickWidth = ko.observable(0);
                self.xMajorTickStyle = ko.observableArray(['solid']);
                self.xAxisLineColor = ko.observable('#484a5f');
                self.xAxisLineWidth = ko.observable(1);

                self.yTitle = ko.observable('%');
                self.yStyle = ko.observable('font-style:italic;color:#6070C7;');
                self.yAxisLineColor = ko.observable('#484a5f');
                self.yAxisLineWidth = ko.observable(1);
                self.yMajorTickColor = ko.observable('#484a5f');
                self.yMajorTickWidth = ko.observable(0);
                self.yMajorTickStyle = ko.observableArray(['solid']);
                self.yTickLabelPosition = ko.observableArray(['outside']);
                self.salesRefX=ko.observable(80);
                self.salesRefY=ko.observable(90);
                self.xAxis = ko.pureComputed(function () {
                    return {
                        title: "销量预算达成率(%)",
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

                        ,
                        referenceObjects: [
                            {text: '参考均值', type: 'line', value: self.salesRefX(), color: '#A0CEEC', displayInLegend: 'on', lineWidth: 1, location: 'back', shortDesc: 'Sample Reference Line'}
                        ]

                    };
                });

                self.yAxis = ko.pureComputed(function () {
                    return {
                        title: "毛利预算达成率(%)",
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

                        ,
                        referenceObjects: [
                            {text: '参考均值', type: 'line', value: self.salesRefY(), color: '#A0CEEC', displayInLegend: 'on', lineWidth: 1, location: 'back', shortDesc: 'Sample Reference Line'}
                        ]

                    };
                });

                /* basic chart data */
                self.bubbleSeriesValue = ko.observable([{name: "华中", items: [{x: 15, y: 25, z: 5, label: "华中", labelPosition: 'belowMarker'}]},
                    {name: "华北", label: "华北", items: [{x: 15, y: 15, z: 8, label: "华北", labelPosition: 'belowMarker'}]},
                    {name: "京津冀", label: "京津冀", items: [{x: 10, y: 10, z: 8, label: "京津冀", labelPosition: 'belowMarker'}]},
                    {name: "华南", label: "华南", items: [{x: 8, y: 20, z: 6, label: "华南", labelPosition: 'belowMarker'}]},
                    {name: "西北", label: "西北", items: [{x: 11, y: 30, z: 8, label: "西北", labelPosition: 'belowMarker'}]},
                    {name: "西南", label: "西南", items: [{x: 30, y: 40, z: 15, label: "西南", labelPosition: 'belowMarker'}]}
                ]);

/*
                self.bubbleSeriesValue = ko.computed(function () {

                    self.series[0]['color'] = self.color1();
                    self.series[0]['borderColor'] = self.borderColor1();
                    self.series[0]['markerShape'] = self.markerShape1()[0];
                    self.series[0]['pattern'] = self.pattern1()[0];

                    return  self.series;
                });
*/
                self.bubbleGroupsValue = ["Group A", "Group B", "Group C"];


                //KPI
                self.kpiChartt1_thresholdValues = [{max: 75}, {max: 85}, {}];

                self.kpi_chart1_title = ko.observable("福临门市场占有率");
                self.kpi_value1 = ko.observable(80);
                self.kpi_value1_2 = ko.observable(40);
                self.kpi_value1_3 = ko.observable(45);
                self.kpi_value1_4 = ko.observable("+2%");

                self.kpi_chart2_title = ko.observable("非转销量达成率");
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


                self.initView = function(){
                    self.getData('year');
                };

                // Media queries for repsonsive layouts
//                var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
//                self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

                $(window).resize(function () {
//                    var width = $(window).width();
//                    var height = $(window).height();
                    /*
                    $("#bubbleChart").ojChart("refresh");
                    $("#gauge1").ojStatusMeterGauge("refresh");
                    $("#gauge2").ojStatusMeterGauge("refresh");
                    $("#gauge3").ojStatusMeterGauge("refresh");
                    $("#gauge4").ojStatusMeterGauge("refresh");
                    $("#gauge5").ojStatusMeterGauge("refresh");
                    $("#gauge6").ojStatusMeterGauge("refresh");
                    */
                });

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
                self.testConsole = function (str) {
                    //alert(str);
                }
                self.getData = function (str) {
                    $.getJSON("http://"+baseUrl+"/home/index?type=" + str,
                    //$.getJSON("http://mesh.artadv.cn/queryData?type=" + str,
                            function (data)
                            {
                                self.total_val1_1(data.overall.total_val1_1);

                                self.value1_3(data.overall.value1_3);
                                self.value1_4(data.overall.value1_4);
                                self.total_val2_1(data.overall.total_val2_1);
                                self.value2_3(data.overall.value2_3);
                                self.value2_4(data.overall.value2_4);
                                self.total_val3_1(data.overall.total_val3_1);
                                self.value3_3(data.overall.value3_3);
                                self.value3_4(data.overall.value3_4);
                                self.total_val4_1(data.overall.total_val4_1);
                                self.value4_3(data.overall.value4_3);
                                self.value4_4(data.overall.value4_4);
                                self.total_val5_1(data.overall.total_val5_1);
                                self.value5_3(data.overall.value5_3);
                                self.value5_4(data.overall.value5_4);
                                self.total_val6_1(data.overall.total_val6_1);
                                self.value6_3(data.overall.value6_3);
                                self.value6_4(data.overall.value6_4);

                                self.total_val1_1_color(data.overall.value1_4_color);
                                self.value1_3_color(data.overall.value1_3_color);
                                self.value1_4_color(data.overall.value1_4_color);
                                //self.total_val2_1_color(data.overall.total_val2_1_color);
                                self.total_val2_1_color(data.overall.value2_4_color);
                                self.value2_3_color(data.overall.value2_3_color);
                                self.value2_4_color(data.overall.value2_4_color);
                                //self.total_val3_1_color(data.overall.total_val3_1_color);
                                self.total_val3_1_color(data.overall.value3_4_color);
                                self.value3_3_color(data.overall.value3_3_color);
                                self.value3_4_color(data.overall.value3_4_color);
                                //self.total_val4_1_color(data.overall.total_val4_1_color);
                                self.total_val4_1_color(data.overall.value4_4_color);
                                self.value4_3_color(data.overall.value4_3_color);
                                self.value4_4_color(data.overall.value4_4_color);
                                //self.total_val5_1_color(data.overall.total_val5_1_color);
                                self.total_val5_1_color(data.overall.value5_4_color);
                                self.value5_3_color(data.overall.value5_3_color);
                                self.value5_4_color(data.overall.value5_4_color);
                                //self.total_val6_1_color(data.overall.total_val6_1_color);
                                self.total_val6_1_color(data.overall.value6_4_color);
                                self.value6_3_color(data.overall.value6_3_color);
                                self.value6_4_color(data.overall.value6_4_color);

                                self.bubbleSeriesValue(data.sales);

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

                                self.kpi_value1_color(data.KPI.kpi_value1_color);
                                self.kpi_value1_2_color(data.KPI.kpi_value1_2_color);
                                self.kpi_value1_3_color(data.KPI.kpi_value1_3_color);
                                self.kpi_value1_4_color(data.KPI.kpi_value1_4_color);

                                self.kpi_value2_color(data.KPI.kpi_value2_color);
                                self.kpi_value2_2_color(data.KPI.kpi_value2_2_color);
                                self.kpi_value2_3_color(data.KPI.kpi_value2_3_color);
                                self.kpi_value2_4_color(data.KPI.kpi_value2_4_color);

                                self.kpi_value3_color(data.KPI.kpi_value3_color);
                                self.kpi_value3_2_color(data.KPI.kpi_value3_2_color);
                                self.kpi_value3_3_color(data.KPI.kpi_value3_3_color);
                                self.kpi_value3_4_color(data.KPI.kpi_value3_4_color);

                                self.kpi_value4_color(data.KPI.kpi_value4_color);
                                self.kpi_value4_2_color(data.KPI.kpi_value4_2_color);
                                self.kpi_value4_3_color(data.KPI.kpi_value4_3_color);
                                self.kpi_value4_4_color(data.KPI.kpi_value4_4_color);

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

                                self.zb_value1_1_color(data.goals.zb_value1_1_color);
                                self.zb_value1_2_color(data.goals.zb_value1_2_color);
                                self.zb_value1_3_color(data.goals.zb_value1_3_color);

                                self.zb_value2_1_color(data.goals.zb_value2_1_color);
                                self.zb_value2_2_color(data.goals.zb_value2_2_color);
                                self.zb_value2_3_color(data.goals.zb_value2_3_color);

                                self.zb_value3_1_color(data.goals.zb_value3_1_color);
                                self.zb_value3_2_color(data.goals.zb_value3_2_color);
                                self.zb_value3_3_color(data.goals.zb_value3_3_color);

                                self.zb_value4_1_color(data.goals.zb_value4_1_color);
                                self.zb_value4_2_color(data.goals.zb_value4_2_color);
                                self.zb_value4_3_color(data.goals.zb_value4_3_color);

                                self.zb_value5_1_color(data.goals.zb_value5_1_color);
                                self.zb_value5_2_color(data.goals.zb_value5_2_color);
                                self.zb_value5_3_color(data.goals.zb_value5_3_color);

                                self.zb_value6_1_color(data.goals.zb_value6_1_color);
                                self.zb_value6_2_color(data.goals.zb_value6_2_color);
                                self.zb_value6_3_color(data.goals.zb_value6_3_color);

                                self.zb_value7_1_color(data.goals.zb_value7_1_color);
                                self.zb_value7_2_color(data.goals.zb_value7_2_color);
                                self.zb_value7_3_color(data.goals.zb_value7_3_color);

                                self.zb_value8_1_color(data.goals.zb_value8_1_color);
                                self.zb_value8_2_color(data.goals.zb_value8_2_color);
                                self.zb_value8_3_color(data.goals.zb_value8_3_color);

                                self.zb_value9_1_color(data.goals.zb_value9_1_color);
                                self.zb_value9_2_color(data.goals.zb_value9_2_color);
                                self.zb_value9_3_color(data.goals.zb_value9_3_color);

                                self.zb_value10_1_color(data.goals.zb_value10_1_color);
                                self.zb_value10_2_color(data.goals.zb_value10_2_color);
                                self.zb_value10_3_color(data.goals.zb_value10_3_color);

                                self.salesRefX(data.salesRef.xLine);
                                self.salesRefY(data.salesRef.yLine);
                                self.polylineSeriesValue(data.poly.polyseries);
                                self.polylineGroupsValue(data.poly.polylineGroupsValue);

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
