import checkPropTypes from "check-prop-types"

export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(attr)
    return wrapper
}
export const findByTestAttrData = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper
}

export const checkProps = (component,expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
    return propsErr
}