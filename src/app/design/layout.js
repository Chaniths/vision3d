import DesignLayout from "../components/layout/DesignLayout";
import GeneralLayout from "../components/layout/GeneralLayout";

export default function Layout({ children }) {
  return <GeneralLayout>{children}</GeneralLayout>;
}

