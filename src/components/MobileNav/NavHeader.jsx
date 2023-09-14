

import logo from "../../assets/Frame.svg";


const NavHeader = () => {
   
  return (
    <div className="flex items-center    px-4 justify-between py-4 lg:hidden relative">
    <img src={logo} alt="paystack-logo" />
</div>
  )
}

export default NavHeader