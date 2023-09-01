import '../styles/globals.css';

//internal imports
import {KulkonectchatProvider} from '@/Context/kulkonect_chatContext';
import { NavBar } from '../Components/index';

const MyApp = ({ Component, pageProps }) => (
    <div>
        <KulkonectchatProvider>
            <NavBar />

            <Component {...pageProps} />
        </KulkonectchatProvider>
        
    </div>
);

export default MyApp;