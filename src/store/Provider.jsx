import { Provider } from "react-redux";
import store from "./index.js";

export function Providers({ children }) {
    return <Provider store={store}>{children}</Provider>;
}
