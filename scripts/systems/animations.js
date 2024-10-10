export const ANIMATIONS = {
    "tweening": {
        fade: (node, time, easingStyle, newColor) => {
            node.style.transition = `background-color ${time}s ${easingStyle}`;
            node.style.backgroundColor = newColor;

        }
    },
    "curves": {

    }
}