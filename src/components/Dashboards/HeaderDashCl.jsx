import logo from '../../assets/logo sf.png';
import { IconButton, Tooltip } from '@mui/material';
import ExitToApp from '@mui/icons-material/ExitToApp';
import HomeRounded from '@mui/icons-material/HomeRounded';
import Settings from '@mui/icons-material/Settings';
import Notifications from '@mui/icons-material/Notifications';



export default function HeaderDashboardCl() {

  return (
    <header className="flex items-center border-b border-gray-200 py-2 px-2 justify-between">
      <img src={logo} alt='Medtools' className="w-24 pl-5"/>
      <div className="pr-10 flex gap-5 items-center">
        <IconButton onClick={() => handleNav('home')}>
          <HomeRounded className="text-xl" />
        </IconButton>
        <IconButton>
          <Settings className="text-xl" />
        </IconButton>
        <IconButton>
          <Notifications className="text-xl" />
        </IconButton>
        <Tooltip title='Salir'>
          <IconButton >
            <ExitToApp className="text-xl" />
          </IconButton>
        </Tooltip>
      </div>
    </header>
  );
}
