import { UI } from "@/components";
import { EGender, EPosition, ERole } from "@/common/type/staff";
import { BadgeProps } from "@/components/UI/Badge";
import useLangs from "@/hooks/useLangs";

const { Badge } = UI;

const useRenderContent = () => {
  const { langs } = useLangs();

  const renderGender = (gender: EGender) => {
    let content: string | undefined = "";
    let color: BadgeProps["color"] | undefined;

    if (gender === EGender.MALE) {
      color = "blue";
      content = langs?.staff.gender.male;
    }

    if (gender === EGender.FEMALE) {
      color = "pink";
      content = langs?.staff.gender.female;
    }

    return (
      <Badge color={color} ghost>
        {content}
      </Badge>
    );
  };

  const renderPosition = (position: EPosition) => {
    let content: string | undefined = "";
    let color: BadgeProps["color"] | undefined;

    switch (position) {
      case EPosition.FRONTEND: {
        color = "green";
        content = langs?.staff.position.frontend;
        break;
      }
      case EPosition.BACKEND: {
        color = "black";
        content = langs?.staff.position.backend;
        break;
      }
      case EPosition.DESIGN: {
        color = "pink";
        content = langs?.staff.position.design;
        break;
      }
      case EPosition.PRODUCT: {
        color = "violet";
        content = langs?.staff.position.product;
        break;
      }
    }

    return <Badge color={color}>{content}</Badge>;
  };

  const renderRole = (role: ERole) => {
    let content: string | undefined = "";
    let color: BadgeProps["color"] | undefined;

    if (role === ERole.ADMIN) {
      color = "emerald";
      content = langs?.staff.role.admin;
    }

    if (role === ERole.STAFF) {
      color = "green";
      content = langs?.staff.role.staff;
    }

    return <Badge color={color}>{content}</Badge>;
  };

  return { renderGender, renderPosition, renderRole };
};

export default useRenderContent;
