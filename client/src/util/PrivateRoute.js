import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../services/Auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useAuth()
    // console.log(currentUser)
    return (
        <Route
            {...rest}
            render={routeProps =>
                !!currentUser ? (
                    <RouteComponent {...routeProps} />
                ) : (
                        <Redirect to={"/login"} />
                    )
            }
        />
    );
};


export default PrivateRoute