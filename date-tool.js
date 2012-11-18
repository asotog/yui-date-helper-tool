/**
 *
 * Dates operations yui module
 *
 */

YUI.add('date-tool', function (Y) {
    function DateTool(config) {
        DateTool.superclass.constructor.apply(this, arguments);
    }
    
    DateTool.NAME = 'date-tool';

    DateTool.ATTRS = {};

    Y.extend(DateTool, Y.Base, {
    
        DAY_MILLISECONDS: 86400000,
        
        config: null,
        
        initializer: function (cfg) {
            this.config = cfg;
        },
        
        /**
         * Retrieves the date N days ago
         * 
         * @param days Numbers of days
         * @return Date
         */
        lastNDays: function(days) {
            var today = new Date();
            return new Date(today.valueOf() - days * this.DAY_MILLISECONDS);
        },
        
        /**
         * Retrieves yesterday
         * 
         * @return Date
         */
        yesterday: function() {
            var today = new Date();
            return new Date(today.valueOf() - 1 * this.DAY_MILLISECONDS);
        },
        
        /**
         * Last week range
         * 
         * @return {begin: Date, end: Date} Range of the last week
         */
        lastWeek: function() {
            var sundayDate = new Date();
            var sunday = false;
            while (!sunday) {
                if (sundayDate.getDay() == 0) {
                      sunday = true;
                } else {
                    sundayDate = new Date(sundayDate.getTime() - 1 * this.DAY_MILLISECONDS);
                }
            }
            return {begin: new Date(sundayDate.getTime() - 7 * this.DAY_MILLISECONDS), end: sundayDate};
        },
        
        /**
         * Get first date of current month
         * 
         * @return Date the first day of the current month
         */
        currentMonthFirstDay: function() {
            var today = new Date();
            return new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0, 0);
        },
        
        destructor: function() {
        }
    });
    
    Y.DateTool = DateTool;
        
}, '0.0.1', {
    requires: ['base', 'node']
});
