// @flow

import Reactotron, { trackGlobalErrors } from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";

Reactotron.configure({})
  .use(trackGlobalErrors())
  .use(reactotronRedux())
  .connect();

export default Reactotron.createStore;
