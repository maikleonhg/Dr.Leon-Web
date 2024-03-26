import React, { useState } from "react";
import Aside from "../../components/Dashboards/Aside";
import { Button, LinearProgress, Checkbox } from "@mui/material";
import { Settings, Notifications, ExitToApp, HomeRounded } from "@mui/icons-material";
import HeaderDashboardCl from "../../components/Dashboards/HeaderDashCl";


function MainData() {
  
  const [checkedItems, setCheckedItems] = useState({});
  const [comorbidity, setComorbidity] = useState('');
  const detailsMap = {
    alergias: "Indícanos a qué eres alérgico",
    medicamentos: "Uso medicamentos y frecuencia",
    alcohol: "Frecuencia de ingesta de alcohol",
    tabaquismo: "Consumo de cigarros/día",
    drogas: "Droga, cantidad y frecuencia",
  };

    const handleChange = (field) => {
        setCheckedItems(prevState => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };
  
  return (
        <div className="select-none">
          <HeaderDashboardCl />
          <main className="flex">
            <Aside />
            <section className="p-6 flex-1">
              <h2 className="mb-5 text-2xl font-semibold">Historia médica</h2>
              {/* Se omite LinearProgress para simplificar */}
      
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
                {/* Campos de texto */}
                {["Nombres", "Edad", "Sexo", "Raza", "Altura", "Peso"].map((item, index) => (
                  <div key={index}>
                    <span>{item}</span>
                    <input
                      type={item === "Edad" || item === "Altura" || item === "Peso" ? "number" : "text"}
                      name={item.toLowerCase()}
                      className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={item}
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
                    className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    value={comorbidity}
                    onChange={(e) => setComorbidity(e.target.value)}
                  />
                 </div>

                {/* Botones */}
                <div className="flex justify-center gap-4 mt-4">
                  <Button variant="contained" color="primary" startIcon={<HomeRounded />}>
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