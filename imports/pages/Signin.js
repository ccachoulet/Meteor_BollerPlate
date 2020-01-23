import React , {useState} from 'react'
import {Form , Button , Container} from 'semantic-ui-react'
import { Accounts } from 'meteor/accounts-base'

function Signin(props) {
    const [email , setEmail]        = useState()
    const [password, setPassword]   = useState()

    const signin = () => {
        Media.loginWithPassword(email , password)
    }

    return(
        <Container>
            <h1>Connectez-vous</h1>
            <Form onSubmit={signin}>
                <Form.Input onChange={(e, {value}) => setEmail(value)} label="Email"required type ="email" placeholder="ex : toto@yopmail.com" />
                <Form.Input onChange={(e, {value}) => setPassword(value)} label="Mot de passe"required type="password" placeholder="Entrez votre mot de passe" />
                <Button disabled={!email || !password} color="blue">Me connecter</Button>
            </Form>
        </Container>
    )
}

export default Signin