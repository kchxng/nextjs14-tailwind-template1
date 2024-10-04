import Footer from "../_components/layouts/guest/footer";
import Header from "../_components/layouts/guest/header";

type Props = {
  children: React.ReactNode;
};

export default function GuestLayout({ children }: Readonly<Props>) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
