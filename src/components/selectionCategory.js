import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

/**
 * Comentario: Leí mal el enunciado del control, por lo que comencé con esta vista y después me di cuenta que no se realizaba así
 */

function selectionCategory() {
  return (
    <Form>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Control id="disabledTextInput" placeholder="Ingresa palabra a buscar" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select aria-label="select type">
            <option>Selecciona la categoría que quiera obtener</option>
            <option value="animal">animal</option>
            <option value="career">career</option>
            <option value="celebrity">celebrity</option>
            <option value="dev">dev</option>
            <option value="explicit">explicit</option>
            <option value="fashion">fashion</option>
            <option value="food">food</option>
            <option value="history">history</option>
            <option value="money">money</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
  );
}

export default selectionCategory;