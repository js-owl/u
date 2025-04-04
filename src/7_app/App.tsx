import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '1_shared/libs/classNames/classNames';
import { Sidebar } from '4_widgets/Sidebar';
import { Navbar } from '4_widgets/Navbar';
import { useTheme } from '7_app/providers/ThemeProvider';
import { getUserInited, userActions } from '2_entities/User';
import { AppRouter } from './providers/router';

console.log('|-App');
const App = () => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
export default App;
