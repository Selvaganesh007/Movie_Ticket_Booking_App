import { useParams } from 'react-router-dom';
import './MovieBook.scss';
import { useEffect, useState } from 'react';

function MovieBook() {
  const { id } = useParams();

  return(
  <div>MovieBook {id}</div>
)
}

export default MovieBook;