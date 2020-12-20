var someObject = {
    myProperty : 'Foo',
    myMethod : function(prefix, postfix) {
    alert(prefix + this.myProperty + postfix);
    }
    };
    someObject.myMethod('<', '>');
    var someOtherObject = {
    myProperty : 'Bar'
    };
    someObject.myMethod.call(someOtherObject, '<', '>');
    someObject.myMethod.apply(someOtherObject, ['<', '>']);
    