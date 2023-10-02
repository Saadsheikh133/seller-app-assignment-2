import { useEffect, useState } from "react";
import CarsDetails from "../CarsDetails/CarsDetails";


const CarsInfo = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch("../../../public/cars-info.json")
            .then(res => res.json())
        .then(data => setCars(data))
    },[])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
            {cars.map(car => <CarsDetails key={car.id} car={car}></CarsDetails>)}
        </div>
    );
};

export default CarsInfo;