import { NavLink } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';
import { DashboardOutlined, CalendarMonth, LocalHospitalOutlined } from '@mui/icons-material';


export default function AsideOption({ name }) {
  const icons = {
    Perfil: DashboardOutlined,
    Agenda: CalendarMonth,
    Pacientes: LocalHospitalOutlined,
  };

  const paths = {
    Perfil: "/profile",
    Agenda: "/agenda",
    Pacientes: "/pacientes",
  };

  return (
    <NavLink to={paths[name]} className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-purple-100 hover:text-black-500 rounded-md transition duration-300 ease-in-out">
      <SvgIcon component={icons[name]} className="text-red-600"/>
      <span>{name}</span>
    </NavLink>
  );
}
