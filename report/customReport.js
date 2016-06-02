let report={
  jasmineStarted: function(suiteInfo) {  //jasmine
    console.log('jsamineStarted', suiteInfo);
  },
  suiteStarted: function(result) {  //describe
    console.log('suiteStarted', result);
  },
  specStarted: function(result) {  //it
    console.log('specStarted', result);
  },
  specDDone: function(result) {
    console.log('specDone', result);
  },
  suiteDone: function(result) {
    console.log('suiteDone', result);
  },
  jasmineDone: function(resulte) {
    console.log('jasmineDone');
  }
};

module.exports = report;