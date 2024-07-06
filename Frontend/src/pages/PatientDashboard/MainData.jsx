// mainData.jsx

import React, { useState, useEffect } from "react";
import Aside from "../../components/Dashboards/Aside";
import { Button, LinearProgress, Checkbox } from "@mui/material";
import { Settings, Notifications, ExitToApp, HomeRounded } from "@mui/icons-material";
import HeaderDashboardCl from "../../components/Dashboards/HeaderDashCl";
import { updateMainData, getProfile } from '../../services/profileService.jsx'; // Asegúrate de que la ruta sea correcta

function MainData() {
  const [checkedItems, setCheckedItems] = useState({});
  const [formData, setFormData] = useState({
    fullname: '',
    age: '',
    sex: '',
    race: '',
    height: '',
    weight: '',
    comorbidity: '',
    details: {
      alergias: '',
      medicamentos: '',
      alcohol: '',
      tabaquismo: '',
      drogas: ''
    }
  });

  const detailsMap = {
    alergias: "Indícanos a qué eres alérgico",
    medicamentos: "Uso medicamentos y frecuencia",
    alcohol: "Frecuencia de ingesta de alcohol",
    tabaquismo: "Consumo de cigarros/día",
    drogas: "Droga, cantidad y frecuencia",
  };

  const fieldLabels = {
    fullname: "Nombre Completo",
    age: "Edad",
    sex: "Sexo",
    race: "Raza",
    height: "Altura",
    weight: "Peso"
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const data = await getProfile();
        setFormData({
          fullname: data.fullname || '',
          age: data.age || '',
          sex: data.sex || '',
          race: data.race || '',
          height: data.height || '',
          weight: data.weight || '',
          comorbidity: data.comorbidity || '',
          details: {
            alergias: data.alergics || '',
            medicamentos: data.whichMedications || '',
            alcohol: data.howMuchAlcohol || '',
            tabaquismo: data.howManyCigars || '',
            drogas: data.howManyDrugs || ''
          }
        });

        // Update checkedItems based on the fetched data
        setCheckedItems({
          alergias: !!data.alergics,
          medicamentos: !!data.whichMedications,
          alcohol: !!data.howMuchAlcohol,
          tabaquismo: !!data.howManyCigars,
          drogas: !!data.howManyDrugs
        });
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  const handleChange = (field) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDetailChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      details: {
        ...prevState.details,
        [name]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateMainData(formData);
      console.log('Data updated successfully:', response);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  

  return (
    <div className="select-none">
      <HeaderDashboardCl />
      <main className="flex">
        <Aside />
        <section className="p-6 flex-1">
          <h2 className="mb-5 text-2xl font-semibold">Historia médica</h2>

          <div className="space-y-4">
            <div className="grid grid-cols-2 md:flex justify-around gap-0 px-2">
              {["Alergias", "Medicamentos", "Alcohol", "Tabaquismo", "Drogas"].map((item, index) => (
                <div key={index} className="flex items-center">
                  <Checkbox 
                    color="secondary" 
                    onChange={() => handleChange(item.toLowerCase())} 
                    checked={checkedItems[item.toLowerCase()] || false}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-2 px-2">
              {Object.keys(fieldLabels).map((item, index) => (
                <div key={index}>
                  <span>{fieldLabels[item]}</span>
                  <input
                    type={item === "age" || item === "height" || item === "weight" ? "number" : "text"}
                    name={item}
                    className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={fieldLabels[item]}
                    value={formData[item]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-0 px-2">
              {Object.entries(checkedItems).map(([key, value]) => value && (
                <div key={key} className="mt-2">
                  <span>{detailsMap[key]}</span>
                  <input
                    type="text"
                    name={key}
                    className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.details[key]}
                    onChange={handleDetailChange}
                  />
                </div>
              ))}
            </div>
                
            <div className="mt-4">
              <span>Comorbidades</span>
              <textarea
                name="comorbidity"
                className="block w-full mt-2 px-4 py-4 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe tus comorbilidades aquí"
                value={formData.comorbidity}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex justify-center gap-4 mt-4">
              <Button 
                variant="contained" 
                color="primary" 
                startIcon={<HomeRounded />}
                onClick={handleSubmit}
              >
                Editar
              </Button>
              <Button variant="outlined" color="secondary" startIcon={<ExitToApp />}>
                Cancelar
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainData;