import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HospitalInfoBySpeciality = () => {
    const [speciality, setSpeciality] = useState('');
    const [hospitalData, setHospitalData] = useState([]);
    const [submit, setSubmit] = useState(false);
    const [locationUrl, setLocationUrl] = useState('');

    useEffect(() => {
        if (speciality && submit) {
            setSubmit(false);
            fetchHospitalData();
        }
    }, [speciality]);

    const fetchHospitalData = () => {
        axios.get(`http://localhost:8009/hospitals?speciality=${speciality}`)
            .then(response => {
                setHospitalData(response.data);
            })
            .catch(error => {
                console.error('Error fetching hospital data:', error);
            });
    };

    const handleChange = (e) => {
        setSpeciality(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (speciality) {
            fetchHospitalData();
        }
    };

    const openLocationWindow = (locationUrl) => {
        setLocationUrl(locationUrl);
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hospital Information By Speciality</h2>
            <button 
    type="submit" 
    className="ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 absolute bottom-0 right-0 m-4"
>
 <a href="/Mainpage"> Main Menu</a> 
</button>

            <form onSubmit={handleSubmit}>
                <div className="flex items-center">
                    <label htmlFor="speciality" className="block text-sm font-medium text-gray-700 mr-2">Enter Speciality:</label>
                    <input type="text" id="speciality" name="speciality" value={speciality} onChange={handleChange} required className="p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    <button type="submit" className="ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Submit
                    </button>
                </div>
            </form>
            {hospitalData.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900">Hospitals for Speciality: {speciality}</h3>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full mt-4">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2">Hospital Name</th>
                                    <th className="px-4 py-2">Rating</th>
                                    <th className="px-4 py-2">Experience</th>
                                    <th className="px-4 py-2">Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hospitalData.map(hospital => (
                                    <tr key={hospital.id} className="bg-white">
                                        <td className="border px-4 py-2">{hospital.hospitalName}</td>
                                        <td className="border px-4 py-2">{hospital.rating}</td>
                                        <td className="border px-4 py-2">{hospital.experience}</td>
                                        <td className="border px-4 py-2">
                                            <button onClick={() => openLocationWindow(hospital.locationurl)} className="text-indigo-600 hover:text-indigo-900 focus:outline-none">View Location</button>
                                            {locationUrl === hospital.locationurl && (
                                                <div className="mt-2 border border-gray-300 p-4">
                                                    {/* <iframe title="Location" src={hospital.locationurl} className="w-full h-500" /> */}
                                                    <iframe  src={hospital.locationurl} className="w-full h-500" />
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HospitalInfoBySpeciality;
