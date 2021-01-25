import Main from './views/Main';
import { createTheme } from 'src/theme';
import { ThemeProvider } from '@material-ui/core';
import MainLayout from 'src/layout/MainLayout';
function App() {
  const theme = createTheme({
    responsiveFontSizes: true,
    theme: 'LIGHT',
  });
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Main />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
