import UIInput from './UIInput/UIInput.vue';
import UIButton from './UIButton.vue';
import UIContainer from './UIContainer.vue';
import UIRadio from './UIRadio.vue';
import UICheckbox from './UICheckbox.vue';
import UIForm from './UIForm.vue';
import UISpiner from './UISpiner.vue';
import UIInfoBlock from './UIInfoBlock.vue';
import UIClose from './UIClose.vue';

export default [
  {
    name: 'ui-input',
    ...UIInput
  },
  {
    name: 'ui-button',
    ...UIButton
  },
  {
    name: 'ui-container',
    ...UIContainer
  },
  {
    name: 'ui-radio',
    ...UIRadio
  },
  {
    name: 'ui-checkbox',
    ...UICheckbox
  },
  {
    name: 'ui-form',
    ...UIForm
  },
  {
    name: 'ui-spiner',
    ...UISpiner
  },
  {
    name: 'ui-info-block',
    ...UIInfoBlock
  },
  {
    name: 'ui-close',
    ...UIClose
  }
];