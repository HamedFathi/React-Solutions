import { func } from 'prop-types';
// @ts-ignore
var TryCatch = function (_a) {
    var render = _a.try, fallBack = _a.catch;
    try {
        return render();
    }
    catch (e) {
        return fallBack(e);
    }
};
TryCatch.propTypes = {
    try: func,
    catch: func,
};
TryCatch.defaultProps = {
    try: null,
    catch: function (e) {
        throw new Error(e);
    },
};
export default TryCatch;
