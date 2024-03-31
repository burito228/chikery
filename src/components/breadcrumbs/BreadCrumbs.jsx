import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";
import { images } from "../../modules/images";


const BreadCrumbs = () => {
  return (
    <div className="ps-hero bg--cover" data-background={images.hero}>
        <div className="ps-hero__container">
          <div className="ps-breadcrumb">
            <ul className="breadcrumb">
              <li><Link to='/'>Home</Link></li>
              <IoIosArrowForward />
              <li>Cart</li>
            </ul>
          </div>
          <h1 className="ps-hero__heading">Cart</h1>
        </div>
    </div>
  )
}

export default BreadCrumbs
