import React from 'react';
import ReactDOM from 'react-dom';
import Title from '../component/common/TitleComponent';
import GridComponent from '../component/common/GridComponent';
import SelectedTag from '../component/common/SelectedTag';
import renderer from 'react-test-renderer';

describe('Title', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Title/>, div);
    });
});
describe('GridComponent', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GridComponent/>, div);
    });
});
test('Title changes the class when hovered', () => {
    const component = renderer.create(
        <Title text="test"></Title>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
test('Title changes the class when hovered', () => {
    const component = renderer.create(
        <SelectedTag/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onChange();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});