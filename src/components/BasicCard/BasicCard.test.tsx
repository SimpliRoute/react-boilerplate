import * as React from 'react';
import * as ReactDOM from 'react-dom';
import BasicCard from './BasicCard';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { mount } from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BasicCard />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should render without throwing an error', () => {
    expect(mount(<BasicCard />).find(CardContent).length).toBe(1);
});

it('should have 4 typography components inside', () => {
    expect(mount(<BasicCard />).find(Typography).length).toBe(4);
});
