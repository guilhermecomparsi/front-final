import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from './theme';
import { RouterProvider } from './routes';
import Button from '@mui/material/Button';


function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider>
        <div style={{ padding: '20px' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              const currentTheme = localStorage.getItem('theme');
              const newTheme = currentTheme === 'light' ? 'dark' : 'light';
              localStorage.setItem('theme', newTheme);
              window.location.reload(); 
            }}
          >
            Alternar Tema
          </Button>
          <RouterProvider />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
