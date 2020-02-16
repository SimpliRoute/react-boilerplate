import React from 'react';
import { ShallowWrapper } from 'enzyme';

import createShallow from '@material-ui/core/test-utils/createShallow';

import { Grid } from '@material-ui/core';

import Home from './Home';

import { Provider } from 'react-redux'
import { configureStore } from '../../store/configureStore';

describe('Testing Home Component basics', () => {
    it('renders without styles', () => {
        const shallow = createShallow();

        const wrapper: ShallowWrapper = shallow(
            <Provider store={configureStore({
                tasks: []
            })}>
                <Home />
            </Provider>            
        );

        expect(wrapper.children(Home).find(Grid)).toHaveLength(0);
    });
});
