import React , {useState} from 'react'
import {Form , Button , Container} from 'semantic-ui-react'
import { Accounts } from 'meteor/accounts-base'

function Signup(props) {
    const [email , setEmail]        = useState()
    const [password, setPassword]   = useState()

    const signup = () => {
        Accounts.createUser({
            email,
            password
        }, (err) => { 
            if(err){
                alert(err.message)
            }else{
                console.log('Utilisateur crée')
            }
        })
    }
    
    return(
        <Container>
            <h1>Inscrivez-Vous !</h1>
            <Form onSubmit={signup}>
                <Form.Input onChange={(e, {value}) => setEmail(value)} label="Email"required type ="email" placeholder="ex : toto@yopmail.com" />
                <Form.Input onChange={(e, {value}) => setPassword(value)} label="Mot de passe"required type="password" placeholder="Entrez votre mot de passe" />
                <Button disabled={!email || !password} color="blue">M'inscrire</Button>
            </Form>
        </Container>
    )
}

export default Signup