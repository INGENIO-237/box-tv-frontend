import { cn } from "@/lib/utils";
import styles from "@/app/styles/contact.module.css";
import { Button } from "../ui/button";

export default function ContactForm() {
  return (
    <div className={cn(styles.form, "w-[450px] md:h-auto bg-white text-black p-5 rounded-lg")}>
      <h1 className="text-xl md:text-2xl font-bold">Booking Form</h1>
      <p className="my-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <form>
        <div className={cn(styles.form_group)}>
          <input
            type="text"
            placeholder="First name"
            className={cn(styles.inner_form_control)}
          />
          <input
            type="text"
            placeholder="Last name"
            className={cn(styles.inner_form_control)}
          />
        </div>
        <div className={cn(styles.form_group)}>
          <input
            type="tel"
            placeholder="Your phone"
            className={cn(styles.inner_form_control)}
          />
          <input
            type="text"
            placeholder="Your email"
            className={cn(styles.inner_form_control)}
          />
        </div>
        <div className={cn(styles.form_group)}>
          <textarea className={cn(styles.form_control, "min-h-[100px]")} placeholder="Your request"></textarea>
        </div>
        <Button className="w-full rounded-full bg-[#26416C] hover:bg-[#26416C] font-bold">Submit</Button>
      </form>
    </div>
  );
}
