import React from "react";

import { withLayout } from "./layout/_Layout";
import { Auth } from "./pages";

const App = () => <Auth />;

export default withLayout(App);
