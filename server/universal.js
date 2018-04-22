import App from "../src/containers/index";
import { sendFileToHtml } from "./engine/ssr";
import rootReducer from "../src/redux/reducers/index";

const universalLoader = (req, res) => {
  // Load in our HTML file from our build
  sendFileToHtml({
    rootReducer,
    filePathName: "../../build/index.html",
    component: App,
    res,
    req
  });
};

export default universalLoader;
