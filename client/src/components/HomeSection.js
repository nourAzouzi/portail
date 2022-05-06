import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HomeSection.css';

function HomeSection({lightBg, topLine, lightText, lightTextDesc, headLine, description, buttonLabel, img, alt, imgStart}) 
{
    console.log(lightBg)
  return(
            <>
            <div className={lightBg ? 'acc__home-section' : 'acc__home-section darkBg'} >
                <div className='container'>
                    <div className='row acc__home-row' style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}} >
                        <div className='col'>
                            <div className='acc__home-text-wrapper'>
                                <div className='top-line'>{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headLine}</h1>
                                <p className={lightTextDesc ? 'acc__home-subtitle' : 'acc__home-subtitle dark'}>{description}</p>
                                <Link to='/sign-up'>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                                </Link>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='acc__home-img-wrapper'>
                                <img src={img} alt={alt} className='acc__home-img'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
}

export default HomeSection;