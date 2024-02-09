import { SubscribeEmail } from "@/molecules";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="margin-min-screen py-16 flex flex-col md:flex-row gap-7 justify-between w-full flex-wrap">
      <ul className="space-y-3 font-medium text-zinc-500">
        <li className="font-bold text-gray-800">Company Info</li>
        <li>About us</li>
        <li>Carrier</li>
        <li>We are hiring</li>
        <li>Blog</li>
      </ul>
      <ul className="space-y-3 font-medium text-zinc-500">
        <li className="font-bold text-gray-800">Legal</li>
        <li>About us</li>
        <li>Carrier</li>
        <li>We are hiring</li>
        <li>Blog</li>
      </ul>
      <ul className="space-y-3 font-medium text-zinc-500">
        <li className="font-bold text-gray-800">Features</li>
        <li>Business Marketing</li>
        <li>User Analytic</li>
        <li>Live Chat</li>
        <li>Unlimited Support</li>
      </ul>
      <ul className="space-y-3 font-medium text-zinc-500">
        <li className="font-bold text-gray-800">Resources</li>
        <li>IOS & Android</li>
        <li>Watch a Demo</li>
        <li>Customers</li>
        <li>API</li>
      </ul>
      <SubscribeEmail />
    </footer>
  );
};

export default Footer;
