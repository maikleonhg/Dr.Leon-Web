// components/Dashboards/Profile.jsx

import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Edit, Cancel } from '@mui/icons-material';
import HeaderDashboardCl from '../../components/Dashboards/HeaderDashCl';
import Aside from "../../components/Dashboards/Aside";
import profileImg from '../.././assets/Default-Profile2.png'
import { getBasicProfile } from '../../services/profileService.jsx';

function Profile() {
  const [userData, setUserData] = useState({
    id: '',
    username: '',
    email: '',
  });

  useEffect(() => {
    const fetchBasicProfile = async () => {
      try {
        console.log('Fetching basic profile data...');
        const data = await getBasicProfile();
        console.log('Profile data received:', data);
        setUserData(data);
      } catch (error) {
        console.error('Error fetching basic profile:', error);
      }
    };

    fetchBasicProfile();
  }, []);

  console.log('Current user data state:', userData);

  return (
    <div className="content">
      <HeaderDashboardCl />
      <main className="flex flex-col sm:flex-row">
        <Aside className="sm:order-1 order-2" />
        <section className="flex-grow p-6 sm:order-2 order-1">
          <h2 className="text-2xl font-semibold mb-4">Información básica</h2>
          <div className="grid md:flex flex-row">
            <div className="welcome-content space-y-4 basis-1/2">
              <div className="flex flex-col">
                <span>ID</span>
                <input
                  type="text"
                  className="mt-1 p-2 bg-gray-100 border border-gray-300 rounded-md"
                  placeholder="ID"
                  value={userData.id}
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <span>Usuario</span>
                <input
                  type="text"
                  className="mt-1 p-2 bg-gray-100 border border-gray-300 rounded-md"
                  placeholder="Usuario"
                  value={userData.username}
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <span>Email</span>
                <input
                  type="email"
                  className="mt-1 p-2 bg-gray-100 border border-gray-300 rounded-md"
                  placeholder="Email"
                  value={userData.email}
                  readOnly
                />
              </div>
            </div>
  
            <div className="py-8 md:py-0 flex flex-col items-center justify-center basis-1/2">
              <img
                src={profileImg}
                alt="Perfil"
                className="w-48 h-48 rounded-full object-cover mb-4"
              />
              <label className="cursor-pointer bg-blue-500 text-white rounded-md px-4 py-2 shadow-lg inline-flex items-center hover:bg-blue-600">
                <span className="mr-2" /> Subir foto
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
          {/* <div className="flex gap-4 mt-6 justify-center">
            <Button variant="contained" startIcon={<Edit />} className="bg-blue-500 text-white">
              Editar información
            </Button>
            <Button variant="outlined" startIcon={<Cancel />} className="border-blue-500 text-blue-500">
              Cancelar
            </Button>
          </div> */}
        </section>
      </main>
    </div>
  );
}

export default Profile;
