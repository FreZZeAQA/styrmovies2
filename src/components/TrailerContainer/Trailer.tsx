import {FC} from "react";
import YouTube from "react-youtube";
import {useAppSelector} from "../../hooks";



const Trailer: FC = () => {
    const {trailer} = useAppSelector(state => state.movies)
    console.log(trailer)
    const opts = {
        height: '400',
        width: '700',
        playerVars: {
            autoplay: 1,
        },
    };
    return <YouTube videoId={trailer?.key} opts={opts}/>;
};

export {Trailer};