import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ListFacts = ({ facts, addToFavorites, removeFromFavorites, favorites }) => {
  const isFavorite = (fact) => {
    return favorites.some(fav => fav.id === fact.id);
  };

  return (
    <div id="results">
      {facts.map((fact) => (
        <Card key={fact.id} className="mb-3">
          <Card.Body>
            <Card.Text><strong>Fact:</strong> {fact.value}</Card.Text>
            <Card.Text><strong>Fecha de creación:</strong> {new Date(fact.created_at).toLocaleString()}</Card.Text>
            <Card.Text className="categories"><strong>Categorías:</strong> {fact.categories.length > 0 ? fact.categories.join(', ') : 'Ninguna'}</Card.Text>
            {isFavorite(fact) ? (
              <Button
                variant="danger"
                onClick={() => removeFromFavorites(fact)}
                className="me-2"
              >
                Eliminar de favoritos
              </Button>
            ) : (
              <Button
                variant="success"
                onClick={() => addToFavorites(fact)}
                className="me-2"
              >
                Agregar a favoritos
              </Button>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ListFacts;