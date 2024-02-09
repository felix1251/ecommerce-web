import { SubscribeEmail } from "@/molecules";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="margin-min-screen py-16 flex gap-6 justify-between w-full">
      <ul className="space-y-3 font-medium text-zinc-500">
        <li className="font-bold text-gray-800 text-lg">Company Info</li>
        <li>About us</li>
        <li>Carrier</li>
        <li>We are hiring</li>
        <li>Blog</li>
      </ul>
      <ul className="space-y-3 font-medium text-zinc-500">
        <li className="font-bold text-gray-800 text-lg">Legal</li>
        <li>About us</li>
        <li>Carrier</li>
        <li>We are hiring</li>
        <li>Blog</li>
      </ul>
      <ul className="space-y-3 font-medium text-zinc-500">
        <li className="font-bold text-gray-800 text-lg">Features</li>
        <li>Business Marketing</li>
        <li>User Analytic</li>
        <li>Live Chat</li>
        <li>Unlimited Support</li>
      </ul>
      <ul className="space-y-3 font-medium text-zinc-500">
        <li className="font-bold text-gray-800 text-lg">Resources</li>
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
