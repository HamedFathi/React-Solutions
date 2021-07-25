
import { func } from 'prop-types';
// @ts-ignore
const TryCatch = ({ try: render, catch: fallBack }) => {
  try {
    return render();
  } catch (e) {
    return fallBack(e);
  }
};

TryCatch.propTypes = {
  try: func,
  catch: func,
};

TryCatch.defaultProps = {
  try: null,
  catch: (e: string | undefined) => {
    throw new Error(e);
  },
};

export default TryCatch;
