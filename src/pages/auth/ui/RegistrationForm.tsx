import {
    TextInput,
    Button,
    Space,
} from '@mantine/core'
import { authApi } from '@shared/api/auth'
import { useForm } from '@shared/utils/useForm'
import { useNavigate } from 'react-router-dom'
import '../styles.scss'

export const RegistrationForm = () => {

    const {values, email, password, name, surname} = useForm({
        email: '',
        password: '',
        name: '',
        surname: ''
    })
    const navigate = useNavigate()

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        authApi.signup(values).then(() => navigate('/'))
    }

    return (
        <>
            <form style={{paddingBottom: '20px'}} onSubmit={submit}>
                <TextInput
                    {...email}
                    label="Email"
                    type="email"
                    placeholder="you@mantine.dev"
                    required
                />
                <Space h='sm'/>
                <TextInput
                    {...password}
                    label="password"
                    type="password"
                    placeholder="Your password"
                    required
                />
                <Space h='sm'/>
                <TextInput
                  {...name}
                  label="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
                <TextInput
                  {...surname}
                  label="surname"
                  type="text"
                  placeholder="Your surname"
                  required
                />
                <Space h='sm'/>
                <Button type="submit" fullWidth >
                    Registration
                </Button>
            </form>
        </>
    )
}
