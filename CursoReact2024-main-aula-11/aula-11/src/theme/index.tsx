import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";

// Função que define as configurações dos dois temas
const lightTheme = createTheme({
  typography: {
    fontFamily: ["'Press Start 2P'", "'Roboto'", "sans-serif"].join(","),
  },
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  typography: {
    fontFamily: ["'Press Start 2P'", "'Roboto'", "sans-serif"].join(","),
  },
  palette: {
    mode: "dark",
  },
});

// Criando o ThemeProvider para gerenciar o tema
export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

  // Carregar a preferência de tema do localStorage ou usar o modo claro por padrão
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setThemeMode(storedTheme as 'light' | 'dark');
    }
  }, []);

  // Alternar o tema
  const toggleTheme = () => {
    const newTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);
    localStorage.setItem('theme', newTheme);  // Persistir a escolha do tema no localStorage
  };

  return (
    <MuiThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      {children}
      <button onClick={toggleTheme}>Alternar Tema</button>  {/* Esse botão é apenas para testar */}
    </MuiThemeProvider>
  );
};
