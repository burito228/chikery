import { Link } from "react-router-dom";
import { images } from "../../modules/images";

function Footer(){
    return(
        <>
            <footer className="ps-footer">
                <div className="ps-footer__content">
                <div className="container">
                    <div className="ps-footer__left">
                    <form className="ps-form--footer-subscribe" action="#" method="get">
                        <h3>Get news & offer</h3>
                        <p>Sign up for our mailing list to get latest update and offers</p>
                        <div className="form-group--inside">
                        <input className="form-control" type="text" placeholder="Your email..."/>
                        <button><i className="fa fa-arrow-right"></i></button>
                        </div>
                        <p>* Don't worry, we never spam</p>
                    </form>
                    </div>
                    <div className="ps-footer__center">
                    <div className="ps-site-info"><Link className="ps-logo" to='/'><img src={images.logo} alt=''></img></Link>
                        <a href="https://maps.app.goo.gl/69wiTkkF42Ln9SvG9">ТОВ "НіжинХліб"</a>

                    </div>
                    </div>
                    <div className="ps-footer__right">
                    <aside className="widget widget_footer">
                        <h3 className="widget-title">Opening Time</h3>
                        <p>Monday - Friday:  <span>08:00 am - 08:30 pm</span></p>
                        <p>Saturday - Sunday:  <span>10:00 am - 16:30 pm</span></p>
                        <ul className="ps-list--payment-method">
                        <li><a href="#"><i className="fa fa-cc-mastercard"></i></a></li>
                        <li><a href="#"><i className="fa fa-cc-visa"></i></a></li>
                        <li><a href="#"><i className="fa fa-cc-paypal"></i></a></li>
                        <li><a href="#"><i className="fa fa-cc-discover"></i></a></li>
                        </ul>
                    </aside>
                    </div>
                </div>
                </div>
            </footer>
        </>
    )
}

export default Footer