import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import hospital from "../assets/hospital.png"

const HospitalForm = () => {
    const [formData, setFormData] = useState({
        hospitalName: '',
        speciality: '',
        location: '',
        rating: '',
        experience: '',
        latitude: '',
        longitude: '',
        locationurl: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8009/hospitals', formData);
            console.log('Hospital data saved:', response.data);
            // Reset form data after successful submission
            setFormData({
                hospitalName: '',
                speciality: '',
                location: '',
                rating: '',
                experience: '',
                latitude: '',
                longitude: '',
                locationurl: ''
            });
            // Navigate to main page or any other route after submission
            navigate('/mainpage');
        } catch (error) {
            console.error('Error saving hospital data:', error);
        }
    };

    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <p className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Hospital Form</p>
                            <div className="mt-6 text-lg leading-8 text-gray-600">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                                        <div className="sm:col-span-2">
                                            <label htmlFor="hospitalName" className="block text-sm font-medium leading-6 text-gray-900">Hospital Name</label>
                                            <input
                                                type="text"
                                                id="hospitalName"
                                                name="hospitalName"
                                                value={formData.hospitalName}
                                                onChange={handleChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="speciality" className="block text-sm font-medium leading-6 text-gray-900">Speciality</label>
                                            <input
                                                type="text"
                                                id="speciality"
                                                name="speciality"
                                                value={formData.speciality}
                                                onChange={handleChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">Location</label>
                                            <input
                                                type="text"
                                                id="location"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="rating" className="block text-sm font-medium leading-6 text-gray-900">Rating</label>
                                            <input
                                                type="text"
                                                id="rating"
                                                name="rating"
                                                value={formData.rating}
                                                onChange={handleChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="experience" className="block text-sm font-medium leading-6 text-gray-900">Experience</label>
                                            <input
                                                type="text"
                                                id="experience"
                                                name="experience"
                                                value={formData.experience}
                                                onChange={handleChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="latitude" className="block text-sm font-medium leading-6 text-gray-900">Latitude</label>
                                            <input
                                                type="text"
                                                id="latitude"
                                                name="latitude"
                                                value={formData.latitude}
                                                onChange={handleChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="longitude" className="block text-sm font-medium leading-6 text-gray-900">Longitude</label>
                                            <input
                                                type="text"
                                                id="longitude"
                                                name="longitude"
                                                value={formData.longitude}
                                                onChange={handleChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="locationurl" className="block text-sm font-medium leading-6 text-gray-900">Location URL</label>
                                            <input
                                                type="text"
                                                id="locationurl"
                                                name="locationurl"
                                                value={formData.locationurl}
                                                onChange={handleChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsqPshzGRyYPoMUJpdwqnm_--mip6tVDlUWw&usqp=CAU"
                        alt="Product screenshot"
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        width={2432}
                        height={1442}
                    />
                </div>
            </div>
        </div>
    );
};

export default HospitalForm;
