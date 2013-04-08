/**
 * DateHelper is a tool to handle some particular cases where is needed to know dates 
 * of particular cases such as last n days, yesterday, last week, etc..
 *
 * @class DateHelper
 * @module date-helper
 * @constructor
 */
function DateHelper(config) {
    DateHelper.superclass.constructor.apply(this, arguments);
}

DateHelper.NAME = 'date-helper';

DateHelper.ATTRS = {};

Y.extend(DateHelper, Y.Base, {

    DAY_MILLISECONDS: 86400000,

    config: null,

    initializer: function (cfg) {
        this.config = cfg;
    },

    /**
     * Retrieves the date for N days ago
     * 
     * @method lastNDays
     * @param {Number} Days
     * @return Date
     */
    lastNDays: function (days) {
        var today = new Date();
        return new Date(today.valueOf() - days * this.DAY_MILLISECONDS);
    },

    /**
     * Retrieves yesterday's date
     *
     * @method yesterday 
     * @return Date
     */
    yesterday: function () {
        var today = new Date();
        return new Date(today.valueOf() - 1 * this.DAY_MILLISECONDS);
    },

    /**
     * Last week ranges
     * 
     * @method lastWeek 
     * @return {Object} Range of the last week in encapsulated in an object like: {begin: Date, end: Date} 
     */
    lastWeek: function () {
        var sundayDate = new Date();
        var sunday = false;
        while (!sunday) {
            if (sundayDate.getDay() == 0) {
                sunday = true;
            } else {
                sundayDate = new Date(sundayDate.getTime() - 1 * this.DAY_MILLISECONDS);
            }
        }
        return {
            begin: new Date(sundayDate.getTime() - 7 * this.DAY_MILLISECONDS),
            end: sundayDate
        };
    },

    /**
     * Get first date of current month
     * 
     * @method currentMonthFirstDay 
     * @return {Date} The first day of the current month
     */
    currentMonthFirstDay: function () {
        var today = new Date();
        return new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0, 0);
    },

    destructor: function () {}
});

Y.DateHelper = DateHelper;