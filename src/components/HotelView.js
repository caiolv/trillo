import sprite from '../assets/sprite.svg';
import hotelOne from '../assets/hotel-1.jpg';
import hotelTwo from '../assets/hotel-2.jpg';
import hotelThree from '../assets/hotel-3.jpg';
import user3 from '../assets/user-3.jpg';
import user4 from '../assets/user-4.jpg';
import user5 from '../assets/user-5.jpg';
import user6 from '../assets/user-6.jpg';

function HotelView() {
  return (
    <main className="hotel-view">
      <div className="gallery">
        <figure className="gallery__item">
            <img src={hotelOne} alt="Photo of Hotel 1" className="gallery__photo" />
        </figure>
        <figure className="gallery__item">
            <img src={hotelTwo} alt="Photo of Hotel 2" className="gallery__photo" />
        </figure>
        <figure className="gallery__item">
            <img src={hotelThree} alt="Photo of Hotel 1" className="gallery__photo" />
        </figure>
      </div>

      <div className='overview'>
          <h1 className='overview__heading'>Hotel Las Palmas</h1>
          <div className='overview__stars'>
                <svg className="overview__icon-star">
                    <use href={sprite + "#icon-star"}></use>
                </svg>
                <svg className="overview__icon-star">
                    <use href={sprite + "#icon-star"}></use>
                </svg>
                <svg className="overview__icon-star">
                    <use href={sprite + "#icon-star"}></use>
                </svg>
                <svg className="overview__icon-star">
                    <use href={sprite + "#icon-star"}></use>
                </svg>
                <svg className="overview__icon-star">
                    <use href={sprite + "#icon-star"}></use>
                </svg>
          </div>
          <div className='overview__location'>
            <svg className="overview__icon-location">
                <use href={sprite + "#icon-location-pin"}></use>
            </svg>
            <button className='btn-inline'>Albufeira, Portugal</button>
          </div>
          <div className='overview__rating'>
            <div className='overview__rating-average'>8.6</div>
            <div className='overview__rating-count'>429 votes</div>
          </div>
      </div>

      <div className='detail'>
        <div className='description'>
            <p className='paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
            </p>
            <p className='paragraph'>
                Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
            </p>
            <ul className='list'>
                <li className='list__item'>Close to the beach</li>
                <li className='list__item'>Breakfast included</li>
                <li className='list__item'>Free airport shuttle</li>
                <li className='list__item'>Free wifi in all rooms</li>
                <li className='list__item'>Air conditioning and heating</li>
                <li className='list__item'>Pets allowed</li>
                <li className='list__item'>We speak all languages</li>
                <li className='list__item'>Perfect for families</li>
            </ul>
            <div className='recommend'>
                <p className='recommend__count'>
                    Lucy and 3 other friends recommend this hotel.
                </p>
                <div className='recommend__friends'>
                    <img src={user3} alt="Friend 1" className='recommend_photo' />
                    <img src={user4} alt="Friend 2" className='recommend_photo' />
                    <img src={user5} alt="Friend 3" className='recommend_photo' />
                    <img src={user6} alt="Friend 4" className='recommend_photo' />
                </div>
            </div>
        </div>
        <div className='user-reviews'>
            user-reviews
        </div>
      </div>

    </main>
  );
}

export default HotelView;