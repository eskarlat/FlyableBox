function FlyableBox(props) {

    const validation = (props) => {
        const requiredFields = [
            'el', 'topEl', 'bottomEl'
        ];

        requiredFields.map(item => {
            if (Object.keys(props).indexOf(item) < 0) throw new Error(item + ' property is required!');
        });
    }

    const select = (selector) => {
        return document.querySelector(selector);
    }

    const setStyle = (props) => {
        Object.keys(props).map(item => el.style[item] = props[item]);
    }

    const keep = () => {
        setStyle({
            position: 'fixed',
            marginTop: defaultMargin + "px"
        })
    }

    const takeOut = () => {
        setStyle({
            position: ""
        })
    }

    const keepBootom = () => {
        setStyle({
            position: "",
            marginTop: calculateMargin + "px"
        })
    }

    validation(props);

    let rootHeight, el, elHeight, topElHeight, bottomElHeight, defaultMargin, calculateMargin = 0;
    let currentScrollValue = null;

    rootHeight = select(props.root || 'body').scrollHeight;
    el = select(props.el);

    elHeight = el.scrollHeight;
    topElHeight = select(props.topEl).scrollHeight;
    bottomElHeight = rootHeight - select(props.bottomEl).scrollHeight;

    defaultMargin = parseInt(getComputedStyle(el).margin);
    calculateMargin = bottomElHeight - elHeight - (2 * defaultMargin);

    window.addEventListener('scroll', function (el) {
        currentScrollValue = window.pageYOffset;

        if (currentScrollValue > topElHeight) {
            currentScrollValue > calculateMargin ? keepBootom() : keep();
        } else {
            takeOut();
        }
    });
}