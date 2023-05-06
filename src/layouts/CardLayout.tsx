import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id: string;
};

function CardLayout({ children, id }: Props) {
  return (
    <div
      id={id}
      className="grid gap-3 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
    >
      {children}
    </div>
  );
}

export default CardLayout;
