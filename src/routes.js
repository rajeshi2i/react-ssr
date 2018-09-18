import Home from "./components/Home";
import Nested from "./components/Nested";

export default [{
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/nested",
    component: Nested,
    exact: true,
  },
  {
    path: "/nested/:path",
    component: Nested,
    exact: true,
  }
];
