let LocalStorageService = function() {
  this.setAuth = function(token) {
    localStorage.setItem('access-token', token);
  }

  this.deleteAuth = function() {
    localStorage.removeItem('access-token');
  }

  this.getToken = function() {
    return localStorage.getItem('access-token')
  }
}

const localStorageService = new LocalStorageService();

export default localStorageService;