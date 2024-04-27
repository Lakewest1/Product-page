import './Card.css'
import image1 from '../../assets/Hoodiebest4.jpg'
import image2 from '../../assets/hoodiebest2.jpg'
import image3 from '../../assets/Hoodiebest.jpg'

const Card = () => {
  return (
    <div className='Card'>
      <div className="nav-top">
        <div className="left-menu">
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Reviews</a>
          <a href="">Catalog</a>
          <a href="">Contacts</a>
        </div>
        <a href="" className='Duke'>Duke store</a>
        <div className="input-search">
          <i className='fa fa-search'></i>
          <input type="text" />
        </div>
        <a href="/" className='August'>August</a>
      </div>
      <hr/>
      
      <div className="hoodie">
        <div className="hoodie-img">
          <div className="image-left">
            <img src={image1} alt="" />
            <br />
            <img src={image2} alt="" />
          </div>
          <div className="image-right">
            <img src={image3} alt="" />
          </div>
        </div>
        <div className="text-Right">
          <h2>Hoodie 'Cuddle'</h2>
          <p>1200.00 UAH</p>
          <p className='size'>Size</p>
         
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <br />
          <a href="" className='btn'>Add to cart</a>
          
          <div className="payment">
            <p><input type="text" placeholder='Product description' /> <i className='fa fa-plus'></i></p>
            <p><input type="text" placeholder='Delivery and Payment' /> <i className='fa fa-plus'></i></p>
            <p><input type="text" placeholder='Care Recommendations' /> <i className='fa fa-plus'></i></p>
          </div>
        </div>
        
      </div>
      <div className="form1">
        <p>If you have any Questions,leave a <br /> request and we will contact you.</p>
        <input type="text" placeholder='Your name' /> <br />
        <input type="text" placeholder='Phone number' /> <br />
        <a href="">Leave a Comment</a>
      </div>
      <hr />
      <div className="bottom">
        <div className="text-left">
          <p >Site of online store "Duke store" <br /> @2023  All rights reserved.</p>
          <small>Privacy Policy</small>
        </div>
        <div className="main">
          <a href="" className='cont'>Main</a>
          <a href="">About us</a>
          <a href="">Reviews</a>
          <a href="">Categories</a>
          <a href="">Contacts</a>
        </div>
        <div className="link">
          <a href="" className='cont'>Contacts</a>
          <a href="" className='bold'><i className='fa fa-instagram'>  duke store</i></a>
          <a href='' className='bold'><i className='fa fa-envelope'>   duke.store.online@gmail.com</i></a>
           <a href='' className='bold'><i className='fa fa-phone'>+ 38(067) 455 3234</i></a>
        </div>
          
        <div className="btn2">
          <h3>Duke Store</h3>
          <a href="">Order</a>
        </div>
      </div>
    </div>
  )
}

export default Card
