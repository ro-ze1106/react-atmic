import { Header } from "../atoms/layout/Header";
import { UserIconWithName } from "../molecules/user/UserIconWithName";

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
