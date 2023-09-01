import '../styles/globals.css';

//internal imports
import { kulkonect_chatProvider } from '../context/kulkonectchatContext';
import { NavBar } from '../Components/index';

const MyApp = ({ Component, pageProps }) => (
    <div>
        <kulkonect_chatProvider>
            <NavBar />

            <Component {...pageProps} />
        </kulkonect_chatProvider>
        
    </div>
);

export default MyApp;