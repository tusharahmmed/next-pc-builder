import {ButtonPcBuilder} from "@/components/ui/button/Button";
import RootLayout from "@/layouts/RootLayout";

const RegisterPage = () => {
  return (
    <div className="spacing-x py-12 bg-[#f2f4f8]">
      <div className="m-auto w-80% md:w-[70%] lg:w-[30%] px-4 md:px-1 lg:px-20 py-10 bg-white rounded-[5px] shadow-[box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1)]">
        <h2 className="text-center text-2xl">Register</h2>
        <div className="text-center mt-4 text-white">
          <ButtonPcBuilder text={"Register with Google"} />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

RegisterPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
