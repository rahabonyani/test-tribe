import { Provider as TribeProvider } from '@tribeplatform/react-sdk';
import RouteProvider from '../routes';
import { ThemWrapper } from '../themes';

function App() {
  return (
    <TribeProvider
      config={{
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlNCZVBaNUhDWFgiLCJleHRlcm5hbEFjdG9ySWQiOiJBUFA6OlhsWk5yUXF6T1I1bSIsIm5ldHdvcmtJZCI6IjBYeVBUMFI4bm0iLCJ0b2tlblR5cGUiOiJMSU1JVEVEIiwiZW50aXR5SWQiOiIwWHlQVDBSOG5tIiwicGVybWlzc2lvbkNvbnRleHQiOiJORVRXT1JLIiwicGVybWlzc2lvbnMiOlsiKiJdLCJpYXQiOjE2NTA4MTY2MjQsImV4cCI6MTY1MzQwODYyNH0.GNvmmKZHPpUqCpQEUB6RaDQP-Z_oRkkeHa97iNptbLw',
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
