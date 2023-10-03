import { GoPeople } from "react-icons/go";
import { LuFuel } from "react-icons/lu";
import { BsGearWideConnected, BsSpeedometer } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const CarsDetails = ({ car }) => {
    const { img, carName, fuel, gearSystem, releaseYear, rent, seat, litter } = car;
    return (
        <div>
            <div className="card bg-slate-100 shadow-xl h-full">
                <figure><img className="rounded-3xl p-2" src={img} alt="Shoes" /></figure>
                <div className="card-body p-4">
                    <div className="flex justify-between">
                        <h2 className="card-title">{carName}</h2>
                        <div>
                            <p className="text-end border-dashed border-sky-400 border-2 py-1 px-2 rounded-xl">{releaseYear}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <p className="inline"> <GoPeople className="inline text-sky-400" size={21}></GoPeople><span className="ml-2">{seat}</span> People</p>
                        <p className="inline"><LuFuel className="inline text-sky-400" size={21}></LuFuel> <span className="ml-2">{fuel}</span></p>
                        <p className="inline"><BsSpeedometer className="inline text-sky-400" size={21}></BsSpeedometer> <span className="ml-1">{litter}</span>km / litre</p>
                        <p className="inline"><BsGearWideConnected className="inline text-sky-400" size={21}></BsGearWideConnected> <span className="ml-2">{gearSystem}</span></p>
                    </div>
                    <div className="divider">

                    </div>
                    <div className="card-actions justify-end items-center">
                        <p> <span className="text-2xl font-semibold">${rent}</span> / month</p>
                        <div className="bg-blue-100 rounded-xl p-2 cursor-pointer">
                            <AiOutlineHeart className="text-sky-400" size={26}></AiOutlineHeart>
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-xl ml-3">Rent Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarsDetails;