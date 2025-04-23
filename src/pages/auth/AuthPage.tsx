import { Button, Container, Group } from "@mantine/core"
import { useLocation, useNavigate } from "react-router-dom"
import { LoginForm } from './ui/LoginForm'
import { RegistrationForm } from "./ui/RegistrationForm"
import './styles.scss'

const Nav = ({isRegistration}) => {
  const navigate = useNavigate()
  return (
    <Group grow justify='space-between' gap={0}>
      <Button
        style={{width: '50%'}}
        size='md'
        radius={0}
        color={!isRegistration ? 'red' : 'gray'}
        onClick={() => navigate('/signin')}
      >Логин</Button>
      <Button 
        style={{width: '50%'}}
        size='md' 
        radius={0}
        color={isRegistration ? 'red' : 'gray'}
        onClick={() => navigate('/signup')}
      >Регистрация</Button>
    </Group>
  )

}


const AuthPage = () => {
  const path = useLocation().pathname
  const navigate = useNavigate()
  const navigateTo = () => navigate('/home')

  return (
      <Container size={620} my={40} mt='250px' p={0} className='container-shadow' style={{backgroundColor: 'white'}}>
          <Nav isRegistration={path === '/signup'}/>
          <br/>
          <Container style={{backgroundColor: 'white'}}>
            <div style={{width: '100%'}}>
              {path === '/signin' && <LoginForm />}
              {path === '/signup' && <RegistrationForm />}
            </div>
          </Container>
      </Container>
  )
}

export default AuthPage
