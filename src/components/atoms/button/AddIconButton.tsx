import { PlusSquareIcon } from "@chakra-ui/icons";

export const AddIconButton = (props: { onClickAdd: () => void }) => {
  return <PlusSquareIcon onClick={props.onClickAdd} w={7} h={7} />;
};