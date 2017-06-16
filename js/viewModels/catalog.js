/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * catalog module
 */
define(['ojs/ojcore', 'knockout', 'data/data', 'moment', 'ojs/ojknockout', 'ojs/ojvalidation-datetime', 'ojs/ojtagcloud', 'ojs/ojchart'],
        function (oj, ko, jsonData, moment)
        {
    /**
     * The view model for the main content view template
     */
    function catalogContentViewModel() {
        var self = this;
                        self.infoTiles = ko.observableArray();
                        self.detailsContentTemplate = ko.observable('personDetails/about');
                        
                    self.infoTiles([
                        {"sid": "1", "name": "Item1", "title": "品类", "infolable2": "Tenure" },
                        {"sid": "2", "name": "Item2", "title": "区域","infolable2": "Potential"},
                        {"sid": "3", "name": "Item3", "title": "渠道", "infolable2": "Ratio"},
                        {"sid": "4", "name": "Item4", "title": "客户系统","infolable2": "Directs"}
                    ]);
                    
                     self.personClickHandler = function (data) {
                    self.selectedTab(data.sid);
                    ko.utils.arrayForEach(self.personProfile().comps, function (item) {
                    });
                    var newPage = "personDetails/" + "area";
                    self.detailsContentTemplate(newPage);
                    return true;
                };
    }
    
    return catalogContentViewModel;
});
