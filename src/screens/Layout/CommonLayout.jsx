import { Outlet } from "react-router-dom";
import Menu from "../../component/Menu";

const CommonLayout = () => {
  return (
    <div>
      <header>This is header</header>
      <nav>
        <Menu />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default CommonLayout;
