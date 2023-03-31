import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from '../images/logo.png'
export default function Footer() {
  return (
   <MDBFooter bgColor='light' className='text-center text-lg-start text-muted fixed-bottom' id="footerstyle" dir='rtl'>
      <section className=''>
        <MDBContainer className='text-center  mt-5 text-start'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <img src={logo} alt="" id='logo'/>
              <p>سایت مشاوره و خدمات روانشناسی psytech</p>
              <ul>
              <li className='icone-under-logo'><span><i className="fa-solid fa-phone"></i></span></li>
                <li className='icone-under-logo'><span><i className="fa-brands fa-telegram" /></span></li>
                <li className='icone-under-logo'><span> <i className="fa-solid fa-envelope" /></span> </li>
                <li className='icone-under-logo'> <span><i className="fa-brands fa-instagram" /></span></li>
              </ul>
            </MDBCol>
            <MDBCol md='4' lg='3' xl='3' className='mx-auto  mb-md-0 mb-4' dir='rtl'>
              <h6 className='text-uppercase fw-bold mb-3' dir='rtl'>پشتیبانی</h6>
              <p dir='rtl'>
                <MDBIcon color='secondary' icon='home' className='me-1' />
                <span> اصفهان، دانشگاه اصفهان   </span>
                
              </p>
              <p>
              <MDBIcon color='secondary' icon='envelope' className='me-2' />
                <span> psytech@gmail.com  </span>
              </p>
              <p dir='rtl'>
                <MDBIcon color='secondary' icon='phone' className='me-3' dir='rtl'/>
               <span dir='rtl'>  0936-666-6666   </span>   
              </p>
            </MDBCol>
            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>خدمات سایت </h6>
              <p>
                <a href='#!' className='text-reset a-non-decoration'>مشاوره خانواده</a>
              </p>
              <p>
                <a href='#!' className='text-reset a-non-decoration'> مشاوره فردی </a>
              </p>
              <p>
                <a href='#!' className='text-reset a-non-decoration'>مشاوره تحصیلی</a>
              </p>
              <p>
                <a href='#!' className='text-reset a-non-decoration'>
                  مشاوره ازدواج
                </a>
              </p>
            </MDBCol>
            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <p>
                <a href='#!' className='text-reset fw-bold a-non-decoration'>
                  درباره ما
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset fw-bold a-non-decoration'>
                  قوانین
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset fw-bold a-non-decoration'>
                 گزارش تخلف
                </a>
              </p>  
            </MDBCol>

            
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}