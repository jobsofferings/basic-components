import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
 
addDecorator(
  withInfo({
    header: false,
    inline: true
  })
); 