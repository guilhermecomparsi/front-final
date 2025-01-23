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
          {/* Botão para alternar entre temas */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              const currentTheme = localStorage.getItem('theme');
              const newTheme = currentTheme === 'light' ? 'dark' : 'light';
              localStorage.setItem('theme', newTheme);
              window.location.reload(); // Recarregar a página para aplicar o novo tema
            }}
          >
            Alternar Tema
          </Button>

          {/* Exibe a lista de Pokémons filtrada */}
          <RouterProvider />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
