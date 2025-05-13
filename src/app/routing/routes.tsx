import { MenuPage } from '@pages/menu'
import {
    SathcelCryptosystemCommon,
    SathcelCryptosystemDemo,
    SathcelCryptosystemEditorial,
} from '@pages/satchelCryptosystem'
import {
    SatchelCryptosystemBackdoorCommon,
    SatchelCryptosystemBackdoorEditorial,
    SatchelCryptosystemBackdoorDemo
} from '@pages/satchelCryptosystemBackdoor'
import {
    ElgamalCryptosystemCommon,
    ElgamalCryptosystemDemo,
    ElgamalCryptosystemEditorial
} from '@pages/elgamalCryptosystem'
import { AuthPage } from '@pages/auth'
import { urlByUnitName } from '@shared/config/units'
import { ChallengePage } from '@pages/challenge'
import { AboutPage } from '@pages/about'
import { ResultsPage } from '@pages/results'

export const routes = [
    {
        url: '/',
        element: MenuPage
    },
    {
        url: '/signin',
        element: AuthPage
    },
    {
        url: '/signup',
        element: AuthPage
    },
    {
        url: '/challenge',
        element: ChallengePage
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
        element: SatchelCryptosystemBackdoorEditorial,
    },
    {
        url: urlByUnitName('satchel_cryptosystem_backdoor', 'demo'),
        element: SatchelCryptosystemBackdoorDemo,
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
    },
    {
        url: 'about',
        element: AboutPage
    },
    {
        url: 'results',
        element: ResultsPage
    }
] as const
