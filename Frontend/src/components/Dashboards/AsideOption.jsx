import { NavLink } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';
import { DashboardOutlined, DescriptionOutlined, LocalHospitalOutlined } from '@mui/icons-material';


export default function AsideOption({ name }) {
  const icons = {
    Perfil: DashboardOutlined,
    Historia: DescriptionOutlined,
    Consulta: LocalHospitalOutlined,
  };

  const paths = {
    Perfil: "/profile",
    Historia: "/historia",
    Consulta: "/CalendarUser",
  };

  return (
    <NavLink to={paths[name]} className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-purple-100 hover:text-black-500 rounded-md transition duration-300 ease-in-out">
      <SvgIcon component={icons[name]} className="text-red-600"/>
      <span>{name}</span>
    </NavLink>
  );
}
