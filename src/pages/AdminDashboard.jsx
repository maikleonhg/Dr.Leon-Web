//import React, { useEffect } from "react";
//import emptyImg from "../../assets/images/empty.svg";
//import Header from "../components/Header";
import Aside from "../components/Dashboards/Aside";
//import { useDispatch, useSelector } from "react-redux";
//import { setUser } from "../../redux/slices/appSlice";
import HeaderDashboardCl from "../components/Dashboards/HeaderDashCl";

export default function AdminDashboard() {
  /*const dispatch = useDispatch();
  const userData = useSelector((state) => state.appEvents.userData);

  useEffect(() => {
    const { userInfo } = JSON.parse(localStorage.getItem("user"));
    dispatch(setUser(userInfo));
  }, [dispatch]);*/

  return (
    <div className="h-screen select-none">
        <HeaderDashboardCl />
      {/* Aquí también eliminamos el Header y el Aside, ya que no están definidos en este snippet */}
      <main className="flex stretch">
      <Aside />
        <section className="flex-grow p-8">
          <h2 className="mb-4">
            Hola, tienes
            <span className="text-purple-500"> 0</span> novedades
          </h2>
          <div className="flex flex-col p-8">
            {/* Aquí también comentamos la imagen ya que no se utiliza */}
            {/* <img src={emptyImg} alt="empty place" className="w-full max-w-sm mx-auto" /> */}
          </div>
        </section>
      </main>
    </div>
  );
}

{/*<Aside />*/}
{/*<Header />}/*/}