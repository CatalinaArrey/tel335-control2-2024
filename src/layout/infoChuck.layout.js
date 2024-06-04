import axios from "axios";
import React, { useState } from "react";
import { InputGroup, FormControl, Button, Container, Alert, Modal } from 'react-bootstrap';

import ListFacts from "../components/ListFacts";
import ListFavs from "../components/ListFavs";

import { useSelector, useDispatch } from 'react-redux';

function InfoChuck() {
    const [query, setQuery] = useState('');
    const [showFavorites, setShowFavorites] = useState(false);
    const { facts, favorites, error } = useSelector(state => state);
    const dispatch = useDispatch();

    const fetchFacts = async () => {
        if (!query) {
            alert('Por favor, escribe una palabra clave.');
            return;
        }

        try {
            const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`);
            dispatch({ type: 'FETCH_FACTS', payload: response.data.result });
            dispatch({ type: 'SET_ERROR', payload: '' });
        } catch (error) {
            dispatch({ type: 'SET_ERROR', payload: 'Ocurrió un error al obtener los facts. Por favor, intenta nuevamente.' });
            dispatch({ type: 'FETCH_FACTS', payload: [] });
        }
    };

    const addToFavorites = (fact) => {
        if (!favorites.some(fav => fav.id === fact.id)) {
            dispatch({ type: 'ADD_TO_FAVORITES', payload: fact });
        }
    };

    const removeFromFavorites = (fact) => {
        dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: fact });
    };

    const handleShowFavorites = () => {
        setShowFavorites(true);
    };

    const handleCloseFavorites = () => {
        setShowFavorites(false);
    };

    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">¡Facts de Chuck Norris!</h1>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Escribe una palabra para encontrar facts al respecto"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Button variant="primary" className="btn-search" onClick={fetchFacts}>Buscar</Button>
            </InputGroup>
            {error && <Alert variant="danger">{error}</Alert>}
            <ListFacts facts={facts} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} favorites={favorites} />
            <Button variant="info" className="btn-favorites" onClick={handleShowFavorites}>
                Ver mis favoritos
            </Button>
            <Modal show={showFavorites} onHide={handleCloseFavorites}>
                <Modal.Header closeButton>
                    <Modal.Title>Mis favoritos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListFavs favorites={favorites} removeFromFavorites={removeFromFavorites} />
                </Modal.Body>
            </Modal>
        </Container >
    );
}

export default InfoChuck;