// PROJECT IMPORTS
import Locales from '~/ui-component/Locales';
import NavigationScroll from '~/layout/NavigationScroll';
import Routes from '~/routes';
import { JWTProvider as AuthProvider } from '~/contexts/JWTContext';

const App = () => (
  <Locales>
    <NavigationScroll>
      <AuthProvider>
        <>
          <Routes />
        </>
      </AuthProvider>
    </NavigationScroll>
  </Locales>
);

export default App;
