import React from 'react'
import Link from './Link.react'
import renderer from 'react-test-renderer'

test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Link page="https://github.com/EricTweeds/Bespoke-Front-End-Project">Repo</Link>
    )
    //test default
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    //test with mouse hover
    tree.props.onMouseEnter()
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    //test after mouse leaves
    tree.props.onMouseLeave()
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})