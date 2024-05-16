import { images } from '../../modules/images';
import SimpleSlider from '../../utils/Slider'


const Main = () => {


  return (
    <>
        <div id="homepage-2">
            <SimpleSlider></SimpleSlider>
            <div className="ps-section ps-home-about bg--cover" data-background={images.homeabout}>
                <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                    <div className="ps-section__image"><img src={images.about} alt=''></img></div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                    <div className="ps-section__content">
                        <p>“Crafting joy through every pastry, we blend passion and precision to deliver moments of pure delight. From our ovens to your table, each creation carries the warmth of our dedication and the sweetness of shared memories. Join us on a journey of taste and tradition, where every bite tells a story of love and care”</p>
                        <div className="ps-section__image"><img src={images.sign} alt=''></img></div>
                        <h5><span>Marry Lulie</span> - Ceo Chikery</h5>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="ps-section ps-home-awards bg--cover" data-background={images.homeaward}>
                <div className="container">
                <div className="ps-section__header">
                    <p>CHIKER STORE</p>
                    <h3>Our Awards</h3><i className="chikery-tt3"></i>
                </div>
                <div className="ps-section__content">
                    <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-block--award">
                        <div className="ps-block__header"><img src={images.award1} alt=''></img>
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
                        <div className="ps-block__header"><img src={images.award2} alt=''></img>
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
                        <div className="ps-block__header"><img src={images.award3} alt=''></img>
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
        </div>
    </>
  )
}

export default Main
