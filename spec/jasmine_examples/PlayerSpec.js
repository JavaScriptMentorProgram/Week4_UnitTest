describe("Unit Test", function() {
  describe("Spy", function() {
    it("Should call spied object", function(){
      //3A arrange act assert (Nunit Junit)
      //GWT give when then
      var underTest = {
        whoAmI: function() {
          console.log("I don't know");
        }
      };
      spyOn(underTest, "whoAmI");
      underTest.whoAmI();
      expect(underTest.whoAmI).toHaveBeenCalled();
    });
  });

  describe("async", function() {
    //callback ajax promise
    //XHR XML http request
    //file
    //settimeout setinterval
    //BDD superset of TDD
    var happyChildrenDay = "Happy Children's day";
    it("Promise", function(done) {
      var promise = new Promise(
        function(resolve, reject){
          setTimeout(function(){
            resolve(happyChildrenDay);
            done();
          }, 10000);
        }
      );

      promise.then(function(value){
        expect(value).toEqual(happyChildrenDay);
      })
      expect(Promise).toBeDefined();
    }, 50000)
  })
})