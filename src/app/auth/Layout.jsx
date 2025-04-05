// export default function Layout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <main className="min-h-screen flex items-center justify-center bg-gray-100">
//           {children}
//         </main>
//       </body>
//     </html>
//   );
// }

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
