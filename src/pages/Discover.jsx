import { Loader, Error, SongCard } from "../components";
import { genres } from "../assets/constants"

const Discover = () => {
    console.log(genres)
    const genTitle = "Classics"
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
                {[1, 2, 3, 4, 5, 6, , 8, 9, 10].map((song, i) => (
                    <SongCard
                    key={song.key}
                    song={song}
                    i={i} />
                ))}
            </div>
        </div>
    );
}

export default Discover;
