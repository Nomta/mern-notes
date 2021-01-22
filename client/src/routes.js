import { Switch, Route, Redirect } from "react-router-dom";
import NotesPage from "./pages/notes-page";
import CreatePage from "./pages/create-page";
import DetailPage from "./pages/detail-page";
import AuthPage from "./pages/auth-page";
import Navbar from "./components/Navbar";

export const useRoutes = (isAuth) => {
    if (isAuth) {
        return (
            <>
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route path="/notes" exact>
                            <NotesPage />
                        </Route>
                        <Route path="/create" exact>
                            <CreatePage />
                        </Route>
                        <Route path="/detail/:id">
                            <DetailPage />
                        </Route>
                        <Redirect to="/notes" />
                    </Switch>
                </div>
            </>
        );
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
};
