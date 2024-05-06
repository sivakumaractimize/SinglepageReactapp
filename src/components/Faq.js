import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Faq = () => {
  const [data, setData] = useState([
    { id: 1, name: "What is your coffee sourced?", des: "Our coffee is sourced from sustainable farms around the world, ensuring the highest quality and ethical practices.", ishover: false, isopen: false },
    { id: 2, name: "Do You Prefer Vegan Offer?", des: "Yes, we offer a variety of vegan options, including plant-based milk alternatives & vegan pastries..", ishover: false, isopen: false },
    { id: 3, name: "What are your working hours?", des: "We are open every day from 7am to 7pm.", ishover: false, isopen: false },
  ]);

  const handlehover = (id) => {
    const updatedata = data.map((item) => {
      if (id === item.id) {
        return { ...item, ishover: !item.ishover };
      } else {
        return item;
      }
    });
    setData(updatedata);
  };

  const handleopen = (id) => {
    const updatedata = data.map((item) => {
      if (id === item.id) {
        return { ...item, isopen: !item.isopen };
      } else {
        return { ...item, isopen: false }; 
      }
    });
    setData(updatedata);
  };

  return (
    <>
      <div className="" style={{ backgroundColor: '#369392' }}>
        <div className="container ">

          <h1 className="heading fw-bolder text-center">Meet Our Team</h1>
          <p className="text-center">We are a group of adventure-seeking, coffee-loving Danns.</p>

          <div className="accordion d-flex justify-content-center align-items-center flex-column" id="accordionExample">

            {data.map((item) => (
              <div className="accordion-item col-sm-6 col-lg-6 col-md-12 mt-2" key={item.id}>
                <h2 className="accordion-header">
                  <button className={item.isopen ? "accordion-button bg-cyan" : "accordion-button bg-white"} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded={item.isopen ? 'true' : 'false'} aria-controls={`collapse${item.id}`} onClick={() => handleopen(item.id)}>
                    <h5 className={`fw-bolder ${item.ishover ? "text-danger" : ""}`} onMouseEnter={() => handlehover(item.id)} onMouseLeave={() => handlehover(item.id)}>
                      {item.name}
                    </h5>
                  </button>
                </h2>
                <div id={`collapse${item.id}`} className={`accordion-collapse collapse ${item.isopen ? 'show' : ''}`} data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>{item.des}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>

          <h2 className="text-center fw-bolder mt-5">Still have questions?</h2>
          <p className="text-center">Contact us for more information.</p>
          <div className="text-center ">
            <button className="btn border btn-light  btn-outline-warning  fw-bolder text-dark border-2 border-warning mb-2 ">CONTACT</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Faq;
