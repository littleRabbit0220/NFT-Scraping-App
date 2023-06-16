import { AppContext } from '@/context/ContextProvider';
import classnames from 'classnames';
import { useContext } from 'react';

const Footer = () => {
  const { state } = useContext(AppContext);
  return (
    <footer>
      <div className={classnames("bg-slate-100 p-5",{"bg-slate-700 text-white":state.viewMode})}>
        <h3 className="text-2xl text-center">The copyright reserved. Made by <strong className="text-blue-500">sam@xsss.com</strong></h3>
      </div>
    </footer>
  );
}

export default Footer;