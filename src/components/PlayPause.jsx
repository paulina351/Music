import { faPauseCircle, faPlayCircle } from 'react-icons/fa';

const PlayPause = ({isPlaying, activeSong, song, handlePause, handlePlay}) => (
  <div className='flex gap-4'>
    {isPlaying && activeSong?.title === 2 ? (
        <FaPauseCircle size={30} className='text-white text-2xl' onClick={handlePause}/>
    ) : (
        <FaPlayCircle size={30} className='text-white text-2xl' onClick={handlePlay}/>
    )}
  </div>
);

export default PlayPause;
