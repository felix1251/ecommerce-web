import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Banner: React.FunctionComponent = () => {
  return (
    <div className="bg-secondary w-full flex items-center min-h-14">
      <div className="flex margin-max-screen justify-between gap-5 text-white font-medium">
        <div className="flex gap-10">
          <div className="flex gap-0.5 items-center">
            <CallIcon style={{ fontSize: 20 }} />
            <span>(222) 555-0118</span>
          </div>
          <div className="flex gap-1 items-center">
            <MailOutlineIcon style={{ fontSize: 20 }} />
            <div>michelle.rivera@example.com</div>
          </div>
        </div>
        <span>Follow us and get a chance to win 80% off</span>
        <div className="flex gap-1.5 items-center">
          Follow us:
          <InstagramIcon style={{ fontSize: 20 }} />
          <YouTubeIcon style={{ fontSize: 20 }} />
          <FacebookIcon style={{ fontSize: 20 }} />
          <TwitterIcon style={{ fontSize: 20 }} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
