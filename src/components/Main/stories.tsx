import { withKnobs, text } from '@storybook/addon-knobs'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
}

export const Basic = () => (
  <Main
    title={text('Title', 'Boilerplate React with NextJS')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS, Styled Components, React Testing Library and Jest'
    )}
  />
)
