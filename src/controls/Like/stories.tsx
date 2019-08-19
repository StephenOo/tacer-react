import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import Like from '.'

storiesOf('Like', module)
  .add('default', () => <Like count={10} />)
  .add('withAction', () => <Like count={10} onClick={action('click')} />)
