import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import NotAuthorizedRoutes from "./routes/NotAuthorizedRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import { getAuthSelector } from "./store/reducers/auth.reducer";

import { getTokenStorageData } from "./utils/functions";
import { loginAction } from "./store/actions/auth.actions";

const App = () => {
  const isAuth = useSelector(getAuthSelector);
const dispatch =useDispatch();

  useEffect(() => {
    const authData = getTokenStorageData();
    if(authData){
dispatch(loginAction(authData));
    }
  }, []);

  return isAuth ? <PrivateRoutes /> : <NotAuthorizedRoutes />;
};

export default App;
