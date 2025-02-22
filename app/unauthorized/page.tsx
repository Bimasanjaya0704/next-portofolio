export default function UnauthorizedPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 md:p-10 2xl:p-14 bg-white dark:bg-[#232329] rounded-lg shadow-md">
        <h2 className="md:text-xl 2xl:text-2xl font-bold text-center text-accent">
          Anda Tidak Terautentikasi
        </h2>
        <p className="text-center mt-4 text-sm md:text-base 2xl:text-lg">
          Anda perlu login untuk mengakses halaman ini.
        </p>
      </div>
    </div>
  );
}
