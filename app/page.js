import Banner from "@/components/banner";
import Services from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-28">
      <Banner/>
      <Services/>
    </div>
  );
}
