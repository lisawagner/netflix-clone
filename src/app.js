import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Browse, SignIn, SignUp } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {
  // const user = null;
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          {/* this redirect forces you to the browse page even with no user */}
          <SignIn />
        </IsUserRedirect>
        {/* <Route exact path="/signin">
        <SignIn />
      </Route> */}

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <SignUp />
        </IsUserRedirect>

        {/* <Route exact path="/signup">
        <SignUp />
      </Route> */}

        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>

        {/* <Route exact path="/browse">
        <Browse />
      </Route> */}

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exact
        >
          <Home />
        </IsUserRedirect>

        {/* <Route exact path={ROUTES.HOME}>
        <Home />
      </Route> */}
      </Switch>
    </Router>
  );
}
// nonworking code:
// {
//   const { user } = useAuthListener();
//   console.log(user);
//   return (
//     <Router>
//       <Switch>
//         <IsUserRedirect
//           user={user}
//           loggedInPath={ROUTES.BROWSE}
//           PATH={ROUTES.SIGN_IN}
//         >
//           <SignIn />
//         </IsUserRedirect>
//         <IsUserRedirect
//           user={user}
//           loggedInPath={ROUTES.BROWSE}
//           PATH={ROUTES.SIGN_UP}
//         >
//           <SignUp />
//         </IsUserRedirect>

//         <ProtectedRoute user={user} path={ROUTES.BROWSE}>
//           <Browse />
//         </ProtectedRoute>

//         <IsUserRedirect
//           user={user}
//           loggedInPath={ROUTES.BROWSE}
//           path={ROUTES.HOME}
//         >
//           <Home />
//         </IsUserRedirect>
//       </Switch>
//     </Router>
//   );
// }
