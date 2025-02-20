import { componentMappings } from "@/app/Constants/componentsList";
import Link from "next/link";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
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
      <div className="flex flex-col gap-10">{component.element}</div>
    </div>
  );
}
