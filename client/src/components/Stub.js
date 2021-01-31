import { useCallback } from "react";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

function Stub(status) {
    const getComponent = useCallback(() => {
        switch (status) {
            case "loading":
                return <Loader />;
            default:
                return <Loader />;
        }
    }, [status]);

    return <Layout>{getComponent()}</Layout>;
}

export default Stub;
