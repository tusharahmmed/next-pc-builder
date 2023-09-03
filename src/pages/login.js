import {ButtonPcBuilder} from "@/components/ui/button/Button";
import RootLayout from "@/layouts/RootLayout";
import {signIn} from "next-auth/react";

const LoginPage = () => {
  return (
    <div className="spacing-x py-12 bg-[#f2f4f8]">
      <div className="m-auto w-80% md:w-[70%] lg:w-[30%] px-4 md:px-1 lg:px-20 py-10 bg-white rounded-[5px] shadow-[box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1)]">
        <h2 className="text-center text-2xl">Login</h2>
        <div className="text-center mt-4 text-white">
          <div>
            <span
              onClick={() =>
                signIn("google", {callbackUrl: "http://localhost:3000/"})
              }>
              <ButtonPcBuilder text={"SignIn with Google"} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
