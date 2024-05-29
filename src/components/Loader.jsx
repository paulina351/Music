import { loader} from "../assets";

const Loader = () => (
  <div className="w-full flex justify-center items-center flex-col">
    <img src={loader} alt="Loading..." className="w-32 h-32 object-contain"/>
    <h1 className="text-bold text-2xl text-white mt-2">
      {title || 'loading...'}
    </h1>
  </div>
);

export default Loader;
