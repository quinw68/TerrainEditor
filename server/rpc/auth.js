// server/rpc/app.js
exports.actions = function(req, res, ss){
 
  // tell SocketStream to load session data
  req.use('session');
 
  return {
    authenticate: function(username, password){
      // lookup user in DB, LDAP, etc
      if (user) {
        req.session.setUserId(user.id);
        res(true);
      } else {
        res('Access denied!');
      }
    },
    logout: function(){
      req.session.setUserId(null);
    }
  }
}