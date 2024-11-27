import classNames from "classnames";

function Container({ children, className, title = "" }) {
  const containerClasses = classNames("bg-[#425061] rounded-[8px] py-[8px] px-[12px]", {
    [className]: className,
  });

  return (
    <section className={containerClasses}>
      {title && (
        <div className="relative">
          <span className="absolute top-0 left-0 text-[14px] font-semibold text-white-text">
            {title}
          </span>
        </div>
      )}
      {children}
    </section>
  );
}

export default Container;
