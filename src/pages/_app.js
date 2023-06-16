import ContextProvider from '../context/ContextProvider';
import '@/styles/globals.css'
import 'font-awesome/css/font-awesome.min.css';

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}
