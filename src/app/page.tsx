import Footer from "./_components/layouts/guest/footer";
import Header from "./_components/layouts/guest/header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="pt-12">
      <h1>Home Page</h1>
      <span className="tw-text-orange-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis esse
        recusandae quo fuga minus deleniti distinctio, accusantium temporibus,
        consectetur molestias labore soluta placeat provident delectus obcaecati
        dolore non perferendis ex!
      </span>
      </div>
      <Footer/>
    </div>
  );
}
