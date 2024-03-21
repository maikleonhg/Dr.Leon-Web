import logo from '../../assets/logo sf.png';
import { IconButton, Tooltip } from '@mui/material';
import ExitToApp from '@mui/icons-material/ExitToApp';
import HomeRounded from '@mui/icons-material/HomeRounded';
import { Settings, Notifications } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


export default function HeaderDashboardDr() {
  const navigate = useNavigate(); // Inicializa useNavigate

  // Función para manejar la navegación
  const handleLogout = () => {
    navigate('/login'); // Navega a la página de login
  };

  return (
    <header className="flex items-center border-b border-gray-200 py-2 px-2 justify-between">
      <img src={logo} alt='Medtools' className="w-24 pl-5"/>
      <div className="pr-10 flex gap-5 items-center">
        <IconButton onClick={() => handleNav('home')}>
          <HomeRounded className="text-xl" />
        </IconButton>
        <IconButton>
          <Settings style={{ fontSize: '25px', margin: '0px'}} />
        </IconButton>
        <IconButton>
          <Notifications style={{ fontSize: '25px'}} />
        </IconButton>
        <Tooltip title='Salir'>
          <IconButton onClick={handleLogout}> {/* Agrega el evento onClick aquí */}
            <ExitToApp className="text-xl" />
          </IconButton>
        </Tooltip>
      </div>
    </header>
  );
}