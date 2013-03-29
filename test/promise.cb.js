module.exports = {
    'callback style error should call reject' : function(test) {
        var promise = Vow.promise();

        function fail(cb) {
            return cb('fail');
        }

        fail(promise.cb);
        promise.always(function(promise) {
            test.ok(promise.isRejected());
            test.strictEqual(promise.valueOf(), 'fail');
            test.done();
        });
    },

    'callback style success should call fulfill' : function(test) {
        var promise = Vow.promise();
        function success(cb) {
            return cb(null, 'success');
        }

        success(promise.cb);
        promise.always(function(promise) {
            test.ok(promise.isFulfilled());
            test.strictEqual(promise.valueOf(), 'success');
            test.done();
        });
    }

};