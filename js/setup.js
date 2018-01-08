'use strict';

var WIZARD_NAMES = ['Дамблдор', 'Волдеморт', 'Доктор Стрендж', 'Гарри Потер'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListItem = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var wizards = [
  {
    name: WIZARD_NAMES[0],
    coatColor: 'rgb(241, 43, 107)'
  },
  {
    name: WIZARD_NAMES[1],
    coatColor: 'rgb(215, 210, 55)'
  },
  {
    name: WIZARD_NAMES[2],
    coatColor: 'rgb(101, 137, 164)'
  },
  {
    name: WIZARD_NAMES[3],
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

