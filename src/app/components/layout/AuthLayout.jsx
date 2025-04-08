// components/layouts/AuthLayout.jsx

export default function AuthLayout({ children }) {
  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/Login.png')" }}
    >
      <div className="w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

  