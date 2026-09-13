import ResolutionBasedWrapper from "../ResolutionBasedWrapper";

const Header = () => {
   return (
      <header className="w-full h-22 bg-(--secondary-background) p-4 flex items-center justify-end gap-4">
         <span>Search</span>
         <span>Messages</span>
         <span>User</span>
         <ResolutionBasedWrapper breakpoint="mobile">
            <span>Burger</span>
         </ResolutionBasedWrapper>
      </header>
   );
};

export default Header;
