(function() {
    'use strict';

    angular
        .module('routing')
        .factory('API', function($http) {


            return {
                getData: () => {
                  return $http({
                      method: 'GET',
                      headers: {'X_CSRF_TOKEN':'spencer'},
                      url: 'http://instagramcloneclass.herokuapp.com/images'
                    })
                  },
                createImage:(image) => {
                    return $http({
                        method: 'POST',
                        headers: {'X_CSRF_TOKEN':'spencer'},
                        data: image,
                        url: 'http://instagramcloneclass.herokuapp.com/image/post'
                    })
                },
                likeImage: (id) =>{
                  return $http({
                      method: 'POST',
                      headers: {'X_CSRF_TOKEN':'spencer'},
                      data: {imageid:id},
                      url: 'http://instagramcloneclass.herokuapp.com/images/vote'
                  })
                },
                getOne: (id) => {
                  return $http({
                      method: 'GET',
                      headers: {'X_CSRF_TOKEN':'spencer'},
                      url: `http://instagramcloneclass.herokuapp.com/images/${id}`
                    })
                  },


            };
        });

})();
