import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="mdevansh2007@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+919354802140" Image={FiPhone} />
      <SingleInfo text="Greater Noida, UP" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
