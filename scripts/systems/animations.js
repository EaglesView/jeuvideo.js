export const ANIMATIONS = {
    "tweening": {
        fade: (node, property, time, easingStyle, newValue) => {
            node.style.transition = `background-color ${time}s ${easingStyle}`;
            node.style[property] = newValue;
        },

    },
    "curves": {

    }
}