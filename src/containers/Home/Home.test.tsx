import React from 'react';
import { ShallowWrapper } from 'enzyme';
import createShallow from '@material-ui/core/test-utils/createShallow';
import Grid from '@material-ui/core/Grid';
import { Home } from './Home';

describe('Testing Home Component basics', () => {
    it('renders without styles', () => {
        const shallow = createShallow();

        const params = {
            tasks: [],
            addTask: jest.fn(),
            classes: { root: '' },
        };

        const wrapper: ShallowWrapper = shallow(<Home {...params} />);

        expect(wrapper.find(Grid)).toHaveLength(3);
    });
});
