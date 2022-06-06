import { FC } from "react";

import Layout from "../components/organisms/Layout";

const About: FC = () => {
  return (
    <>
      <Layout tabTitle="About">
        <div className="flex flex-col justify-center min- py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-3xl font-extrabold text-center text-neutral-600">
              About
            </h2>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default About;
