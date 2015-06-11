angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $firebaseAuth, $location, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData.username+'/'+$scope.loginData.password);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
     
    }, 1000);

        var fbAuth = $firebaseAuth(fb);
        fbAuth.$authWithPassword({
            email: $scope.loginData.username,
            password: $scope.loginData.password
        }).then(function(authData) {
            $location.path("/playlists");
            $scope.closeLogin();
        }).catch(function(error) {
            console.error("ERROR: " + error);
        });

  };
})

.controller('PlaylistsCtrl', function($scope, $firebaseObject) {
  fbAuth = fb.getAuth();
  if(fbAuth) {
        var syncObject = $firebaseObject(fb.child("playlists"));
        syncObject.$bindTo($scope, "playlists");
        
    }

/*  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];*/
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
