export const addone = (dt) => dispatch => {
    try {
        alert(dt);

        dispatch({
            type:'addone',
            payload:dt
        });
    } catch (err) {
        
    }
};