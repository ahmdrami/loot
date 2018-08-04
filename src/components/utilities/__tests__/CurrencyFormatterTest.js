import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from 'enzyme';
import CurrencyFormatter from '../CurrencyFormatter';

configure({ adapter: new Adapter() });
const testProps = {
   balance : 200,

};
describe('CurrencyFormatter Component', () => {
   it('Should check the format to contain 2 decimal places and the currency sign', () => {
      const wrapper = render(<CurrencyFormatter { ...testProps} />);
      expect(wrapper.text()).toContain('£2.00');
      expect(wrapper).toMatchSnapshot();

   });
});
