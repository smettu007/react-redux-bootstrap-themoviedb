import React from "react";

import { Col } from "react-bootstrap";
// import Spinner from './../Spinner/Spinner';
import classes from './MoiveListContainer.css';
import {Link} from 'react-router-dom';
// import { Card, Icon, Image } from 'semantic-ui-react'
import {
  Card,
  CardBody,
  CardImg,

  CardSubtitle,
  
  CardTitle
} from "reactstrap";

const MoiveListContainer = (props) => {

    return (props.movies && props.movies.length > 0) ? (  
    
    props.movies.map((item, index) => (

      <Col xs={6} md={3} lg={3} key={index}>
            <Link to={"/movielist/movie/" + item.id}>
            <Card  >
             <CardImg
             className={classes.cursor}
               top
               width="100%"
               src={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
               alt={item.title}
            
             />
             <CardBody>
               <CardTitle className={classes.movieTitle}>{item.title}</CardTitle>
               <CardSubtitle>Rating: {item.vote_average}</CardSubtitle>
             </CardBody>
           </Card>
          </Link>
    </Col> 
      ))
 
    ) :null
};

export default MoiveListContainer;
