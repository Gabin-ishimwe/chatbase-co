import NavBar from "./UI/NavBar";
import Footer from "./UI/footer";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="bg-white isolate">
      <NavBar />
      <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
