// THIRD-PARTY IMPORTS
import { createContext, ReactNode } from 'react';

// PROJECT IMPORTS
import defaultConfig from '~/config';
import useLocalStorage from '~/hooks/useLocalStorage';
import { CustomizationProps } from '~/types/config';

const initialState: CustomizationProps = {
  ...defaultConfig,
  onChangeLocale: () => {}
};

const ConfigContext = createContext(initialState);

type ConfigProviderProps = {
  children: ReactNode;
};

function ConfigProvider({ children }: ConfigProviderProps) {
  const [config, setConfig] = useLocalStorage('proctoring-config', {
    locale: initialState.locale
  });

  const onChangeLocale = (locale: string) => {
    setConfig({
      ...config,
      locale
    });
  };

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        onChangeLocale
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export { ConfigProvider, ConfigContext };
