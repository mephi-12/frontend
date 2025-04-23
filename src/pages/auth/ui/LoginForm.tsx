import {
    TextInput,
    Button,
    Space,
} from '@mantine/core'
import { authApi } from '@shared/api/auth'
import { useForm } from '@shared/utils/useForm'
import {useNavigate} from "react-router-dom"
import '../styles.scss'

export const LoginForm = () => {
    const navigate = useNavigate()

    const {values, email, password} = useForm({
        email: '',
        password: '',
    })

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        authApi.signin(values).then(() => navigate('/'))
    }

    return (
        <form onSubmit={submit} style={{paddingBottom: '20px'}}>
            <TextInput
                label="Email"
                type="email"
                placeholder="you@mantine.dev"
                required
                {...email}
            />
            <Space h='md'/>
            <TextInput
                label="password"
                type="password"
                placeholder="Your password"
                required
                {...password}
            />
            <Space h='xl'/>
            <Button type="submit" color="#FA5252" fullWidth>
                Sign in
            </Button>
            <Space h='md'/>
        </form>
    )
}
