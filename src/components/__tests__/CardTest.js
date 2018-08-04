import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from 'enzyme';
import Card from '../Card';

configure({ adapter: new Adapter() });
const testProps = {
   item: {
      name: 'Test'
   }
};
describe('Card Component', () => {
   it('Should render the component and check the name label', () => {
      const wrapper = render(<Card { ...testProps} />);
      expect(wrapper.text()).toContain('Test');
      expect(wrapper).toMatchSnapshot();

   });
});
