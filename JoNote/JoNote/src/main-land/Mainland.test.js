import React from 'react';
import ReactDOM from 'react-dom';
import Mainland from "./Mainland";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Mainland />, div);
  ReactDOM.unmountComponentAtNode(div);
});
