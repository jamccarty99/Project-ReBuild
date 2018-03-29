import React from 'react'
import { Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faUtensils} from '@fortawesome/fontawesome-pro-regular'
import {faTrashAlt} from '@fortawesome/fontawesome-pro-regular'
import '../index.css';

const Data = () => {
  return (
     
    <div className='container-fluid'>
      {/* <div className="product-box">
          <a target="_blank" href="https://www.amazon.com/Black-Diamond-Momentum-Harness-Graphite/dp/B00LU59XF2?psc=1&SubscriptionId=AKIAJVKRTFMK3PCCYINQ&tag=jamccarty99-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LU59XF2">
              <img src="https://images-na.ssl-images-amazon.com/images/I/51YWnH%2BInOL._SL160_.jpg" width="120" height="160"/>
          </a>
          <div className="product-title">
              <h3>Black Diamond Momentum Harness, Medium, Graphite</h3>
          </div>
          <p className="product-price">$52.88
          </p>
          <div>
              <span className="a-button a-button-primary">
                  <a target="_blank" href="https://www.amazon.com/Black-Diamond-Momentum-Harness-Graphite/dp/B00LU59XF2?psc=1&SubscriptionId=AKIAJVKRTFMK3PCCYINQ&tag=jamccarty99-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LU59XF2">
                      <span className="a-button-inner">
                          <img src="http://webservices.amazon.com/scratchpad/assets/images/Amazon-Favicon-64x64.png" className="a-icon a-icon-shop-now"/>
                          <input className="a-button-input" type="submit" value="Add to cart"/>
                          <span className="a-button-text">Shop Now</span>
                      </span>
                  </a>
              </span>
          </div>
      </div>

      <div className="product-box">
          <a target="_blank" href="https://www.amazon.com/Climbing-Harness-Oumers-Mountaineering-Rappelling/dp/B016NOWD1A?SubscriptionId=AKIAJVKRTFMK3PCCYINQ&tag=jamccarty99-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B016NOWD1A">
              <img src="https://images-na.ssl-images-amazon.com/images/I/51GdUUK5hkL._SL160_.jpg" width="120" height="160"/>
          </a>
          <div className="product-title">
              <h3>Climbing Harness, Oumers Safe Seat Belts For Mountaineering Outward Band Fire Rescue Working on the Higher Level Caving Rock Climbing Rappelling Equip, Women Man Child Half Body Guide Harness</h3>
          </div>
          <p className="product-price">$19.80
          </p>
          <div>
              <span className="a-button a-button-primary">
                  <a target="_blank" href="https://www.amazon.com/Climbing-Harness-Oumers-Mountaineering-Rappelling/dp/B016NOWD1A?SubscriptionId=AKIAJVKRTFMK3PCCYINQ&tag=jamccarty99-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B016NOWD1A">
                      <span className="a-button-inner">
                          <img src="http://webservices.amazon.com/scratchpad/assets/images/Amazon-Favicon-64x64.png" className="a-icon a-icon-shop-now"/>
                          <input className="a-button-input" type="submit" value="Add to cart"/>
                          <span className="a-button-text">Shop Now</span>
                      </span>
                  </a>
              </span>
          </div>
      </div>

      <div className="product-box">
          <a target="_blank" href="https://www.amazon.com/Climbing-Weanas-Mountaineering-Rescuing-Rappelling/dp/B074FYG7RM?psc=1&SubscriptionId=AKIAJVKRTFMK3PCCYINQ&tag=jamccarty99-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B074FYG7RM">
              <img src="https://images-na.ssl-images-amazon.com/images/I/51xkNycGAnL._SL160_.jpg" width="120" height="160"/>
          </a>
          <div className="product-title">
              <h3>Thicken Climbing Harness, Weanas Protect Waist Safety Harness, Wider Half Body Harness for Mountaineering Fire Rescuing Rock Climbing Rappelling Tree Climbing (Black)</h3>
          </div>
          <p className="product-price">$19.99
          </p>
          <div>
              <span className="a-button a-button-primary">
                  <a target="_blank" href="https://www.amazon.com/Climbing-Weanas-Mountaineering-Rescuing-Rappelling/dp/B074FYG7RM?psc=1&SubscriptionId=AKIAJVKRTFMK3PCCYINQ&tag=jamccarty99-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B074FYG7RM">
                      <span className="a-button-inner">
                          <img src="http://webservices.amazon.com/scratchpad/assets/images/Amazon-Favicon-64x64.png" className="a-icon a-icon-shop-now"/>
                          <input className="a-button-input" type="submit" value="Add to cart"/>
                          <span className="a-button-text">Shop Now</span>
                      </span>
                  </a>
              </span>
          </div>
      </div>

      <div className="product-box">
          <a target="_blank" href="https://www.amazon.com/Black-Diamond-Primrose-Harness-Moroccan/dp/B00LU5ACWA?psc=1&SubscriptionId=AKIAJVKRTFMK3PCCYINQ&tag=jamccarty99-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LU5ACWA">
              <img src="https://images-na.ssl-images-amazon.com/images/I/51zLdxLNkGL._SL160_.jpg" width="120" height="160"/>
          </a>
          <div className="product-title">
              <h3>Black Diamond Primrose Women's Harness, Moroccan Blue, Medium</h3>
          </div>
          <p className="product-price">$52.88
         </p>
          <div>
              <span className="a-button a-button-primary">
                  <a target="_blank" href="https://www.amazon.com/Black-Diamond-Primrose-Harness-Moroccan/dp/B00LU5ACWA?psc=1&SubscriptionId=AKIAJVKRTFMK3PCCYINQ&tag=jamccarty99-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LU5ACWA">
                      <span className="a-button-inner">
                          <img src="http://webservices.amazon.com/scratchpad/assets/images/Amazon-Favicon-64x64.png" className="a-icon a-icon-shop-now"/>
                          <input className="a-button-input" type="submit" value="Add to cart"/>
                          <span className="a-button-text">Shop Now</span>
                      </span>
                  </a>
              </span>
          </div>
      </div>

      <div className="product-box">
          <a target="_blank" href="https://www.amazon.com/Black-Diamond-Momentum-Climbing-Harness/dp/B078NH24JS?psc=1&SubscriptionId=AKIAJVKRTFMK3PCCYINQ&tag=jamccarty99-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B078NH24JS">
              <img src="https://images-na.ssl-images-amazon.com/images/I/41NgC0UqzxL._SL160_.jpg" width="120" height="160"/>
          </a>
          <div className="product-title">
              <h3>Black Diamond Momentum Climbing Harness Package - Men's Slate Medium</h3>
          </div>
          <p className="product-price">$84.79
          </p>
          <div>
              <span className="a-button a-button-primary">
                  <a target="_blank" href="https://www.amazon.com/Black-Diamond-Momentum-Climbing-Harness/dp/B078NH24JS?psc=1&SubscriptionId=AKIAJVKRTFMK3PCCYINQ&tag=jamccarty99-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B078NH24JS">
                      <span className="a-button-inner">
                          <img src="http://webservices.amazon.com/scratchpad/assets/images/Amazon-Favicon-64x64.png" className="a-icon a-icon-shop-now"/>
                          <input className="a-button-input" type="submit" value="Add to cart"/>
                          <span className="a-button-text">Shop Now</span>
                      </span>
                  </a>
              </span>
          </div>
      </div>

      <div className="product-box">
          <a target="_blank" href="https://www.amazon.com/Climbing-Assignment-Rappelling-Equipment-Body-Model/dp/B073FNYS6T?psc=1&SubscriptionId=AKIAJVKRTFMK3PCCYINQ&tag=jamccarty99-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B073FNYS6T">
              <img src="https://images-na.ssl-images-amazon.com/images/I/51q47gIcZdL._SL160_.jpg" width="120" height="160"/>
          </a>
          <div className="product-title">
              <h3>Climbing Harness Safe Seat Belt for Fire Rescue High Altitude School Assignment Caving Rock Climbing Rappelling Equipment Body Guard Protect (Half Body-Model 2)</h3>
          </div>
          <p className="product-price">$42.99
          </p>
          <div>
              <span className="a-button a-button-primary">
                  <a target="_blank" href="https://www.amazon.com/Climbing-Assignment-Rappelling-Equipment-Body-Model/dp/B073FNYS6T?psc=1&SubscriptionId=AKIAJVKRTFMK3PCCYINQ&tag=jamccarty99-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B073FNYS6T">
                      <span className="a-button-inner">
                          <img src="http://webservices.amazon.com/scratchpad/assets/images/Amazon-Favicon-64x64.png" className="a-icon a-icon-shop-now"/>
                          <input className="a-button-input" type="submit" value="Add to cart"/>
                          <span className="a-button-text">Shop Now</span>
                      </span>
                  </a>
              </span>
          </div>
      </div>

      <div className="product-box">
          <a target="_blank" href="https://www.amazon.com/YXGOOD-Treestand-Harness-Climbing-Firefighting/dp/B011K7FUUG?psc=1&SubscriptionId=AKIAJVKRTFMK3PCCYINQ&tag=jamccarty99-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B011K7FUUG">
              <img src="https://images-na.ssl-images-amazon.com/images/I/51Qtl2P9AlL._SL160_.jpg" width="120" height="160"/>
          </a>
          <div className="product-title">
              <h3>YXGOOD Treestand Harness, Tree Working Safety Belt, Climbing Harness For Garden Art Clip, Tree Clip, Firefighting On Tree</h3>
          </div>
          <p className="product-price">$59.99
          </p>
          <div>
              <span className="a-button a-button-primary">
                  <a target="_blank" href="https://www.amazon.com/YXGOOD-Treestand-Harness-Climbing-Firefighting/dp/B011K7FUUG?psc=1&SubscriptionId=AKIAJVKRTFMK3PCCYINQ&tag=jamccarty99-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B011K7FUUG">
                      <span className="a-button-inner">
                          <img src="http://webservices.amazon.com/scratchpad/assets/images/Amazon-Favicon-64x64.png" className="a-icon a-icon-shop-now"/>
                          <input className="a-button-input" type="submit" value="Add to cart"/>
                          <span className="a-button-text">Shop Now</span>
                      </span>
                  </a>
              </span>
          </div>
      </div>

      <div className="product-box">
          <a target="_blank" href="https://www.amazon.com/Crag-Cards-Essential-Climbing-Knots/dp/B01N3MNWVR?SubscriptionId=AKIAJVKRTFMK3PCCYINQ&tag=jamccarty99-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01N3MNWVR">
              <img src="https://images-na.ssl-images-amazon.com/images/I/61UIBDwj2NL._SL160_.jpg" width="120" height="160"/>
          </a>
          <div className="product-title">
              <h3>Crag Cards: Essential Climbing Knots</h3>
          </div>
          <p className="product-price">$5.99
         </p>
          <div>
              <span className="a-button a-button-primary">
                  <a target="_blank" href="https://www.amazon.com/Crag-Cards-Essential-Climbing-Knots/dp/B01N3MNWVR?SubscriptionId=AKIAJVKRTFMK3PCCYINQ&tag=jamccarty99-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01N3MNWVR">
                      <span className="a-button-inner">
                          <img src="http://webservices.amazon.com/scratchpad/assets/images/Amazon-Favicon-64x64.png" className="a-icon a-icon-shop-now"/>
                          <input className="a-button-input" type="submit" value="Add to cart"/>
                          <span className="a-button-text">Shop Now</span>
                      </span>
                  </a>
              </span>
          </div>
      </div>

      <div className="product-box">
          <a target="_blank" href="https://www.amazon.com/Climbing-Oumers-Waistbelt-Mountaineering-Rappelling/dp/B0184ZPC8C?psc=1&SubscriptionId=AKIAJVKRTFMK3PCCYINQ&tag=jamccarty99-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0184ZPC8C">
              <img src="https://images-na.ssl-images-amazon.com/images/I/51Au1hxWXuL._SL160_.jpg" width="120" height="160"/>
          </a>
          <div className="product-title">
              <h3>Thicken Wider Climbing Harness, Oumers Protect Waist Version Waistbelt Wider Safe Seat Belts For Mountaineering Fire Rescue Higher Level Caving Rock Climbing Rappelling Equip Women Man Child Half Body</h3>
          </div>
          <p className="product-price">$46.99
       </p>
          <div>
              <span className="a-button a-button-primary">
                  <a target="_blank" href="https://www.amazon.com/Climbing-Oumers-Waistbelt-Mountaineering-Rappelling/dp/B0184ZPC8C?psc=1&SubscriptionId=AKIAJVKRTFMK3PCCYINQ&tag=jamccarty99-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0184ZPC8C">
                      <span className="a-button-inner">
                          <img src="http://webservices.amazon.com/scratchpad/assets/images/Amazon-Favicon-64x64.png" className="a-icon a-icon-shop-now"/>
                          <input className="a-button-input" type="submit" value="Add to cart"/>
                          <span className="a-button-text">Shop Now</span>
                      </span>
                  </a>
              </span>
          </div>
      </div>

      <div className="product-box">
          <a target="_blank" href="https://www.amazon.com/Black-Diamond-Solution-Climbing-Harness/dp/B019NUMT7Y?psc=1&SubscriptionId=AKIAJVKRTFMK3PCCYINQ&tag=jamccarty99-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B019NUMT7Y">
              <img src="https://images-na.ssl-images-amazon.com/images/I/516Q94cVy0L._SL160_.jpg" width="120" height="160"/>
          </a>
          <div className="product-title">
              <h3>Black Diamond Solution Climbing Harness - Men's - Slate X-Large</h3>
          </div>
          <p className="product-price">$69.95
        </p>
          <div>
              <span className="a-button a-button-primary">
                  <a target="_blank" href="https://www.amazon.com/Black-Diamond-Solution-Climbing-Harness/dp/B019NUMT7Y?psc=1&SubscriptionId=AKIAJVKRTFMK3PCCYINQ&tag=jamccarty99-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B019NUMT7Y">
                      <span className="a-button-inner">
                          <img src="http://webservices.amazon.com/scratchpad/assets/images/Amazon-Favicon-64x64.png" className="a-icon a-icon-shop-now"/>
                          <input className="a-button-input" type="submit" value="Add to cart"/>
                          <span className="a-button-text">ADD</span>
                      </span>
                  </a>
              </span>
          </div>
      </div> */}
      <div className='row'>
        <div className='col'>
          <div className="card text-white bg-info mx-3"  height="160">
            <img className='mx-2 pt-3 rounded mx-auto d-block' src="https://images-na.ssl-images-amazon.com/images/I/516Q94cVy0L._SL160_.jpg" width="120" height="160" alt="Black Diamond Solution Climbing Harness"/>
            <div className="card-body">
              <h5 className="card-title">Black Diamond Solution Climbing Harness</h5>
              <p className="card-text">Men's - Slate X-Large</p>
              <a href="/form" className="btn btn-success">ADD</a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card text-white bg-info mx-3">
            <img className='mx-2 pt-3 rounded mx-auto d-block' src="https://images-na.ssl-images-amazon.com/images/I/516Q94cVy0L._SL160_.jpg" width="auto" height="auto" alt="Black Diamond Solution Climbing Harness"/>
            <div className="card-body">
              <h5 className="card-title">Black Diamond Solution Climbing Harness</h5>
              <p className="card-text">Men's - Slate X-Large</p>
              <a href="/form" className="btn btn-success">ADD</a>
            </div>
          </div>
        </div>
    </div>
        
      
    </div>

  )
}

export default Data