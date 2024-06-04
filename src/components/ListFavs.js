import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ListFavs = ({ favorites, removeFromFavorites }) => {
  return (
    <div id="favorites">
      {favorites.map((fact) => (
        <Card key={fact.id} className="mb-3">
          <Card.Body>
            <Card.Text><strong>Fact:</strong> {fact.value}</Card.Text>
            <Card.Text><strong>Fecha de creación:</strong> {new Date(fact.created_at).toLocaleString()}</Card.Text>
            <Card.Text className="categories"><strong>Categorías:</strong> {fact.categories.length > 0 ? fact.categories.join(', ') : 'Ninguna'}</Card.Text>
            <Button
              variant="danger"
              onClick={() => removeFromFavorites(fact)}
            >
              Eliminar de favoritos
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ListFavs;
