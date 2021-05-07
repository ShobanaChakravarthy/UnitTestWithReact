import React from "react"
import {shallow} from "enzyme";
import Headline from "./index";


import {findByTestAttrData,checkProps} from "../../../Utils/index"

const setUp = (props={})=>{
    const component = shallow(<Headline {...props}/>)
    return component
}

describe('Headline Component',()=>{
    describe('Check Prop types',()=>{
        it('Should not throw a warning',()=>{
            const expectedProps = {
                header: 'Test Header',
                dsc: 'Test description',
                tempArr: [{
                    fname: 'Test fname',
                    lname: 'Test lname',
                    email: 'Test@email.com',
                    age: 24,
                    onlineStatus: false
                }]
            }
            const propsErr = checkProps(Headline,expectedProps)
            expect(propsErr).toBeUndefined()
        })
    })
    describe('Have Props',()=>{
        let wrapper;
        beforeEach(()=>{
            const props={
                header: 'Test Header',
                dsc: 'Test description'
            }
            wrapper=setUp(props);
        })
        it('Should render without errors',()=>{
            const component = findByTestAttrData(wrapper,'HeadlineComponent')
            expect(component.length).toBe(1)
        })
        it('Should render a H1',()=>{
            const component = findByTestAttrData(wrapper,'Header')
            expect(component.length).toBe(1)
        })
        it('Should render a description',()=>{
            const component = findByTestAttrData(wrapper,'Description')
            expect(component.length).toBe(1)
        })
    })
    describe('Have No Props',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper=setUp();
        })
        it('Should not render',()=>{
            const component = findByTestAttrData(wrapper,'HeadlineComponent')
            expect(component.length).toBe(0)
        })
    })
})