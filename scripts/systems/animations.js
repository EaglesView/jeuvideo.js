export const ANIMATIONS = {
    "tweening": {
        fade: (node, property, time, easingStyle, newValue) => {
            node.style.transition = `${property} ${time}s ${easingStyle}`;
            node.style[property] = newValue;
        },

    },
    "curves": {

    },
    "complex": {
        "ui": {
            "fadeInOut": async () => {

            }
        }

    }
}