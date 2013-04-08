if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/date-helper/date-helper.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/date-helper/date-helper.js",
    code: []
};
_yuitest_coverage["build/date-helper/date-helper.js"].code=["YUI.add('date-helper', function (Y, NAME) {",""," function DateHelper(config) {","     DateHelper.superclass.constructor.apply(this, arguments);"," }",""," DateHelper.NAME = 'date-helper';",""," DateHelper.ATTRS = {};",""," Y.extend(DateHelper, Y.Base, {","","     DAY_MILLISECONDS: 86400000,","","     config: null,","","     initializer: function (cfg) {","         this.config = cfg;","     },","","     /**","      * Retrieves the date N days ago","      * ","      * @param days Numbers of days","      * @return Date","      */","     lastNDays: function (days) {","         var today = new Date();","         return new Date(today.valueOf() - days * this.DAY_MILLISECONDS);","     },","","     /**","      * Retrieves yesterday","      * ","      * @return Date","      */","     yesterday: function () {","         var today = new Date();","         return new Date(today.valueOf() - 1 * this.DAY_MILLISECONDS);","     },","","     /**","      * Last week range","      * ","      * @return {begin: Date, end: Date} Range of the last week","      */","     lastWeek: function () {","         var sundayDate = new Date();","         var sunday = false;","         while (!sunday) {","             if (sundayDate.getDay() == 0) {","                 sunday = true;","             } else {","                 sundayDate = new Date(sundayDate.getTime() - 1 * this.DAY_MILLISECONDS);","             }","         }","         return {","             begin: new Date(sundayDate.getTime() - 7 * this.DAY_MILLISECONDS),","             end: sundayDate","         };","     },","","     /**","      * Get first date of current month","      * ","      * @return Date the first day of the current month","      */","     currentMonthFirstDay: function () {","         var today = new Date();","         return new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0, 0);","     },","","     destructor: function () {}"," });",""," Y.DateHelper = DateHelper;","","}, '@VERSION@', {\"requires\": [\"yui-base\"]});"];
_yuitest_coverage["build/date-helper/date-helper.js"].lines = {"1":0,"3":0,"4":0,"7":0,"9":0,"11":0,"18":0,"28":0,"29":0,"38":0,"39":0,"48":0,"49":0,"50":0,"51":0,"52":0,"54":0,"57":0,"69":0,"70":0,"76":0};
_yuitest_coverage["build/date-helper/date-helper.js"].functions = {"DateHelper:3":0,"initializer:17":0,"lastNDays:27":0,"yesterday:37":0,"lastWeek:47":0,"currentMonthFirstDay:68":0,"(anonymous 1):1":0};
_yuitest_coverage["build/date-helper/date-helper.js"].coveredLines = 21;
_yuitest_coverage["build/date-helper/date-helper.js"].coveredFunctions = 7;
_yuitest_coverline("build/date-helper/date-helper.js", 1);
YUI.add('date-helper', function (Y, NAME) {

 _yuitest_coverfunc("build/date-helper/date-helper.js", "(anonymous 1)", 1);
_yuitest_coverline("build/date-helper/date-helper.js", 3);
function DateHelper(config) {
     _yuitest_coverfunc("build/date-helper/date-helper.js", "DateHelper", 3);
_yuitest_coverline("build/date-helper/date-helper.js", 4);
DateHelper.superclass.constructor.apply(this, arguments);
 }

 _yuitest_coverline("build/date-helper/date-helper.js", 7);
DateHelper.NAME = 'date-helper';

 _yuitest_coverline("build/date-helper/date-helper.js", 9);
DateHelper.ATTRS = {};

 _yuitest_coverline("build/date-helper/date-helper.js", 11);
Y.extend(DateHelper, Y.Base, {

     DAY_MILLISECONDS: 86400000,

     config: null,

     initializer: function (cfg) {
         _yuitest_coverfunc("build/date-helper/date-helper.js", "initializer", 17);
_yuitest_coverline("build/date-helper/date-helper.js", 18);
this.config = cfg;
     },

     /**
      * Retrieves the date N days ago
      * 
      * @param days Numbers of days
      * @return Date
      */
     lastNDays: function (days) {
         _yuitest_coverfunc("build/date-helper/date-helper.js", "lastNDays", 27);
_yuitest_coverline("build/date-helper/date-helper.js", 28);
var today = new Date();
         _yuitest_coverline("build/date-helper/date-helper.js", 29);
return new Date(today.valueOf() - days * this.DAY_MILLISECONDS);
     },

     /**
      * Retrieves yesterday
      * 
      * @return Date
      */
     yesterday: function () {
         _yuitest_coverfunc("build/date-helper/date-helper.js", "yesterday", 37);
_yuitest_coverline("build/date-helper/date-helper.js", 38);
var today = new Date();
         _yuitest_coverline("build/date-helper/date-helper.js", 39);
return new Date(today.valueOf() - 1 * this.DAY_MILLISECONDS);
     },

     /**
      * Last week range
      * 
      * @return {begin: Date, end: Date} Range of the last week
      */
     lastWeek: function () {
         _yuitest_coverfunc("build/date-helper/date-helper.js", "lastWeek", 47);
_yuitest_coverline("build/date-helper/date-helper.js", 48);
var sundayDate = new Date();
         _yuitest_coverline("build/date-helper/date-helper.js", 49);
var sunday = false;
         _yuitest_coverline("build/date-helper/date-helper.js", 50);
while (!sunday) {
             _yuitest_coverline("build/date-helper/date-helper.js", 51);
if (sundayDate.getDay() == 0) {
                 _yuitest_coverline("build/date-helper/date-helper.js", 52);
sunday = true;
             } else {
                 _yuitest_coverline("build/date-helper/date-helper.js", 54);
sundayDate = new Date(sundayDate.getTime() - 1 * this.DAY_MILLISECONDS);
             }
         }
         _yuitest_coverline("build/date-helper/date-helper.js", 57);
return {
             begin: new Date(sundayDate.getTime() - 7 * this.DAY_MILLISECONDS),
             end: sundayDate
         };
     },

     /**
      * Get first date of current month
      * 
      * @return Date the first day of the current month
      */
     currentMonthFirstDay: function () {
         _yuitest_coverfunc("build/date-helper/date-helper.js", "currentMonthFirstDay", 68);
_yuitest_coverline("build/date-helper/date-helper.js", 69);
var today = new Date();
         _yuitest_coverline("build/date-helper/date-helper.js", 70);
return new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0, 0);
     },

     destructor: function () {}
 });

 _yuitest_coverline("build/date-helper/date-helper.js", 76);
Y.DateHelper = DateHelper;

}, '@VERSION@', {"requires": ["yui-base"]});
