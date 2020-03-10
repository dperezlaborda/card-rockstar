import React from 'react';
import './Card.scss';

const Card = (props) =>{
    return(
        <div className="card-container">
            <section className="card" style={{
                backgroundImage : `url(${props.img})`
            }}> 
                <article className="card-article">
                    <h3>{props.subtitle}</h3>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </article>
                <div className="icon">
                    <i class="fa fa-arrow-down" aria-hidden="true" style={{
                        color:props.color
                    }}>
                    </i>
                </div>
            </section>
        </div>
    )
}

export default Card; 