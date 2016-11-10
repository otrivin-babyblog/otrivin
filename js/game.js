
$(() => {

  const callback = () => {
    $('.game-button').addClass('show');
  };

  const games = [
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
        success: './files/yes.mp3',
        error: './files/no.mp3'
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
        success: './files/yes.mp3',
        error: './files/no.mp3'
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
        success: './files/yes.mp3',
        error: './files/no.mp3'
      },
      drugs: [
        { title: 'Шприц', image: './img/game-drugs-1.png', background: '#f3f3f3' },
        { title: 'Бутылка', image: './img/game-drugs-2.png', background: '#fbe4dd' },
        { title: 'Таблетки', image: './img/game-drugs-3.png', background: '#e8f8ff', success: true },
        { title: 'Аспиратор', image: './img/game-drugs-4.png', background: '#f5f2e9' }
      ]
    }
  ];

  const game = new Game('#game', 500, callback);

  const runGame = (e) => {
    if (e) {
      e.preventDefault();
    }
    $('.game-button').removeClass('show');
    const gameId = Math.floor(Math.random() * (games.length));
    game.setGame(games[gameId]);
  };

  runGame();
  $('.game-button a').on('click', runGame);

});

class Game {

  constructor (wrapper, time, callback) {
    this.wrapper = $(wrapper);
    this.wrapper.html('');
    this.time = time;
    this.callback = callback;
	    this.audioPlayer = new Audio();

	
  }

  setGame (game) {
    this.busy = false;
    this.status = false;
    this.active = false;
    this.wrapper.removeClass('success error');
    this.game = Object.assign({}, game);
    /*if (this.audio) {
      this.stop();
    }
    this.audio = {
      success: new Audio(game.audio.success),
      error: new Audio(game.audio.error)
    };*/
	        this.audio = game.audio;


    this.removeHandlers();
    this.renderGame();
    this.setHandlers();
    //this.play();
  }

  renderGame () {

    const drugs = this.game.drugs.reduce((drugs, drug, idx) => {
      if (idx < 4) {
        drugs += `<li>
                    <a data-id="${idx}" href="#" title="${drug.title}" style="background: ${drug.background}">
                      <img src="${drug.image}" alt="${drug.title}">
                    </a>
                  </li>`;
      }
      return drugs;
    }, '');

    const html = `<div class="game-animal-wrapper">
                    <p class="title" >${this.game.problem || ''}</p>
                    <div class="game-animal" style="background-image: url(${this.game.animal.error})">
                      <img class="drugs" src="" alt="">
                      <div class="message error">
                        <p>${this.game.result.error.title}</p>
                        <span>${this.game.result.error.description}</span>
                      </div>
                      <div class="message success">
                        <p>${this.game.result.success.title}</p>
                        <p>${this.game.result.success.description}</p>
                      </div>
                    </div>
                  </div>
                  <div class="game-drugs">
                    <p class="title">${this.game.solution || ''}</p>
                    <ul>${drugs}</ul>
                  </div>
                  <img class="active-drug" src="" alt="">`;

    this.wrapper.html(html);

  }

  setHandlers () {

    this.wrapper.find('.game-animal').on('click', e => {
      e.preventDefault();
      if (!this.busy) {
        this.play();
      }
    })/*.trigger('click')*/;

    this.wrapper.find('.game-drugs ul li a').on('click', e => {

      e.preventDefault();
      const a = $(e.currentTarget);
      const dataId = a.attr('data-id');

      if (!this.busy && this.active !== dataId && !this.status) {

        this.busy = true;
        this.active = dataId;
        //this.stop();
        const drug = this.game.drugs[a.attr('data-id')];
        const animalDrugImage = this.wrapper.find('.game-animal img.drugs');
        const activeDrug = this.wrapper.find('.active-drug');
        const start = a.position();
        const startWidth = a.find('img').width();
        const finish = this.wrapper.find('.game-animal').position();
        finish.top += animalDrugImage.position().top;
        finish.left += animalDrugImage.position().left;
        const finishWidth = animalDrugImage.width();

        this.wrapper.find('.game-drugs ul li a').removeClass('active');
        a.addClass('active');
		
		
        //this.status = drug.success || false;
		
		 if (dataId!='3'){
				this.status = false;
			}else{
				this.status = true;
			}
			
			
        this.wrapper.removeClass('success error');

        animalDrugImage.removeClass('show').attr('src', drug.image);

        activeDrug
          .attr('src', drug.image)
          .addClass('show')
          .css({ top: start.top, left: start.left, width: startWidth })
          .animate({ top: finish.top, left: finish.left, width: finishWidth }, this.time, () => {
            activeDrug.removeClass('show');
            animalDrugImage.addClass('show');
            this.busy = false;
           
            this.wrapper.addClass((this.status) ? 'success' : 'error');
            if (this.status) {
              this.wrapper.find('.game-animal').css('background-image', `url(${this.game.animal.success})`);
              this.callback.call(this);
            }
          });
		   this.play();

      }

    });

  }

  removeHandlers () {
    this.wrapper.find('.game-animal').off('click');
    this.wrapper.find('.game-drugs ul li a').off('click');
  }

  /*stop () {
    this.audio.success.pause();
    this.audio.error.pause();
    this.audio.success.currentTime = 0;
    this.audio.error.currentTime = 0;
  }*/

  play () {
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

}




