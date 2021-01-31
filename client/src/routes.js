import { Switch, Route, Redirect } from "react-router-dom";
import NotesPage from "./pages/notes-page";
import CreatePage from "./pages/create-page";
import DetailPage from "./pages/detail-page";
import AuthPage from "./pages/auth-page";
import Layout from "./components/Layout";

export const useRoutes = (isAuth) => {
    if (isAuth) {
        return (
            <Layout>
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
            </Layout>
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
