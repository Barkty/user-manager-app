import { Link } from "react-router-dom"
import logo from "assets/logo.svg"
import avatar from "assets/avatar.svg"
import { CiBellOn } from "react-icons/ci";

const Navbar = () => {
    const worker = JSON.parse(localStorage.getItem('user'))
    const { user } = worker

    return (
        <div className="flex items-center justify-evenly md:justify-between py-4 text-black bg-white shadow-md px-14 md:px-5">
            <Link href={"/"} className="-ml-14 md:ml-2">
                <img src={logo} alt="Normar Logo" width={220} height={57} />
            </Link>
            <div className="flex items-center justify-between w-[220px]">
                <CiBellOn size={35} />
                <div className="flex items-center">
                    <div className="mr-2">
                        <p className="text-base font-grotesk foont-normal">{user?.firstName} {user?.lastName}</p>
                        <p className="text-sm font-grotesk foont-normal">{user?.street}, {user?.location}</p>
                    </div>
                    <img src={avatar} alt="Normar Logo" width={50} height={50}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar