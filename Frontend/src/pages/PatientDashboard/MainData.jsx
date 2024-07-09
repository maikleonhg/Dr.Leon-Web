// mainData.jsx

import React, { useState, useEffect } from "react";
import Aside from "../../components/Dashboards/Aside";
import { Button, Snackbar, Checkbox, Alert } from "@mui/material"; // Importa el componente Alert de MUI
import { Settings, Notifications, ExitToApp, HomeRounded } from "@mui/icons-material";
import HeaderDashboardCl from "../../components/Dashboards/HeaderDashCl";
import { updateMainData, getProfile } from '../../services/profileService.jsx';

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

  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

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
    race: "Ocupación",
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
      setMessage('Datos actualizados correctamente');
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error updating data:', error);
      setMessage('Error al actualizar los datos');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="select-none">
      <HeaderDashboardCl />
      <main className="flex flex-col sm:flex-row">
        <Aside className="sm:order-1 order-2" />
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
                  {item === "sex" ? (
                    <select
                      name={item}
                      className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData[item]}
                      onChange={handleInputChange}
                    >
                      <option value="">Seleccionar</option>
                      <option value="Femenino">Femenino</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Otro">Otro</option>
                    </select>
                  ) : (
                    <input
                      type={item === "age" || item === "height" || item === "weight" ? "number" : "text"}
                      name={item}
                      className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={fieldLabels[item]}
                      value={formData[item]}
                      onChange={handleInputChange}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4">
              <span>Enfermedades Crónicas</span>
              <textarea
                name="comorbidity"
                className="block w-full mt-2 px-4 py-4 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe tus enfermedades crónicas aquí"
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

          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
              {message}
            </Alert>
          </Snackbar>

        </section>
      </main>
    </div>
  );
}

export default MainData;
