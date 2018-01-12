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

