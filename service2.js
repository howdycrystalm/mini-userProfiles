angular.module('userProfiles').service('MainService', function() {
  
  var data = [
    {
      "id": 0,
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "http://vignette1.wikia.nocookie.net/arresteddevelopment/images/b/bb/1x10_Pier_Pressure_(43).png/revision/latest?cb=20120229061749"
    },
    {
      "id": 1,
      "first_name": "Lucille",
      "last_name": "Bluth",
      "avatar": "http://vignette3.wikia.nocookie.net/arresteddevelopment/images/2/29/2x17_Spring_Breakout_(10).png/revision/latest?cb=20130204205638"
    },
    {
      "id": 2,
      "first_name": "Oscar",
      "last_name": "Bluth",
      "avatar": "http://vignette4.wikia.nocookie.net/arresteddevelopment/images/9/91/2x18_Righteous_Brothers_(75).png/revision/latest?cb=20130204213105"
    }
  ]
  
  
  this.getUsers = function() { //"this" is tired to 'MainService' in line 1
    return data;
  }
  
  this.toggleFavorite = function(userIndex) { //the function is toggleFavorite
    data[userIndex].isFavorite = !data[userIndex].isFavorite;
    //toggleFavorite takes in an index, which I named userIndex, and it's attached
    //to data, which is our object. hence, data[userIndex]
    //we want to toggle between isFavorite, and not isFavorite so we === to !data[userIndex].isFavorite;
  }
  
  
});