import React from 'react'
import dental1 from '../assets/images/braces.png'
import dental2 from '../assets/images/crown.png'
import dental3 from '../assets/images/dental-filling.png'
import dental4 from '../assets/images/dental4.png'
import dot from '../assets/images/dot.png'
// import page from '../assets/images/page.png'

const Problems = () => {
  return (
  
   <div className="container ">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 mb-3">
          <h5 className="text-start mt-2 pb-1 problem-title font-16 fw-bold">Choose Problems</h5>
          <div class="grid-container">
            <div class="grid-item ">
              <div className="row">
                <div className="img-div d-flex justify-content-between">
                  <div className="para text-center">
                  <img src={dental1} className='dental dental-color' alt='..dental' width="30" height="30" />
                  </div>
                  <img src={dot} alt='..dental' className='dot-img' width="30" height="30" />
                </div>

              </div>
              <div className="row">
                <span className='font-18 fw-normal'>Dental Braces</span>
              </div>
            </div>
            <div class="grid-item ">
              <div className="row">
                <div className="img-div d-flex justify-content-between">
                  <img src={dental2} className='dental' alt='..dental' width="30" height="30" />
                  <img src={dot} className='dot-img' alt='..dental' width="30" height="30" />
                </div>

              </div>
              <div className="row">
                <span className='font-18 fw-normal'>Dental Crown</span>
              </div>
            </div>
            <div class="grid-item"><div className="row">
              <div className="img-div d-flex justify-content-between">
                <img src={dental3} className='dental' alt='..dental' width="30" height="30" />
                <img src={dot} alt='..dental' className='dot-img' width="30" height="30" />
              </div>

            </div>
              <div className="row">
                <span className='font-18 fw-normal'>Dental Filling</span>
              </div></div>
            <div class="grid-item"><div className="row">
              <div className="img-div d-flex justify-content-between">
                <img src={dental4} className='dental' alt='..dental' width="30" height="30" />
                <img src={dot} alt='..dental' className='dot-img' width="30" height="30" />
              </div>

            </div>
              <div className="row">
                <span className='font-18 fw-normal'>Anesthesia</span>
              </div></div>

          </div>

        </div>

      </div>

      
    </div>
    
  )
}

export default Problems