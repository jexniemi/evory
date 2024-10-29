/* 
import List from "@material-ui/core/List";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Image from "next/image";
import Link from "next/link";
import { apps } from "/applications";
import { getAppIconPath } from "@/utils";

export default function Drawer({ open, setOpen }) {
  const list = () => (
    <List>
      {Object.keys(apps).map((category, idx) => {
        return (
          <CategoryContainer key={category}>
            <Category>{category}</Category>
            {apps[category].apps.map((app, idx) => (
              <Link href={"/" + app.route} key={app.route}>
                <div className="flex flex-col items-center mt-5 cursor-pointer">
                  {" "}
                  <Image
                    src={getAppIconPath(app.route)}
                    width="30px"
                    height="30px"
                    alt="logo"
                    objectFit="contain"
                  />{" "}
                  <div className="px-10 mt-2 mb-5" onClick={() => setOpen(false)}>
                    {app.displayName}
                  </div>
                </div>
              </Link>
            ))}
          </CategoryContainer>
        );
      })}
    </List>
  );

  return (
    <DrawerWrapper
      anchor="right"
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      {list()}
    </DrawerWrapper>
  );
}

const CategoryContainer = styled.div`
  margin: 0 0 100px 0;
`;

const Category = styled.div`
  font-weight: 600;
  font-size: 20px;
  padding: 26px 16px 12px 16px;
  text-align: center;
  border-bottom: 1px solid rgba(180, 180, 180, 1);
`;

const DrawerWrapper = styled(SwipeableDrawer)`
  min-width: 250px !important;
`;
 */
