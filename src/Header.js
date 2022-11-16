import React from 'react'

const Header = () => {
  return (
    <>
      <header>
        <section className='container main-hero-container'>
            <div className='student-info'>
                <h3>Student Info</h3>
                <p>Major : Computer Science</p>
                <p>Minor : Management Information Systems</p>
                <p>Advisor : Dr. Mahady Hasan</p>
            </div>

            <div className='row info'>
                <div className='col-12 col-lg-3 header'>
                    <h2 className=''>Result</h2>
                    <p>CGPA: </p>
                    <p>Earned Credit: </p>
                </div>
                <div className='col-12 col-lg-3 header'>
                    <h2 className=''>COMPLETED CREDIT</h2>
                    <p>Foundation: </p>
                    <p>Core :0 Major :0 Minor:0 </p>
                </div>
                <div className='col-12 col-lg-3 header'>
                    <h2 className=''>REGISTRATION INFO</h2>
                    
                </div>
                <div className='col-12 col-lg-3 header'>
                    <h2 className=''>SCHOLARSHIP</h2>
                    <p>Has no scholarship</p>
                    <a href="#">Apply for scholarship</a>
                </div>
            </div>
            
            <div className='course'>
                <h2>Semester wise Course Outline</h2>
                <div className='row'>
                    <div className='col-12 col-lg-6 course1'>
                    <p>Year</p>
                    <input type="number" placeholder='Year*'></input>
                    </div>
                    <div className='col-12 col-lg-6 course1'>
                    <p>Semester</p>
                    <select name="semester" id="semester">
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                        <option value="Autumn">Autumn</option>
                    </select>
                    </div>
                </div>
                <a type="button" class="nav-link active btn btn-style " aria-current="page" href="#">Download</a>
                
            </div>
        </section>
      </header>
    </>
  )
}

export default Header
