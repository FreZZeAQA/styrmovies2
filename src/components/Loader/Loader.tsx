
import {ProgressBar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAppSelector} from "../../hooks";

const Loader = () => {
    const {loading} = useAppSelector(state => state.movies);

    return (
        <div className="mt-5">
            {loading && <div className="d-flex justify-content-center">
                <ProgressBar animated now={100} style={{ width: '100%', height: '10px' ,borderRadius:0}}/></div>}
        </div>

    );
};

export {Loader};