import { useDispatch, useSelector } from "react-redux";
import { Loader, Error, SongCard } from "../components";
import { genres } from "../assets/constants"

import { useGetTopSongsQuery } from "../redux/services/shazamCore";

const Discover = () => {
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    // const { data, error, isLoading } = useGetTopSongsQuery("NG");
    const genTitle = "Classics"

    // if (isLoading) return <Loader title="Loading..." />;
    // if (error) return <Error error={error} />;
    
    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-white">Discover {genTitle}</h2>
                <select 
                onChange={() => {}}
                value=""
                className="bg-white text-gray-600 p-2 text-sm rounded-md outline-none sm:mt-0 mt-5"
                >
                    {genres.map((genre) => <option value=""> {genre.title}</option>)}
                </select>

            </div>
            <p className="text-center">Find your taste with ease</p>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1, 1, 1, 1].map((song, i) => (
                    <SongCard
                    key={song.key}
                    song={song}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    i={i} />
                ))}
            </div>
        </div>
    );
}

export default Discover;
