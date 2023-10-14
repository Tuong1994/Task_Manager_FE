import { ETaskStatus } from "@/common/type/task";
import { UI } from "@/components";
import { BadgeProps } from "@/components/UI/Badge";
import useLangs from "@/hooks/useLangs";

const { Badge } = UI;

const useRenderContent = () => {
  const { langs } = useLangs();

  const renderStatus = (status: ETaskStatus) => {
    let content: string | undefined = "";
    let color: BadgeProps["color"] | undefined;

    switch (status) {
      case ETaskStatus.UNDO: {
        color = "black";
        content = langs?.task.status.undo;
        break;
      }

      case ETaskStatus.DOING: {
        color = "blue";
        content = langs?.task.status.doing;
        break;
      }

      case ETaskStatus.FINISHED: {
        color = "green";
        content = langs?.task.status.finished;
        break;
      }
    }

    return (
      <Badge color={color} ghost>
        {content}
      </Badge>
    );
  };

  return { renderStatus };
};

export default useRenderContent;
