import { useEffect, useState } from "react";
import CarsDetails from "../CarsDetails/CarsDetails";
import { BsSearch } from "react-icons/bs";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";


const CarsInfo = () => {
    const [cars, setCars] = useState([]);
    const [input, setInput] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    // pagination
    // const totalPages = Math.ceil(cars.length / itemsPerPage);
    const totalPages = 10;

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++){
        pageNumbers.push(i);
    };

    const options = [6, 10, 15];
    const handleSelectChange = (e) => {
        setItemsPerPage(e.target.value);
        setCurrentPage(1)
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

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
            });
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slice the data based on the calculated indexes
    const slicedData = searchedCars.slice(startIndex, endIndex);

    const handleSearch = (value) => {
        setInput(value);
    }

    return (
        <div className="mt-10 pb-4">
            <div className="py-4 relative px-4 bg-slate-200 mx-3 shadow-lg rounded-xl">
                <input onChange={(e) => handleSearch(e.target.value)} className="px-4 py-1 rounded-xl" type="text" name="" id="" placeholder="Search..." />
                <BsSearch className="absolute top-6 left-48"></BsSearch>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 mb-10">
                {slicedData.map(car => <CarsDetails key={car.id} car={car}></CarsDetails>)}
            </div>

            {/* Pagination */}
            <div className="text-end bg-slate-200 shadow-lg font-semibold border-t border-white mx-4 rounded-2xl"
            >
                <button onClick={() => handlePageChange(currentPage - 1)} className="inline mr-4 bg-white px-3 py-2 rounded-xl">
                    <GrFormPreviousLink className="inline" size={21}></GrFormPreviousLink>
                </button>
                {
                    pageNumbers.map(number => <button
                        key={number}
                        className={currentPage === number ? 'bg-blue-500 mr-6 text-white rounded-xl px-4 py-2 my-2' : "mr-6 bg-slate-50 rounded-xl px-4 py-2 my-2"}
                        onClick={() => setCurrentPage(number)}
                    >
                        {number}
                    </button>)
                }
                <button onClick={() => handlePageChange(currentPage + 1)} className="inline mr-4 bg-white px-3 py-2 rounded-xl">
                    <GrFormNextLink className="inline" size={21}></GrFormNextLink>
                </button>
                <select className="px-2 py-2 mr-4 rounded-xl" value={itemsPerPage} onChange={handleSelectChange}>
                    {
                        options.map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                </select>
            </div>
        </div>
    );
};

export default CarsInfo;