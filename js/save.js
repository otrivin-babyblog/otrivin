'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {

  var callbacks = {
    add: function add(note) {
      // add new note callback
      var notes = localStorage.notes ? JSON.parse(localStorage.notes) : [];
      notes.push(note);
      localStorage.notes = JSON.stringify(notes);
    },
    remove: function remove(removeNote) {
      // remove note callback
      var notes = localStorage.notes ? JSON.parse(localStorage.notes) : [];
      var removeIdx = void 0;
      notes.find(function (note, idx) {
        removeIdx = idx;
        return note.id == removeNote.id;
      });
      notes.splice(removeIdx, 1);
      localStorage.notes = JSON.stringify(notes);
    }
  };

  var notes = new Notes('#notes-list', localStorage.notes ? JSON.parse(localStorage.notes) : [], 500, callbacks); // second parameter - your notes list

  // drugs list
  $('.drugs-wrapper ul li a').on('click', function (e) {
    e.preventDefault();
    var li = $(e.currentTarget).parent('li');
    var description = li.find('.description');
    var open = li.hasClass('open');
    if (open) {
      description.slideUp(300);
    } else {
      description.slideDown(300);
    }
    li.toggleClass('open');
  });
});

var Notes = function () {
  function Notes(wrapper, notes, time, callbacks) {
    _classCallCheck(this, Notes);

    this.wrapper = $(wrapper);
    this.wrapper.html('');
    this.notes = Object.assign([], notes);
    this.callbacks = Object.assign({}, callbacks);
    this.time = time;
    this.render();
    this.setFormHandlers();
    this.setNotesHandlers();
  }

  _createClass(Notes, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var notes = this.notes.reduce(function (notes, note) {
        notes += _this.renderNote(note);
        return notes;
      }, '');

      var form = '<li class="form">\n                    <form id="add-note">\n                      <div class="input">\n                        <input name="title" value="" placeholder="\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435" type="text">\n                      </div>\n                      <div class="input">\n                        <input name="phone" value="" placeholder="\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430" type="text">\n                      </div>\n                      <div class="input">\n                        <textarea name="description" placeholder="\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"></textarea>\n                      </div>\n                      <div class="button">\n                        <button type="submit">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D</button>\n                      </div>\n                    </form>\n                  </li>';

      var html = '' + notes + form;

      this.wrapper.html(html);
    }
  }, {
    key: 'renderNote',
    value: function renderNote(note) {
      return '<li>\n              <div class="top"><a data-id="' + note.id + '" class="remove" href="#"><i class="fa fa-times"></i></a></div>\n              <div class="content">\n                <p class="title">' + note.title + '</p>\n                <p class="phone">' + note.phone + '</p>\n                <p class="description">' + note.description + '</p>\n              </div>\n            </li>';
    }
  }, {
    key: 'setFormHandlers',
    value: function setFormHandlers() {
      var _this2 = this;

      var adding = false;

      this.wrapper.find('#add-note').on('submit', function (e) {
        e.preventDefault();
        if (!adding) {
          adding = true;
          var form = $(e.currentTarget);
          var titleInput = form.find('input[name="title"]');
          var title = titleInput.val().trim();
          var phoneInput = form.find('input[name="phone"]');
          var phone = phoneInput.val().trim();
          var descritionTextarea = form.find('textarea[name="description"]');
          var description = descritionTextarea.val().trim();
          if (!title || !phone) {
            if (!title) {
              titleInput.addClass('error');
            }
            if (!phone) {
              phoneInput.addClass('error');
            }
            adding = false;
          } else {
            var newId = _this2.notes.length ? _this2.notes[_this2.notes.length - 1].id + 1 : 0;
            var newNote = { id: newId, title: title, phone: phone, description: description };
            _this2.notes.push(newNote);
            if (_this2.callbacks.add) {
              _this2.callbacks.add(newNote);
            }
            var noteHtml = _this2.renderNote(newNote);
            titleInput.val('');
            phoneInput.val('');
            descritionTextarea.val('');
            form.parent('li').before(noteHtml);
            _this2.setNotesHandlers();
            adding = false;
			/*----------------------------------------*/
			
			/*----------------------------------------*/
          }
        }
      });

      this.wrapper.find('#add-note input, #add-note textarea').on('focus', function (e) {
        $(e.currentTarget).removeClass('error');
      });
    }
  }, {
    key: 'setNotesHandlers',
    value: function setNotesHandlers() {
      var _this3 = this;

      var removeLinks = this.wrapper.find('.remove');

      removeLinks.off('click');

      removeLinks.on('click', function (e) {
        e.preventDefault();
        var removeLink = $(e.currentTarget);
        removeLink.off('click');
        var removeId = removeLink.attr('data-id');
        removeLink.parents('li').remove();
        var removeIdx = 0;
        var removeNote = _this3.notes.find(function (note, idx) {
          removeIdx = idx;
          return note.id == removeId;
        });
        _this3.notes.splice(removeIdx, 1);
        if (_this3.callbacks.remove) {
          _this3.callbacks.remove(removeNote);
        }
      });
    }
  }]);

  return Notes;
}();