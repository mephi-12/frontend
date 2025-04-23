import '@shared/styles/common.scss'
import '@shared/styles/unit.scss'
import { Routing } from './routing'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'

export const App = () => {
  return (
    <main>
      <MantineProvider>
        <Routing />
      </MantineProvider>
    </main>
  )
}
