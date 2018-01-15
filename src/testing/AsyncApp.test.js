import React from 'react'
import AsyncApp from '../containers/AsyncApp'
import AddLocation from '../containers/AddLocation';
import { fromJS } from 'immutable';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()})

import { shallow, configure } from 'enzyme'

describe('<AsyncApp/>', () => {
    let props;
    beforeEach(() => {
        props = {
            selectedLocation: {
                city: 'Toronto',
                country: 'Canada'
            },
            weather: [
                {
                    isFetching: true,
                    items: [],
                    location: "",
                    lastUpdated: "",
                    id: 0
                },
                {
                    isFetching: false,
                    items: {
                        temp: 0,
                        temp_min: -100,
                        temp_max: 100
                    },
                    location: {
                        city: 'Toronto',
                        country: 'Canada'
                    },
                    lastUpdated: 0,
                    id: 1,
                    invalid: false
                }
            ]
        }
    });

    it('should render a root <div>', () => {
        const renderedComponent = shallow(<AsyncApp {...props}/>);
        expect(renderedComponent.find(<div></div>)).toHaveLength(1)
    });
})