import { twMerge as tw } from "tailwind-merge";
import { TRelatedTopic } from "@/types";

interface LinkCartProps {
  data: TRelatedTopic;
}

const LinkCart = ({ data }: LinkCartProps) => {
  return (
    <div>
      <div className="flex items-center gap-x-2">
        {data.Topics ? (
          <CartTitle>{data.Topics[0].FirstURL}</CartTitle>
        ) : (
          <CartTitle>{data.FirstURL}</CartTitle>
        )}
        {data.Name && <CartBadge>{data.Name}</CartBadge>}
      </div>
      <div>
        {data.Topics ? (
          <CartLink target="_blank" href={data.Topics[0].FirstURL}>
            {data.Topics[0].Text}
          </CartLink>
        ) : (
          <CartLink target="_blank" href={data.FirstURL}>
            {data.Text}
          </CartLink>
        )}
      </div>
    </div>
  );
};

interface CartTitleProps extends React.ComponentProps<"h6"> {
  children: React.ReactNode;
  className?: string;
}

const CartTitle = ({ children, className, ...props }: CartTitleProps) => {
  return (
    <h6 className={tw(`caption-sm md:caption-md truncate ${className}`)} {...props}>
      {children}
    </h6>
  );
};

interface CartBadgeProps extends React.ComponentProps<"span"> {
  children: React.ReactNode;
  className?: string;
}

const CartBadge = ({ children, className, ...props }: CartBadgeProps) => {
  return (
    <span
      className={tw(
        `caption-sm md:caption-md rounded-lg bg-slate-200 px-2 py-0.5 ${className}`
      )}
      {...props}
    >
      {children}
    </span>
  );
};

interface CartLinkProps extends React.ComponentProps<"a"> {
  children: React.ReactNode;
  className?: string;
}

const CartLink = ({ children, className, ...props }: CartLinkProps) => {
  return (
    <a
      className={tw(
        `body-sm md:body-md text-blue-600 visited:text-blue-900 ${className}`
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default LinkCart;
