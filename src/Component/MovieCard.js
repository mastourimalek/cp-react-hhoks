import React from 'react'
import {Button, Card, Nav} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ReactStars from 'react-stars'
import { Link } from 'react-router-dom'
import './MovieCard.css'
const MovieCard = ({movie}) => {
  const navigate=useNavigate();
  return (
    <div>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
        {movie.description}
        </Card.Text>
        <ReactStars
  count={5}
  value={movie.rate}
  size={24}
  color2={'#ffd700'} />,
        
      </Card.Body>
      <div className='space'>
      <Link to={`/MovieDescription/${movie.id}`} >Description</Link>
        <Button variant="primary" href={movie.trailer} > Trailer</Button>
        </div>
    </Card>
    </div>
  )
}

export default MovieCard