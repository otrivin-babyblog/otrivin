'use strict'

function navi(code){
	var objBrowse = window.navigator;
	if (objBrowse.appName == "Opera") {
		
		if (code==1){
			return './files/yes.wav';
		}else
		return './files/no.wav';
	}else
		{
			if (code==1){
				return './files/yes.mp3';
			}else
			return './files/no.mp3';
		}
}

function callback(){
    $('.game-button').addClass('show');
  };
var pd;
var games = [
    {
      problem: 'Пингвиненок Ларри заболел, у него насморк&nbsp;:&nbsp;(',
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
      animal: {
        success: './img/game-animal-1-success.jpg',
        error: './img/game-animal-1.jpg',
      },
      audio: {
        success: navi(1),
        error: navi(0)
      },
      drugs: [
        { title: 'Шприц', image: './img/game-drugs-1.png', background: '#f3f3f3' },
        { title: 'Бутылка', image: './img/game-drugs-2.png', background: '#fbe4dd' },
        { title: 'Таблетки', image: './img/game-drugs-3.png', background: '#e8f8ff', success: true },
        { title: 'Аспиратор', image: './img/game-drugs-4.png', background: '#f5f2e9' }
      ]
    },
    {
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
      animal: {
        success: './img/game-animal-2-success.jpg',
        error: './img/game-animal-2.jpg',
      },
      audio: {
        success: navi(1),
        error: navi(0)
      },
      drugs: [
        { title: 'Шприц', image: './img/game-drugs-1.png', background: '#f3f3f3' },
        { title: 'Бутылка', image: './img/game-drugs-2.png', background: '#fbe4dd' },
        { title: 'Таблетки', image: './img/game-drugs-3.png', background: '#e8f8ff', success: true },
        { title: 'Аспиратор', image: './img/game-drugs-4.png', background: '#f5f2e9' }
      ]
    },
    {
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
      animal: {
        success: './img/game-animal-3-success.jpg',
        error: './img/game-animal-3.jpg',
      },
      audio: {
        success: navi(1),
        error: navi(0)
      },
      drugs: [
        { title: 'Шприц', image: './img/game-drugs-1.png', background: '#f3f3f3' },
        { title: 'Бутылка', image: './img/game-drugs-2.png', background: '#fbe4dd' },
        { title: 'Таблетки', image: './img/game-drugs-3.png', background: '#e8f8ff', success: true },
        { title: 'Аспиратор', image: './img/game-drugs-4.png', background: '#f5f2e9' }
      ]
    }
  ];

function Game(data,wrapper) {
  this.game = data || 0;
  this.time = 500;
  this.wrapper = wrapper || '';
  
  this.audioPlayer = new Audio();
	this.busy = false;
    this.status = false;
    this.active = false;
	
	if (this.wrapper != ''){
    this.wrapper.removeClass('success error');}
	
	this.audio = data.audio;
}

Game.prototype.renderGame = function(param1,param2) {

	//console.log(param1.drugs);
	var temp = param1.drugs;
	var str='';
	
    var drugs = param1.drugs.reduce(function(str, drug, idx) {
      if (idx < 4) {
        str += '<li><a data-id="'+idx+'" href="#" title="'+drug.title+'" style="background: '+drug.background+'">'+
                      '<img src="'+drug.image+'" alt="'+drug.title+'">'+
                    '</a>'+
                  '</li>';
      }
      return str;
    }, '');
		
    var html = '<div class="game-animal-wrapper">'+
                    '<p class="title" >'+(param1.problem || '')+'</p>'+
                    '<div class="game-animal" style="background-image: url('+param1.animal.error+')">'+
                      '<img class="drugs" src="" alt="">'+
                      '<div class="message error">'+
                        '<p>'+param1.result.error.title+'</p>'+
                        '<span>'+param1.result.error.description+'</span>'+
                      '</div>'+
                      '<div class="message success">'+
                        '<p>'+param1.result.success.title+'</p>'+
                        '<p>'+param1.result.success.description+'</p>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="game-drugs">'+
                   ' <p class="title">'+(param1.solution || '')+'</p>'+
                    '<ul>'+drugs+'</ul>'+
                  '</div>'+
                  '<img class="active-drug" src="" alt="">';

    param2.html(html);

}

Game.prototype.removeHandlers = function() {
    this.wrapper.find('.game-animal').off('click');
    this.wrapper.find('.game-drugs ul li a').off('click');
}

Game.prototype.setHandlers = function() {
	
	var  _this = this;
	
    _this.wrapper.find('.game-animal').on('click', function(e){
		
		console.log('play');
      e.preventDefault();
      if (!_this.busy) {
        _this.play();
      }
    })/*.trigger('click')*/;
	
	//-----------------------------------------------------------------------
	
	  _this.wrapper.find('.game-drugs ul li a').on('click',function(e) {

	   e.preventDefault();
      var a = $(e.currentTarget);
      var dataId = a.attr('data-id');

      if (!_this.busy && _this.active !== dataId && !_this.status) {

        _this.busy = true;
        _this.active = dataId;
        //this.stop();
		
		
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
		
		
        //this.status = drug.success || false;
		
		 if (dataId!='3'){
				_this.status = false;
			}else{
				_this.status = true;
			}
			
			
        _this.wrapper.removeClass('success error');

        animalDrugImage.removeClass('show').attr('src', drug.image);

        activeDrug
          .attr('src', drug.image)
          .addClass('show')
          .css({ top: start.top, left: start.left, width: startWidth })
          .animate({ top: finish.top, left: finish.left, width: finishWidth }, _this.time,function() {
																							activeDrug.removeClass('show');
																							animalDrugImage.addClass('show');
																							_this.busy = false;
																						   
																							_this.wrapper.addClass((_this.status) ? 'success' : 'error');
																							if (_this.status) {
																							  _this.wrapper.find('.game-animal').css('background-image', 'url('+_this.game.animal.success+')');
																							  //this.callback.call(this);
																							}
																						  });
		   _this.play();

      }

    });
	
	
}


Game.prototype.play = function() {
    //this.stop();
    if (this.status) {
     // this.audio.success.play();
	       this.audioPlayer.src = this.audio.success;

    } else {
     // this.audio.error.play();
	       this.audioPlayer.src = this.audio.error;

    }
	    this.audioPlayer.play();

}


function runGame(){
var game = games[Math.floor(Math.random() * (games.length))];
	game = Object.assign({}, game);	
	pd = new Game(game,$('#game'));	 
  
 
  pd.removeHandlers();
  pd.renderGame(pd.game,pd.wrapper);
  pd.setHandlers();
  callback();
}


  
  
runGame();
$('.game-button a').on('click', runGame);  