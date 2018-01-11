'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListItem = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var wizards = [
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
    coatColor: 'rgb(241, 43, 107)'
  },
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
    coatColor: 'rgb(215, 210, 55)'
  },
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
    coatColor: 'rgb(101, 137, 164)'
  },
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
    coatColor: 'rgb(127, 127, 127)'
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;

  return wizardElement;
};


var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));

}
similarListItem.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

