import { componentMappings } from "@/app/Constants/componentsList";
import Link from "next/link";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import UIGalleryComponent from "@/app/Components/UIGallery/UIGalleryComponent";
interface PageProps {
  params: { component_name: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Page({ params }: PageProps) {
  const component = componentMappings[params.component_name];

  if (!component) {
    return <div>Component not found</div>;
  }

  return (
    <div>
      <div className="flex text-grayText">
        <Link href="/components" className="hover:underline">
          All Components
        </Link>
        <KeyboardDoubleArrowRightOutlinedIcon />
        <span>{component.name}</span>
      </div>
      <h1>{component.name}</h1>
      
      <div className="flex flex-col gap-10">
        {component.elements.map((Element, index) => (
          <UIGalleryComponent title={Element.title} key={index}>
            {Element.component}
          </UIGalleryComponent>
        ))}
      </div>
    </div>
  );
}
