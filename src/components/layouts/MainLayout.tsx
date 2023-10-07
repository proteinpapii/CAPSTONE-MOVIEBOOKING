import { Footer, Header } from 'components'
import { Outlet } from 'react-router-dom'


export const MainLayout = () => {
    return (
        <main>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}


