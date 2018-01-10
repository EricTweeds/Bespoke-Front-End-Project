import React from 'react'
import App from '../containers/App'
import MemoryRouter from 'react-router-dom/MemoryRouter';
import AsyncApp from '../containers/AsyncApp';
import PageNotFound from '../components/PageNotFound';
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter()})

import { mount, configure } from 'enzyme'

test('Page Not Found displayed for unassigned routes', () => {
    const component = mount(
        <MemoryRouter initalEntries={['/random']}>
            <App/>
        </MemoryRouter>
    )       
    
    expect(component.find(AsyncApp)).toHaveLength(0)
    expect(component.find(PageNotFound)).toHaveLength(1)
})

