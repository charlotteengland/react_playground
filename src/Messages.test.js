import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';
import renderer from 'react-test-renderer';

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<Messages name="Messages" unread={4}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });