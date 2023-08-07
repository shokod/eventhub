import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata ={
    title:"EventsHub",
    description: "Discover and gift towards events"
}

const RouteLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                < div className='gradient'/>
            </div>
            <main className='app'>
                <Nav />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RouteLayout
