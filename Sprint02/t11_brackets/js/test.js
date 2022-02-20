describe("checkBrackets", () => {
    it("case.Undefined",function() {
        assert.equal(checkBrackets(undefined), '-1')
    })
    
    it("case.Nan", () => assert.equal(checkBrackets(NaN), '-1'))

    it("case.String",function() {
        assert.equal(checkBrackets('string'), '0')
    })

    it("case.null",function() {
        assert.equal(checkBrackets(null), '0')
    })

    it("case { () () }", function() {
        assert.equal(checkBrackets('() ()'), '0');
    });

    it("case { () }", function() {
        assert.equal(checkBrackets('()'), '0');
    });

    it("case { () )( }", function() {
        assert.equal(checkBrackets('() )('), '0');
    });

    it("case { ()()()()()()() }", function() {
        assert.equal(checkBrackets('()()()()()()()'), '0');
    });

    it("case { ()()string(string)) }", function() {
        assert.equal(checkBrackets('()()string(string))'), '0');
    });

    it("case { ()()()()() }", function() {
        assert.equal(checkBrackets('()()()()()'), '0');
    });

    it("case { ([]) }", function() {
        assert.equal(checkBrackets('([])'), '0');
    });

    it("case { ((((aboba)))) }", function() {
        assert.equal(checkBrackets('((((((((((aboba))))))))))'), '0');
    });
    
    it("case { ( ( ( ( ( ( ( }", function() {
        assert.equal(checkBrackets('( ( ( ( ( ( ('), '7');
    });

    it("case { (1) (2) (3) }", function() {
        assert.equal(checkBrackets('(1) (2) (3)'), '0');
    });

    it("case { )1( )2( }", function() {
        assert.equal(checkBrackets(')1( )2('), '2');
    });

});

