import { useEffect, useState } from "react";
import CarsDetails from "../CarsDetails/CarsDetails";
import { BsSearch } from "react-icons/bs";


const CarsInfo = () => {
    const [cars, setCars] = useState([]);
    const [input, setInput] = useState("");

    // console.log(input)
    useEffect(() => {
        fetch("../../../public/cars-info.json")
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    const searchedCars =
        input === ''
            ? cars
            : cars.filter((car) => {
                return car.carName.toLowerCase().includes(input.toLowerCase())
            })

    const handleSearch = (value) => {
        setInput(value);
    }

    return (
        <div className="mt-10">
            <div className="py-4 relative px-4 bg-slate-200 mx-3 shadow-lg rounded-xl">
                <input onChange={(e) => handleSearch(e.target.value)} className="px-4 py-1 rounded-xl" type="text" name="" id="" placeholder="Search..." />
                <BsSearch className="absolute top-6 left-48"></BsSearch>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 shadow-md p-4">
                {searchedCars.map(car => <CarsDetails key={car.id} car={car}></CarsDetails>)}
            </div>
        </div>
    );
};

export default CarsInfo;