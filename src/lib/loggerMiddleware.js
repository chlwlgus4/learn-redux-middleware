const loggerMiddleware = store => next => action => {
    console.group(action && action.type);
    console.log('이전 상태', store.getState());
    console.log('액션', action);
    next(action); //store.dispatch와 비슷한 역할
    console.log('다음 상태', store.getState());
    console.groupEnd();
}

export default loggerMiddleware;