import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id: string;
};

function CardLayout({ children, id }: Props) {
  return (
    <div className="mx-3">
      <div id={id} className="flex flex-wrap">
        {children}
      </div>
    </div>
  );
}

export default CardLayout;
