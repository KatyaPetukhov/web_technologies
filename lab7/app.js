var app = angular.module('imageBrowserApp', []);

app.controller('ImageController', function ($scope, $http) {
    var vm = this;
    vm.images = [];
    vm.selectedImage = null;

    // Load small images
    for (var i = 1; i <= 30; i++) {
        vm.images.push({
            id: i,
            thumbnail: 'https://picsum.photos/id/' + i + '/50/50'
        });

    }



    // Function to show large image
    vm.showImage = function (id) {
        vm.selectedImage = 'https://picsum.photos/id/' + id + '/350/350';
    };
    vm.showImage(1);
});
