import BreadCrumbs from "../breadcrumbs/BreadCrumbs"
import { images } from "../../modules/images"

const About = () => {
  return (
    <div className="ps-page--about">
      <BreadCrumbs />
      <div className="ps-section ps-home-awards bg--cover" data-background="img/bg/home-2/home-award.jpg">
        <div className="container">
          <div className="ps-section__header">
            <p>CHIKER STORE</p>
            <h3>Our Awards</h3><i className="chikery-tt3"></i>
          </div>
          <div className="ps-section__content">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                <div className="ps-block--award">
                  <div className="ps-block__header"><img src={images.award1} alt=""></img>
                    <h4>BAKERY OF THE YEAR</h4>
                    <p>1990 - 2010</p>
                  </div>
                  <div className="ps-block__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed turpis feugiat, mollis felis vel, viverra metus.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                <div className="ps-block--award">
                  <div className="ps-block__header"><img src={images.award2} alt=""></img>
                    <h4>CUPCAKES SHOP OF THE YEAR</h4>
                    <p>2012 - 2018</p>
                  </div>
                  <div className="ps-block__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed turpis feugiat, mollis felis vel, viverra metus.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                <div className="ps-block--award">
                  <div className="ps-block__header"><img src={images.award3} alt=""></img>
                    <h4>Awards Bakery academy</h4>
                    <p>2012 - 2018</p>
                  </div>
                  <div className="ps-block__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed turpis feugiat, mollis felis vel, viverra metus.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ps-section ps-home-about">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
              <div className="ps-section__header">
                <p>WELCOME TO CHIKERY</p>
                <h3>Chikery Cake History</h3>
              </div>
              <div className="ps-section__content">
                <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed turpis feugiat, mollis felis vel, viverra metus. Sed vel nulla non neque dictum imperdiet hendrerit ”</p>
                <div className="ps-section__image"><img src={images.sign} alt=""></img></div>
                <h5><span>Marry Lulie</span> - Ceo Chikery</h5>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
              <div className="ps-section__image"><img src={images.coockerAbout} alt=""></img></div>
            </div>
          </div>
        </div>
      </div>
      <div className="ps-section ps-home-best-services">
        <div className="ps-section__left bg--cover" data-background={images.bestServicesLeft}></div>
        <div className="ps-section__right">
          <div className="ps-section__container">
            <div className="ps-section__header">
              <p>CHIKERY CAKE</p>
              <h3>Best Services</h3><i className="chikery-tt3"></i>
            </div>
            <div className="ps-section__content">
              <p>Consectetur adipiscing elit. Curabitur sed turpis feugiat, sed vel nulla non neque. Nullamlacinia faucibus risus, a euismod lorem tincidunt id. Vestibulum imperdiet nibh vel magna lacinia ultricesimperdiet.</p>
              <ul>
                <li>BEST QUALITY</li>
                <li>FAST DELIVERED</li>
                <li>Event Cakes</li>
                <li>INGREDIENT SUPPLY</li>
                <li>ONLINE BOOKING</li>
              </ul>
            </div>
          </div>
          <div className="ps-section__image bg--cover" data-background="img/bg/home-1/home-best-services-2.jpg"></div>
        </div>
      </div>
      <div className="ps-section ps-home-good-baker">
        <div className="container">
          <div className="ps-section__header">
            <p>Our baker</p>
            <h3>The Good Baker</h3><i className="chikery-tt1"></i>
          </div>
          <div className="ps-section__content">
            <div className="ps-block--good-baker">
              <div className="ps-block__left"><img src={images.goodBaker} alt=""></img></div>
              <div className="ps-block__right">
                <h4>Jont Henrry</h4>
                <h5>Chef, Co - accfounder</h5>
                <p>Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed turpis feugiat, mollis felis vel, viverra metus. Sed vel nulla non neque dictum imperdiet. Aliquam egestas hendrerit euismod.</p>
                <div className="ps-block__images">
                  <img src={images.hero1} alt=""></img>
                  <img src={images.hero2} alt=""></img>
                  <img src={images.hero3} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
