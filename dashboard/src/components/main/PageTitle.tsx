type PageTitleProps = {
   title: string;
};

const PageTitle = ({ title }: PageTitleProps) => {
   return (
      <div className="w-full">
         <h2 className="text-3xl mb-3">{title}</h2>
         <div className="breadcrumbs">breadcrumbs</div>
      </div>
   );
};

export default PageTitle;
