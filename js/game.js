'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {

  var audio = {
    success: './files/yes.mp3',
    error: './files/no.mp3'
  };

  var callback = function callback() {
    $('.game-button').addClass('show');
  };

  var games = [{
    problem: 'Пингвиненок Ларри заболел, у него насморк :(',
    solution: 'Помоги Ларри очистить носик',
    result: {
      success: {
        title: 'Ура!!!',
        description: 'Теперь носик Ларри дышит!'
      },
      error: {
        title: 'Не помогло:(',
        description: 'попробуй другое лечение'
      }
    },
    animal: './img/game-animal-1.jpg',
    drugs: [{ title: 'Шприц', image: './img/game-drugs-1.png', background: '#f3f3f3' }, { title: 'Бутылка', image: './img/game-drugs-2.png', background: '#fbe4dd' }, { title: 'Таблетки', image: './img/game-drugs-3.png', background: '#e8f8ff', success: true }, { title: 'Молокосос', image: './img/game-drugs-4.png', background: '#f5f2e9' }]
  }, {
    problem: 'Слоненок Кеша заболел, у него насморк :(',
    solution: 'Помоги Кеше очистить носик',
    result: {
      success: {
        title: 'Ура!!!',
        description: 'Теперь носик Кеши дышит!'
      },
      error: {
        title: 'Не помогло:(',
        description: 'попробуй другое лечение'
      }
    },
    animal: './img/game-animal-2.jpg',
    drugs: [{ title: 'Шприц', image: './img/game-drugs-1.png', background: '#f3f3f3' }, { title: 'Бутылка', image: './img/game-drugs-2.png', background: '#fbe4dd' }, { title: 'Таблетки', image: './img/game-drugs-3.png', background: '#e8f8ff', success: true }, { title: 'Молокосос', image: './img/game-drugs-4.png', background: '#f5f2e9' }]
  }, {
    problem: 'Кит Вася заболел, у него насморк :(',
    solution: 'Помоги Васе очистить носик',
    result: {
      success: {
        title: 'Ура!!!',
        description: 'Теперь носик Васи дышит!'
      },
      error: {
        title: 'Не помогло:(',
        description: 'попробуй другое лечение'
      }
    },
    animal: './img/game-animal-3.jpg',
    drugs: [{ title: 'Шприц', image: './img/game-drugs-1.png', background: '#f3f3f3' }, { title: 'Бутылка', image: './img/game-drugs-2.png', background: '#fbe4dd' }, { title: 'Таблетки', image: './img/game-drugs-3.png', background: '#e8f8ff', success: true }, { title: 'Молокосос', image: './img/game-drugs-4.png', background: '#f5f2e9' }]
  }];

  var game = new Game('#game', audio, 500, callback);

  var runGame = function runGame(e) {
    if (e) {
      e.preventDefault();
    }
    $('.game-button').removeClass('show');
    var gameId = Math.floor(Math.random() * games.length);
    game.setGame(games[gameId]);
  };

  runGame();
  $('.game-button a').on('click', runGame);
});

var Game = function () {
  function Game(wrapper, audio, time, callback) {
    _classCallCheck(this, Game);

    this.wrapper = $(wrapper);
    this.wrapper.html('');
    this.audio = {
      success: new Audio(audio.success),
      error: new Audio(audio.error)
    };
    this.time = time;
    this.callback = callback;
  }

  _createClass(Game, [{
    key: 'setGame',
    value: function setGame(game) {
      this.busy = false;
      this.status = false;
      this.active = false;
      this.wrapper.removeClass('success error');
      this.game = Object.assign({}, game);
      this.removeHandlers();
      this.renderGame();
      this.setHandlers();
      this.play();
    }
  }, {
    key: 'renderGame',
    value: function renderGame() {

      var drugs = this.game.drugs.reduce(function (drugs, drug, idx) {
        if (idx < 4) {
          drugs += '<li>\n                    <a data-id="' + idx + '" href="#" title="' + drug.title + '" style="background: ' + drug.background + '">\n\n                        <img src="' + drug.image + '" alt="' + drug.title + '">\n\n                    </a>\n                  </li>';
        }
        return drugs;
      }, '');

      var html = '<div class="game-animal-wrapper">\n                    <p class="title">' + (this.game.problem || '') + '</p>\n                    <div class="game-animal" style="background-image: url(' + this.game.animal + ')">\n                      <img class="drugs" src="' + this.game.animal + '" alt="">\n                      <div class="message error">\n                        <p>' + this.game.result.error.title + '</p>\n                        <span>' + this.game.result.error.description + '</span>\n                      </div>\n                      <div class="message success">\n                        <p>' + this.game.result.success.title + '</p>\n                        <p>' + this.game.result.success.description + '</p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class="game-drugs">\n                    <p class="title">' + (this.game.solution || '') + '</p>\n                    <ul>' + drugs + '</ul>\n                  </div>\n                  <img class="active-drug" src="" alt="">';

      this.wrapper.html(html);
    }
  }, {
    key: 'setHandlers',
    value: function setHandlers() {
      var _this = this;

      this.wrapper.find('.game-animal').on('click', function (e) {
        e.preventDefault();
        if (!_this.busy) {
          _this.play();
        }
      });

      this.wrapper.find('.game-drugs ul li a').on('click', function (e) {

        e.preventDefault();
        var a = $(e.currentTarget);
        var dataId = a.attr('data-id');

        if (!_this.busy && _this.active !== dataId && !_this.status) {
          (function () {

            _this.busy = true;
            _this.active = dataId;
            _this.stop();
            var drug = _this.game.drugs[a.attr('data-id')];
            var animalDrugImage = _this.wrapper.find('.game-animal img.drugs');
            var activeDrug = _this.wrapper.find('.active-drug');
            var start = a.position();
            var startWidth = a.find('img').width();
            var finish = _this.wrapper.find('.game-animal').position();
            finish.top += animalDrugImage.position().top;
            finish.left += animalDrugImage.position().left;
            var finishWidth = animalDrugImage.width();

            _this.wrapper.find('.game-drugs ul li a').removeClass('active');
            a.addClass('active');
			
            //_this.status = drug.success || false;
            if (dataId!='3'){
				_this.status = false;
			}else{
				_this.status = true;
			}
			
			_this.wrapper.removeClass('success error');

            animalDrugImage.removeClass('show').attr('src', drug.image);

            activeDrug.attr('src', drug.image).addClass('show').css({ top: start.top, left: start.left, width: startWidth }).animate({ top: finish.top, left: finish.left, width: finishWidth }, _this.time, function () {
              activeDrug.removeClass('show');
              animalDrugImage.addClass('show');
              _this.busy = false;
              _this.play();
              _this.wrapper.addClass(_this.status ? 'success' : 'error');
              if (_this.status) {
                _this.callback.call(_this);
              }
            });
          })();
        }
      });
    }
  }, {
    key: 'removeHandlers',
    value: function removeHandlers() {
      this.wrapper.find('.game-animal').off('click');
      this.wrapper.find('.game-drugs ul li a').off('click');
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.audio.success.pause();
      this.audio.error.pause();
      this.audio.success.currentTime = 0;
      this.audio.error.currentTime = 0;
    }
  }, {
    key: 'play',
    value: function play() {
      this.stop();
      if (this.status) {
        this.audio.success.play();
      } else {
        this.audio.error.play();
      }
    }
  }]);

  return Game;
}();