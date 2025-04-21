import { MenuPage } from '@pages/menu'
import {
    SathcelCryptosystemCommon,
    SathcelCryptosystemDemo,
    SathcelCryptosystemEditorial,
} from '@pages/satchelCryptosystem'
import {
    SatchelCryptosystemBackdoorCommon,
    SatchelCryptosystemBackdooEditorial,
    SatchelCryptosystemBackdooDemo
} from '@pages/satchelCryptosystemBackdoor'
import {
    ElgamalCryptosystemCommon,
    ElgamalCryptosystemDemo,
    ElgamalCryptosystemEditorial
} from '@pages/elgamalCryptosystem'
import { SigninPage } from '@pages/signin'
import { SignupPage } from '@pages/signup'
import { urlByUnitName } from '@shared/config/units'

export const routes = [
    {
        url: '/',
        element: MenuPage
    },
    {
        url: '/signin',
        element: SigninPage,
    },
    {
        url: '/signup',
        element: SignupPage
    },
    {
        url: urlByUnitName('satchel_cryptosystem', 'common'),
        element: SathcelCryptosystemCommon,
    },
    {
        url: urlByUnitName('satchel_cryptosystem', 'editorial'),
        element: SathcelCryptosystemEditorial,
    },
    {
        url: urlByUnitName('satchel_cryptosystem', 'demo'),
        element: SathcelCryptosystemDemo,
    },
    {
        url: urlByUnitName('satchel_cryptosystem_backdoor', 'common'),
        element: SatchelCryptosystemBackdoorCommon,
    },
    {
        url: urlByUnitName('satchel_cryptosystem_backdoor', 'editorial'),
        element: SatchelCryptosystemBackdooEditorial,
    },
    {
        url: urlByUnitName('satchel_cryptosystem_backdoor', 'demo'),
        element: SatchelCryptosystemBackdooDemo,
    },
    {
        url: urlByUnitName('elgamal_cryptosystem', 'common'),
        element: ElgamalCryptosystemCommon,
    },
    {
        url: urlByUnitName('elgamal_cryptosystem', 'editorial'),
        element: ElgamalCryptosystemEditorial,
    },
    {
        url: urlByUnitName('elgamal_cryptosystem', 'demo'),
        element: ElgamalCryptosystemDemo,
    }
]
