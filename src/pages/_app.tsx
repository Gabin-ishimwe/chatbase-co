import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

const getLayout = (Component: any) => {
  return function LayoutWrapper(pageProps: any) {
    const route = useRouter();
    // Exclude layout component for specific page routes
    const excludeLayoutRoutes = ["/chatbot/[id]/preview"];

    if (excludeLayoutRoutes.includes(route.pathname)) {
      return <Component {...pageProps} />;
    }

    // Apply layout component for all other pages
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  };
};

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const LayoutComponent = getLayout(Component);
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <LayoutComponent />
    </QueryClientProvider>
  );
}
