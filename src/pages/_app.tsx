import { AppContext, AppProps } from 'next/app';
import { CachesType, createCache, getDataFromTree } from '@react-libraries/use-fetch';

const IS_SERVER = !process.browser;

const App = (props: AppProps & { cache: CachesType }) => {
  const { Component, cache } = props;
  !IS_SERVER && createCache(cache);
  return <Component />;
};
App.getInitialProps = async ({ Component, router, AppTree }: AppContext) => {
  const cache = IS_SERVER
    ? await getDataFromTree(<AppTree Component={Component} pageProps={{}} router={router} />)
    : {};
  return { cache };
};
export default App;
