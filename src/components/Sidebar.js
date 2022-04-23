import sprite from '../assets/sprite.svg';

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
            <a href="javascript:;" className="side-nav__link">
                <svg className="side-nav__icon">
                    <use href={sprite + "#icon-home"}></use>
                </svg>
                <span>Hotel</span>
            </a>
        </li>
        <li className="side-nav__item">
            <a href="javascript:;" className="side-nav__link">
                <svg className="side-nav__icon">
                    <use href={sprite + "#icon-aircraft-take-off"}></use>
                </svg>
                <span>Flight</span>
            </a>
        </li>
        <li className="side-nav__item">
            <a href="javascript:;" className="side-nav__link">
                <svg className="side-nav__icon">
                    <use href={sprite + "#icon-key"}></use>
                </svg>
                <span>Car rental</span>
            </a>
        </li>
        <li className="side-nav__item">
            <a href="javascript:;" className="side-nav__link">
                <svg className="side-nav__icon">
                    <use href={sprite + "#icon-map"}></use>
                </svg>
                <span>Tours</span>
            </a>
        </li>
      </ul>

      <div className='legal'>
            &copy; 2020 by trillo. All rights reserved.
      </div>
    </nav>
  );
}

export default Sidebar;