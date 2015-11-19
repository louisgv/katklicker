angular
  .module('starter.controllers', [])
  .controller('DashCtrl', function($scope, $timeout) {
    $scope.cat = 'img/cat0/2.jpg';
    $scope.onSwipeRight = function() {
      $scope.cat = 'img/cat0/1.jpg';
      $timeout(function() {
        $scope.cat = 'img/cat0/2.jpg';

      }, 180);
    }
    $scope.onSwipeLeft = function() {
      $scope.cat = 'img/cat0/0.jpg';
      $timeout(function() {
        $scope.cat = 'img/cat0/2.jpg';
      }, 180);
    }

  })
  .controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  })
  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })
  .controller('AccountCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
