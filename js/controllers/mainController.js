(function() {
    'use strict';

    angular
        .module('routing')
        .controller('mainController', function(API) {
        	const vm = this;

          vm.imageID= '';

          vm.singleImage={url:'https://s-media-cache-ak0.pinimg.com/originals/0b/94/e3/0b94e3669bf833298c43d54fe8b2ca13.jpg'};

          let image = API.getData()
            image.then(response=>{
                vm.data = response.data.images
              })

          vm.submitForm = function(){
            let newImage = API.createImage(vm.item)
              newImage.then(response=>{
                vm.data = response.config.data[0]
              })
            vm.item = {}
          },
          vm.modalOpen = function(id){

            vm.singleImage={};
            let getSingle = API.getOne(id)
              getSingle.then(response=>{
                vm.singleImage = response.data
              })
          },
          vm.upHearts = function(image){
            console.log(image.likes)
            let hearts = API.likeImage(image._id)
              hearts.then(response=>{
                image.likes = response.data.data.likes
              })
          }
        });

})();
