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
        <div>
            {cars.map(car => <CarsDetails key={car.id} car={car}></CarsDetails>)}
        </div>
    );
};

export default CarsInfo;