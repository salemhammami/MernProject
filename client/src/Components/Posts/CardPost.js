import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faClock, faList, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import { updateValid } from '../../Redux/Actions/PostActions';
import { current } from '../../Redux/Actions/AuthActions';
import picanto from '/Users/mac/Desktop/GoMyCode/Carea/carea/client/src/Assets/picanto.jpg';

const CardPost = ({ el }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const iconStyles = {
    marginRight: '8px',
  };

  useEffect(() => {
    dispatch(current());
  }, []);

  const user = useSelector(state => state.AuthReducer.user);

  return (
    <section className="cardPostStyle">
      <Link to={`/DescriptionPost/${el._id}`}>
        <div>
          {location.pathname === '/MyPosts' && (
            <h4 className='validStyle'>{el?.valid ? 'Annonce valide' : 'Annonce refuse'}</h4>
          )}

          <Card className='border-0 bg-white shadow-sm'>
            <div className="position-relative">
              <img src={el.image} alt="post-image" className='imgPostStyle' />
            </div>

            <section className='cardBody'>
              <p className='categoryStyle'>
                <FontAwesomeIcon icon={faCircleUser} style={iconStyles} />
                {el.owner.name}
              </p>

              <h1 className='priceStyle'>
                {el.price} <span className='dt'>DT</span>
              </h1>
              <h2 className='titleStyle'>
                {el?.title?.length > 23 ? el.title.substring(0, 23) + '...' : el.title}
              </h2>
              <div className='smallerText'>
                <p className='categoryStyle'>
                  <FontAwesomeIcon icon={faList} style={iconStyles} />
                  {el.category}
                </p>
                <p className='categoryStyle'>
                  <FontAwesomeIcon icon={faLocationDot} style={iconStyles} />
                  {el.gouvernorat}, {el.delegation}
                </p>
                <p className='categoryStyle'>
                  <FontAwesomeIcon icon={faClock} style={iconStyles} />
                  {el.date ? moment(el.date, 'DD/MM/YYYY HH:mm:ss').fromNow() : 'Date non-spécifiée'}
                </p>
              </div>
            </section>
          </Card>
        </div>
      </Link>

      {user?.role === 'admin' && (
        <button onClick={() => dispatch(updateValid({ valid: !el.valid }, el._id, location, user._id))}>
          {el.valid ? 'Non valid' : 'Valider'}
        </button>
      )}
    </section>
  );
};

export default CardPost;
