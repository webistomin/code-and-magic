'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closePopup();
  }
});

userNameInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListItem = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var wizards = [
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
    surname: WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)],
    eyesColor: EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)],
    coatColor: COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)]
  },
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
    surname: WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)],
    eyesColor: EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)],
    coatColor: COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)]
  },
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
    surname: WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)],
    eyesColor: EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)],
    coatColor: COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)]
  },
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
    surname: WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)],
    eyesColor: EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)],
    coatColor: COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name + ' ' + wizards[i].surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;


  return wizardElement;
};


var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));

}
similarListItem.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');

/* Раскрашиваем волшебника по клику */

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');

var onClickChangeCoatColor = function () {
  wizardCoat.setAttribute('style', 'fill: ' + COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)]);
};

wizardCoat.addEventListener('click', onClickChangeCoatColor);

var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');

var onClickChangeEyesColor = function () {
  wizardEyes.setAttribute('style', 'fill: ' + EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)]);
};

wizardEyes.addEventListener('click', onClickChangeEyesColor);

var wizardFireball = document.querySelector('.setup-fireball-wrap');

var onClickChangeFireballColor = function () {
  wizardFireball.setAttribute('style', 'background-color: ' + FIREBALL_COLOR[Math.floor(Math.random() * FIREBALL_COLOR.length)]);
};

wizardFireball.addEventListener('click', onClickChangeFireballColor);

/* Реализуем драг-н-дроп */

var dialogHandle = setup.querySelector('.setup-user-pic');

dialogHandle.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    if (moveEvt.clientY < 0 || moveEvt.clientY > window.innerHeight) {
      setup.style.top = 0 + 'px';
    } else {
      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    }
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

/* Перетаскиваем артефакты */

var shopElement = document.querySelector('.setup-artifacts-shop');
var draggedItem = null;

shopElement.addEventListener('dragstart', function (evt) {
  if (evt.target.tagName.toLowerCase() === 'img') {
    draggedItem = evt.target;
    evt.dataTransfer.setData('text/plain', evt.target.alt);
  }
});

var artifactElements = document.querySelector('.setup-artifacts');

artifactElements.addEventListener('dragover', function (evt) {
  evt.preventDefault();
  return false;
});

artifactElements.addEventListener('drop', function (evt) {
  evt.target.style = '';
  evt.target.appendChild(draggedItem);
  evt.preventDefault();
});

artifactElements.addEventListener('dragenter', function (evt) {
  evt.target.style.backgroundColor = 'yellow';
  evt.preventDefault();
});

artifactElements.addEventListener('dragleave', function (evt) {
  evt.target.style.backgroundColor = '';
  evt.preventDefault();
});
