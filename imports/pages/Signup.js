import React from 'react'
import {Form , Button , Container} from 'semantic-ui-react'

function Signup(props) {
    return(
        <Container>
            <h1>Inscrivez-Vous !</h1>
            <Form>
                <Form.Input label="Email"required type="email" placeholder="ex : toto@yopmail.com" />
                <Form.Input label="Mot de passe"required type="password" placeholder="Entrez votre mot de passe" />
                <Button color="blue">M'inscrire</Button>
            </Form>
        </Container>
    )
}

export default Signup