import './globals.css';

//internal imports
import {KulkonectchatProvider} from '../context/kulkonectchatContext';
import { NavBar } from '../Components/index';


// const MyApp = ({ Component, pageProps }) => (
//     <div>
//         <KulkonectchatProvider>
//             <NavBar />

//             {/* <Component {...pageProps} /> */}
//         </KulkonectchatProvider>
        
//     </div>
// );

// export default MyApp;

export default function MyApp ({ children }){
    return(
        <KulkonectchatProvider>
            <NavBar />
            <main>{children}</main>
        </KulkonectchatProvider>
    )
}