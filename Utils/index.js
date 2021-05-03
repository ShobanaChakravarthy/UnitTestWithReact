export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(attr)
    return wrapper
}
export const findByTestAttrData = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper
}
