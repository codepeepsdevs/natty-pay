import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  handleNumericKeyDown,
  handleNumericPaste,
} from "@/utils/utilityFunctions";
import { motion } from "framer-motion";
import CustomButton from "@/components/shared/Button";
import { zoomIn } from "@/utils/motion";

const contactSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  title: yup.string().required("Title is your required"),
  message: yup.string().required("Message is required"),
});

type ContactFormData = yup.InferType<typeof contactSchema>;

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
    // contactUs(data);
  };

  return (
    <form
      className="w-full flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1">
        <div className="w-full flex flex-col gap-1.5 ">
          <div className="flex flex-col gap-1">
            <input
              type="text"
              {...register("fullName")}
              placeholder="Full Name*"
              className="outline-none text-base text-black dark:text-white bg-bg-600 dark:bg-bg-1100  placeholder:text-text-700 rounded-md py-4 px-4"
            />
            {errors.fullName?.message && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 ">
        <div className="w-full flex flex-col gap-1.5 ">
          <div className="flex flex-col gap-1">
            <input
              {...register("email")}
              type="email"
              placeholder="Email Address*"
              className="outline-none text-base text-black dark:text-white bg-bg-600 dark:bg-bg-1100  placeholder:text-text-700 rounded-md py-4 px-4"
            />
            {errors.email?.message && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 ">
        <div className="w-full flex flex-col gap-1.5 ">
          <div className="flex flex-col gap-1">
            <input
              {...register("phoneNumber")}
              placeholder="Phone Number (Optional)"
              className="outline-none text-base text-black dark:text-white bg-bg-600 dark:bg-bg-1100  placeholder:text-text-700 rounded-md py-4 px-4"
              type="text"
              onKeyDown={handleNumericKeyDown}
              onPaste={handleNumericPaste}
            />
            {errors.phoneNumber?.message && (
              <p className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className="w-full flex flex-col gap-1.5 ">
          <div className="flex flex-col gap-1">
            <input
              type="text"
              {...register("title")}
              placeholder="Title of your message*"
              className="outline-none text-base text-black dark:text-white bg-bg-600 dark:bg-bg-1100  placeholder:text-text-700 rounded-md py-4 px-4"
            />
            {errors.title?.message && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 ">
        <div className="w-full flex flex-col gap-1.5 ">
          <div className="flex flex-col gap-1">
            <textarea
              {...register("message")}
              placeholder="type message here...."
              rows={6}
              className="resize-y outline-none text-base text-black dark:text-white bg-bg-600 dark:bg-bg-1100  placeholder:text-text-700 rounded-md py-4 px-4"
            />
            {errors.message?.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
        </div>
      </div>

      <motion.div className="mt-4 w-full" variants={zoomIn(0.2, 0.5)}>
        <CustomButton className="w-full font-semibold py-3.5 border-2 border-primary text-text-300 text-base 2xs:text-lg max-2xs:px-6 rounded-md">
          Send Message{" "}
        </CustomButton>
      </motion.div>
    </form>
  );
};

export default ContactUsForm;
