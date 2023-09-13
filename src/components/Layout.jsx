const Layout = ({ children, className = "" }) => {
   return (
      <section
         className={`w-full inline-block z-0 px-36 py-14 xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
      >
         {children}
      </section>
   );
};

export default Layout;
