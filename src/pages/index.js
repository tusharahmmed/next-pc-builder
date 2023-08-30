import RootLayout from "@/layouts/RootLayout";

export default function Homepage() {
  return (
    <div className="h-screen">
      <h1 className="text-4xl">This is home page vr</h1>
    </div>
  );
}

Homepage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
