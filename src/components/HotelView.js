import sprite from '../assets/sprite.svg';
import hotelOne from '../assets/hotel-1.jpg';
import hotelTwo from '../assets/hotel-2.jpg';
import hotelThree from '../assets/hotel-3.jpg';

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

    </main>
  );
}

export default HotelView;