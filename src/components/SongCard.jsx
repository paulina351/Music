import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import songImage from '../assets/little_women.jpg';

const SongCard = ({song, isPlaying, activeSong, i}) => {
  const activeSong = 'Test';

  const handlePauseClick = () => {

  }
  const handlePlayClick = () => {

  }

  return (
  <div className='flex flex-col w-[250px] p-4 backdrop-blur-sm bg-white bg-opacity-20 rounded-lg shadow-lg  justify-between animate-slideup cursor-pointer'>
    <div className='relative w-full h-56 group flex justify-center items-center'>
      <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-40 group-hover:flex ${activeSong?.title === 2 ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
        <PlayPause 
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}/>
      </div>
      <img src={songImage} alt="songimg" className='w-[150px]'/>
    </div>
    <div className='mt-4 flex flex-col'>
      <p className='text-white text-sm font-bold truncate'>Song Title</p>
      <p className='text-white text-xs mt-1'>Artist Name</p>
    </div>
  </div>
);
}


export default SongCard;
