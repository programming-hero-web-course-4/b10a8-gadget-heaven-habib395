import React from 'react';
import { Link } from 'react-router-dom';

const Computer = ({computer}) => {
    const {product_id, product_title, product_image, category, price, description,Specification, brand } = computer;
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={product_image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className='text-xl font-bold'>{product_title}</h2>
    <p className='text-xl font-semibold'>Price:{price}</p>
    <div>
      <Link to={`/computer/${product_id}`}>
      <button className="btn rounded-full bg-transparent text-base border-[#9538E2] text-[#9538E2] font-bold">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default Computer;