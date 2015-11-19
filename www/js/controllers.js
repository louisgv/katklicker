angular
  .module('starter.controllers', [])
  .controller('DashCtrl', function($scope, $timeout) {

    // $scope.catFrames = ['img/cat0/0.jpg', 'img/cat0/1.jpg', 'img/cat0/2.jpg'];

    // $scope.cat = 'img/cat0/1.jpg';
    $scope.cat = 1;

    var mew = new Howl({
      urls: ['audio/sfx/mew.mp3'],
      sprite: {
        mew0: [
          0, 720
        ],
        mew1: [
          720, 1000
        ],
        mew2: [1650, 1700]
      }
    });

    mew.play('mew2');

    function playRandomMew() {
      // body...
      mew.play('mew' + Math.floor(Math.random() * Object.keys(mew.sprite()).length));
    }

    $scope.onSwipeRight = function() {
      $scope.cat++;
      playRandomMew();
      // $scope.cat = 'img/cat0/2.jpg';
      $timeout(function() {
        $scope.cat--;
        // $scope.cat = 'img/cat0/1.jpg';
      }, 180);
    }
    $scope.onSwipeLeft = function() {
      $scope.cat--;
      playRandomMew();
      // $scope.cat = 'img/cat0/0.jpg';
      $timeout(function() {
        $scope.cat++;
        // $scope.cat = 'img/cat0/1.jpg';
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
