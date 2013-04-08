YUI.add('module-tests', function(Y) {

    var suite = new Y.Test.Suite('date-helper');

    suite.add(new Y.Test.Case({
        name: 'Automated Tests',
        
        dateHelper: null,
        
        setUp : function () {
            this.dateHelper = new Y.DateHelper();
        },

        
        'test last n days': function() {
            Y.Assert.isTypeOf('object', this.dateHelper.lastNDays(10));   
        },
        
        'test yesterday': function() {
            Y.Assert.isTypeOf('object', this.dateHelper.yesterday());   
        },
        
        'test lastWeek': function() {
            Y.Assert.isTypeOf('object', this.dateHelper.lastWeek());   
        },
        
        'test month\'s first day date': function() {
            Y.Assert.isTypeOf('object', this.dateHelper.currentMonthFirstDay()); 
        }
    }));

    Y.Test.Runner.add(suite);


},'', { requires: [ 'test', 'date-helper' ] });
