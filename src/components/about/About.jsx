import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";
import { images } from "../../modules/images"

const About = () => {
  return (
    <div className="ps-page--about">
      <div className="ps-hero bg--cover" data-background={images.hero}>
        <div className="ps-hero__container">
          <div className="ps-breadcrumb">
            <ul className="breadcrumb">
              <li><Link to='/'>Home</Link></li>
              <IoIosArrowForward />
              <li>About</li>
            </ul>
          </div>
          <h1 className="ps-hero__heading">About</h1>
        </div>
      </div>
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
                    <p>Indulge in excellence! For two decades, we've proudly crafted moments of bliss with our delectable creations. From the first bite to the last crumb, our passion for baking shines through in every pastry, making us the epitome of culinary mastery.</p>
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
                    <p>Savor the sweetness of success! Our journey to the top has been sprinkled with love and frosted with dedication. With each delightful cupcake, we've shared a taste of joy, earning us the esteemed title of Cupcakes Shop of the Year for seven consecutive years.</p>
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
                    <p>Rising to the occasion! At the Awards Bakery Academy, we've blended innovation with tradition to shape the future of baking. From artisanal techniques to cutting-edge recipes, our commitment to excellence knows no bounds, garnering recognition and admiration from peers and patrons alike.</p>
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
                <p>“ Witness the legacy unfold! With every Chikery Cake, we invite you to taste the journey of generations. From cherished family recipes to innovative confections, each slice carries the essence of our heritage and the promise of memorable moments. Join us as we continue to write the sweetest chapters of history, one delectable creation at a time. ”</p>
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
              <p>Experience excellence in every bite! At Chikery Cake, we blend passion with precision to create moments of pure delight. From the finest ingredients to expert craftsmanship, each cake embodies our commitment to quality and satisfaction. Whether it's a special event or a casual indulgence, trust us for the perfect treat every time.</p>
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
                <p>Welcome to our culinary journey! With a passion for perfection, we craft each dish to tantalize your taste buds and ignite your senses. From innovative flavors to classic favorites, every creation is a celebration of artistry and flavor. Join us as we embark on a gastronomic adventure, where every bite tells a story of inspiration and indulgence.</p>
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
