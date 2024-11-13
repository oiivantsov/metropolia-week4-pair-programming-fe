import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";
import { useState } from 'react';

const Tours = () => {
  const [toursData, setToursData] = useState(tours);

  const handleDeleteItem = (id) => {
    const newServicesData = toursData.filter((tour) => tour.id !== id);
    setToursData(newServicesData);
  };

  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return <Tour 
          key={tour.id} 
          {...tour} 
          onDelete = {handleDeleteItem}/>;
        })}
      </div>
    </section>
  );
};
export default Tours;
