import { useEffect } from "react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { useMenus } from "../../hooks/useMenus";
import { LoadingSpinner } from "../atoms/icon/LoadingSpinner";

export const MenuItems = () => {
  const { menus, loading, getMenus } = useMenus();
  useEffect(() => getMenus(), [getMenus]);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <UnorderedList spacing={3}>
          {menus &&
            menus.map((menu) => (
              <ListItem fontSize="sm">
                {menu.name}：{menu.count}回 × {menu.set}セット
              </ListItem>
            ))}
        </UnorderedList>
      )}
    </>
  );
};
