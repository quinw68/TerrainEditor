// Example request middleware

// Only let a request through if the session has been authenticated
exports.authenticated = function() {

  return function(req, res, next) {
	console.log('testAuth');
    if (req.session && (req.session.userId != null)) {
      return next();
    } else {
      return res(false);
    }
  };
};

exports.actions = function(req, res, ss){
	console.log('test');
};