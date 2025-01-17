import React from "react";

const Menu = (props) => {
  const {data} =props
  return (
    <div className='section-center'>
      {data.map((datum) => {
        const { id,img, title ,price,desc} = datum;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
              <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
