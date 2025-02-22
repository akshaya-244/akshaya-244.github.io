// components/WhiteBackgroundWrapper.tsx
const WhiteBackgroundWrapper = ({ children }: { children: React.ReactNode }) => {
    return <div className="bg-white text-black">{children}</div>;
  };
  
  export default WhiteBackgroundWrapper;