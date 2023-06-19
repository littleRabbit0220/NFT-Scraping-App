import ContextProvider from '../context/ContextProvider';
import 'react-calendar/dist/Calendar.css';
import '@/styles/globals.css'
import 'font-awesome/css/font-awesome.min.css';

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}
