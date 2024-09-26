import { FaRegEnvelope, FaInstagram, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";
import { CiLocationArrow1,CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import Card from "../ui/Card";
import { useState } from "react";

function Profile() {
  const [showInfo, setShowInfo] = useState(false);

  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <Card className="lg:w-80 w-full min-h-[fit-content] flex-grow overflow-y-auto px-6 flex flex-col gap-3 lg:h-auto lg:py-4 pb-2 md:pb-8 transition-all duration-300 ease-out">
      <div className="bg-neutral-600/20 dark:bg-neutral-800 self-end px-5 py-1 md:py-2 block lg:hidden mr-[-1.5rem] shadow-md text-black dark:text-white rounded-bl-xl custom-gradient-hover">
        <button onClick={handleShowInfo} type="button" className="self-end flex items-center gap-3">
          <p className="hidden md:block">Show info</p>
          <span className="block lg:hidden text-base">
            { showInfo ? <FaAngleUp />: <FaAngleDown />}
          </span>
        </button>
      </div>

      <div className="flex self-start lg:flex-col flex-row sm:justify-center justify-between items-center sm:px-10 gap-3">
        <div>
          <img
            className="rounded-lg w-20 md:w-28 h-20 md:h-28"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXk5ueutLepsLPo6uursbXJzc/p6+zj5ea2u76orrKvtbi0ubzZ3N3O0dPAxcfg4uPMz9HU19i8wcPDx8qKXtGiAAAFTElEQVR4nO2d3XqzIAyAhUD916L3f6+f1m7tVvtNINFg8x5tZ32fQAIoMcsEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQTghAJD1jWtnXJPP/54IgNzZQulSmxvTH6oYXX4WS+ivhTbqBa1r26cvCdCu6i0YXbdZ0o4A1rzV+5IcE3YE+z58T45lqo7g1Aa/JY5tgoqQF3qb382x7lNzBLcxft+O17QUYfQI4IIeklKsPSN4i6LKj/7Zm8n99RbHJpEw9gEBXNBpKIYLJqKYRwjOikf//r+J8ZsVuacbqCMNleI9TqGLGqMzhnVdBOdd6F/RlrFijiCoVMk320CBIahUxTWI0KKEcJqKbMdpdJb5QvdHq6wCI5qhKlgGMS/RBHkubWDAE+QZxB4xhCyDiDkLZxgGEVdQldzSKbTIhmZkFkSEPcVvmBn2SMuZB9od7fQDsMiDdKJjFUSCQarM5WirZ3C2TT/htYnyPcPfgrFHWz0BI74gr6J/IZiGUxAZGQLqmvQLTrtE/Go4YxhVRIpEw+sww1IIcqr5NKmUUzLF3d4/qPkYIp2T/obPuemlojFUR4t9Q2Vojhb7BmgElWHzLPH8hucfpefPNFTVgs9h1AdU/Pin96vwWbWdf+X9Absn3OdO34aMdsDnP8WgKYisTqI6CkNGqZQo1XA6Ef6AU32SJzOcBukHPF07/xNSgmHKa5BOhtezv6mA/rYJpwXNAnbRZ1XuF3BzDcO3vpA3+ny2909gbqE4hhD3LIPhLLyBNhPZvbZ3B+3tPYa18A7auSlXQayKwTPNLKDcuOB0xPYKDPFTkWsevQPRZ1J8Hji9I1KQ34r7hZhrwNwOZ97QxNx0drwn4QI0wQk1DcEsfKCWKdxVvxPSNUIp/knmAXT+nT+Ko3+0H96rcNb3m1fx7MBTJdeBJ7uFcWsc0wvgAsC4pROW0l2inbAmIBv/7GZmuhQH6API2rr8T0e6yuZJ+80A9LZeG62T3tik31XwxtwZcizKuTHkMjB1WdZde4Kmic/A5ZI3rr1ae21d08PlVHYfAaxw9G9CYRbJ+8ZdbTcMRV1XM3VdF0M32vtoTdZ0+u29s0OttJ5bz64UwinjaFMVY9vkqc3KKSxN21Xl+0L4Q3Vuv1tYl0pqnX6ms4XetFz7gdZVAgUEoJntfOUe4ZwsHd9FzqQ3Vv6xe41l0XJcqcKl6TZvlv7ClAW3BsqQW4X7ypApB8dmTgK4IX5wvqIVj33HtD2qSG4BqznxdIefL27Y4sahi0MdIdvUsDva8agGGbCtITmCY31MHD2O0uIdh/0rJDQ1VX5Zdxz3rR2QDbv6qXl9vudzqQtGm1Jv9LDXOsfvvB7VcZ8PDKD0mQ1VHPYQ9O+Yj4hR1IUD8rBnn3ho2m8oQMxbCFiKlL2ioSW5heeJqegED52CzxCtcGD3Kv8Wms9EYLyUhwaFIhSMBClevWEmiK/Iaogu4H7sg6ppQhQG8RUqivuTGOAJOg6FfgW0q0M0PQMRMEgXaeNf3SYDZ8PIMI0+wHgr/MgN7wYwpiLjCCqM6ydUDZLQiB6nDdNC8SDyig3jPPpFXGcC9O8BUBDVmgBY59E7Md/35Loe/UVEECEJwYggJjELZ4J71SaQSBeC02n4Da29CayJNA28SAhd2CQyC1Xw6pSmGSINQVuMhAZp4DClan9MgmkDDNmezqwS8sgtlXK/EPBhoaSmYVC/F7IO1jQEdHOlabpKh3+jzLQSTUiq4X2I+Ip/zU8rlaqAvkS21ElR+gqu3zbjjL+hIAiCIAiCIAiCIAiCsCf/AKrfVhSbvA+DAAAAAElFTkSuQmCC"
            alt="profileImg"
          />
        </div>
        <div className="grid gap-3 md:gap-5">
          <h1 className="md:text-2xl text-base">Tippa Ganapathi</h1>
          <div className="dark:bg-neutral-800 bg-zinc-200 rounded-md py-2 px-4">
            <p className="text-sm">Full stack developer</p>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out max-lg:overflow-hidden flex flex-col lg:max-h-full lg:opacity-100 gap-3 pb-4 ${
          showInfo ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="dark:bg-neutral-800 bg-zinc-200 h-0.5"></div>
        <div className="flex items-center gap-5 dark:bg-neutral-800 bg-zinc-200 rounded-md px-3 py-3 shadow-md">
          <FaRegEnvelope size="20px" />
          <p>ganapatidev2@gmail.com</p>
        </div>
        <div className="flex items-center gap-5 dark:bg-neutral-800 bg-zinc-200  rounded-md px-3 py-3 shadow-md">
          <MdOutlinePhone size="20px" />
          <p>+91 9703914979</p>
        </div>
        <div className="flex items-center gap-5 dark:bg-neutral-800 bg-zinc-200  rounded-md px-3 py-3 shadow-md">
          <CiLocationArrow1 size="20px" />
          <p>Tanuku,India</p>
        </div>
        <div className="flex self-center gap-4">
            <div className="flex items-center justify-center gap-5 hover:dark:!bg-zinc-200 hover:bg-neutral-800 hover:text-white hover:dark:!text-black  dark:bg-neutral-800 bg-zinc-200 border border-transparent hover:border-neutral-900 w-10 h-10 rounded-full shadow-lg">
                <a className="no-underline text-inherit hover:text-inherit" href="https://github.com/ganapati3" target="_blank" rel="noopener noreferrer">
                    <LuGithub size="20px" />
                </a>
            </div>
            {/* <div className="flex items-center justify-center gap-5 hover:dark:!bg-zinc-200 hover:bg-neutral-800 hover:text-white hover:dark:!text-black dark:bg-neutral-800 bg-zinc-200 border border-transparent hover:border-yellow-500 w-10 h-10 rounded-full shadow-lg">
                <a className=" no-underline text-inherit hover:text-inherit" href="http://" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size="20px" />
                </a>
            </div> */}
            <div className="flex items-center justify-center gap-5 hover:dark:!bg-zinc-200 hover:bg-neutral-800 hover:text-white hover:dark:!text-black dark:bg-neutral-800 bg-zinc-200 border border-transparent hover:border-yellow-500 w-10 h-10 rounded-full shadow-lg">
                <a className=" no-underline text-inherit hover:text-inherit" href="https://www.upwork.com/freelancers/ganapathit" target="_blank" rel="noopener noreferrer">
                    <FaUpwork size="20px" />
                </a>
          </div>
          <div className="flex items-center justify-center gap-5 hover:dark:!bg-zinc-200 hover:bg-neutral-800 hover:text-white hover:dark:!text-black dark:bg-neutral-800 bg-zinc-200 border border-transparent hover:border-yellow-500 w-10 h-10 rounded-full shadow-lg">
                <a className=" no-underline text-inherit hover:text-inherit" href="https://www.linkedin.com/in/ganapati-tippa-5a6389216/" target="_blank" rel="noopener noreferrer">
                    <CiLinkedin size="20px" />
                </a>
            </div>
        </div>
      </div>
    </Card>
  );
}

export default Profile;
