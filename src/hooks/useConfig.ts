// THIRD-PARTY IMPORTS
import { useContext } from 'react';

// PROJECT IMPORTS
import { ConfigContext } from '~/contexts/ConfigContext';

const useConfig = () => useContext(ConfigContext);

export default useConfig;
