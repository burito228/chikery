import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";
import { images } from "../../modules/images"

const NotFound = () => {
  return (
    <div className="ps-hero bg--cover" data-background={images.hero}>
        <div className="ps-hero__container">
          <div className="ps-breadcrumb">
            <ul className="breadcrumb">
              <li><Link to='/'>Home</Link></li>
              <IoIosArrowForward />
              <li>Not Found</li>
            </ul>
          </div>
          <h1 className="ps-hero__heading">Not Found</h1>
        </div>
    </div>
  )
}

export default NotFound
