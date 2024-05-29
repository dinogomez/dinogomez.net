import { ThemeProvider } from "@/lib/provider/theme-provider";
import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

const Provider: React.FC<ProviderProps> = async ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default Provider;
