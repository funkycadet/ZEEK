import {useSelector} from 'react-redux';
import ThemeButton from '../ThemeButton'

const App = () => {
  const theme = useSelector(state => state.theme);

  return (
    <div className={theme.isLightTheme ? 'light' : 'dark'}>
      <p>Initial Setup</p>
      <ThemeButton />
    </div>
  );
}

export default App;
