import { Provider as TribeProvider } from '@tribeplatform/react-sdk';
import RouteProvider from '../routes';
import { ThemWrapper } from '../themes';

function App() {
  return (
    <TribeProvider
      config={{
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFQUDo6WGxaTnJRcXpPUjVtIiwibmV0d29ya0lkIjoiMFh5UFQwUjhubSIsInRva2VuVHlwZSI6IkxJTUlURUQiLCJlbnRpdHlJZCI6IjBYeVBUMFI4bm0iLCJwZXJtaXNzaW9uQ29udGV4dCI6Ik5FVFdPUksiLCJwZXJtaXNzaW9ucyI6WyIqIl0sImlhdCI6MTY1MDYzNTUxMCwiZXhwIjoxNjUzMjI3NTEwfQ.5hUIJK35OaGf2zS7UOMO_lkywpbHI4NiiZbdcRgfl9o',
        baseUrl: 'https://app.tribe.so/graphql',
        networkDomain: 'mehrdadcommunity.tribeplatform.com/',
      }}
    >
      <ThemWrapper>
        <RouteProvider />
      </ThemWrapper>
    </TribeProvider>
  );
}

export default App;
