import Footer from "./_components/layouts/guest/footer";
import Header from "./_components/layouts/guest/header";
import { Button, HR } from "flowbite-react";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";
export default function Home() {
  return (
    <div>
      <Header />
      <br />
      <div className="p-16">
        <h1>Home Page</h1>
        <div className="flex flex-wrap gap-2">
          <Button className="focus:ring-2" gradientMonochrome="info">
            Info
          </Button>
          <Button className="focus:ring-2" gradientMonochrome="success">
            Success
          </Button>
          <Button className="focus:ring-2" gradientMonochrome="cyan">
            Cyan
          </Button>
          <Button className="focus:ring-2" gradientMonochrome="teal">
            Teal
          </Button>
          <Button className="focus:ring-2" gradientMonochrome="lime">
            Lime
          </Button>
          <Button className="focus:ring-2" gradientMonochrome="failure">
            Failure
          </Button>
          <Button className="focus:ring-2" gradientMonochrome="pink">
            Pink
          </Button>
          <Button className="focus:ring-2" gradientMonochrome="purple">
            Purple
          </Button>
        </div>
        <HR />
        <div className="flex flex-wrap gap-2">
          <Button className="focus:ring-2" gradientDuoTone="purpleToBlue">
            Purple to Blue
          </Button>
          <Button className="focus:ring-2" gradientDuoTone="cyanToBlue">
            Cyan to Blue
          </Button>
          <Button className="focus:ring-2" gradientDuoTone="greenToBlue">
            Green to Blue
          </Button>
          <Button className="focus:ring-2" gradientDuoTone="purpleToPink">
            Purple to Pink
          </Button>
          <Button className="focus:ring-2" gradientDuoTone="pinkToOrange">
            Pink to Orange
          </Button>
          <Button className="focus:ring-2" gradientDuoTone="tealToLime">
            Teal to Lime
          </Button>
          <Button className="focus:ring-2" gradientDuoTone="redToYellow">
            Red to Yellow
          </Button>
        </div>
        <HR />
        <div className="flex flex-wrap gap-2">
          <Button className="focus:ring-2">
            <HiShoppingCart className="mr-2 h-5 w-5" />
            Buy now
          </Button>
          <Button className="focus:ring-2">
            Choose plan
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <span className="tw-text-orange-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis esse
          recusandae quo fuga minus deleniti distinctio, accusantium temporibus,
          consectetur molestias labore soluta placeat provident delectus
          obcaecati dolore non perferendis ex!
        </span>
      </div>
      <Footer />
    </div>
  );
}
