# useFetch

## 1. Description

Like useSWR, it caches the retrieved data.
It is also possible to pass cache data from SSR.

## 2. usage

### 2.1. Basic

```ts
type fetchOption<T> = {
  fetch?: fetcherFn<T>; // Default: (key) => fetch(key).then((data) => data.json());
  initialData?: T;      // first data
  skip?: boolean;       // If 'true', execution will be skipped
};

useFetch<DataType>(key: string, options?: fetchOption<DataType>): {
    data?: WeatherType;
    dispatch: (data?: T) => void; //update cache
    isValidating: boolean;        //fetch in progress
    error: unknown;               //catch error
}
```

### 2.2. SSR

SSR can be done automatically by passing cache data as follows in Next.js.  
Use'getDataFromTree' and 'createCache'.

**_app.tsx**

```tsx:_app.tsx
import { AppContext, AppProps } from 'next/app';
import { createCache, getDataFromTree, CacheType } from 'use-fetch';

const IS_SERVER = !process.browser;

const App = (props: AppProps & { cache: CacheType }) => {
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
```

## 3. example

```tsx
import { useFetch } from 'use-fetch';

export const Page = () => {
  const router = useRouter();
  const { data, error, isValidating, dispatch } = useFetch<DataType>(
    "URL"
  );
  return (
    <>
      <button onClick={dispatch()}>Reload</button>
      {isValidating && <div>Loading</div>}
      {error && <div>Error</div>}
      {data && <pre>{JSON.stringify(data,undefined,'  ')}</pre>}
    </>
  );
};
```
