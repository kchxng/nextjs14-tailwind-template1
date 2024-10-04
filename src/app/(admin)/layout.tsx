import Footer from "../_components/layouts/admin/footer";
import Header from "../_components/layouts/admin/header";

type Props = { children: React.ReactNode };

export default function AdminLayout({ children }: Readonly<Props>) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
