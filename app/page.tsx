import HomePage from "@/components/landing-page/hero";
import MissionStrip from "@/components/landing-page/our-mission";
import OrderOfService from "@/components/landing-page/order-of-service";

export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden w-full">
      <HomePage />
      <MissionStrip />
      <OrderOfService />
     
    </div>
    </>
  );
}
