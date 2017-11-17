let middleware = (to, from, next) => {
    alert('sorry you cant get here!')
    return false;
};

export default middleware
