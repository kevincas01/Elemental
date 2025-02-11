import { componentMappings } from "@/app/constants/componentsList";
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
          <p>All Components</p>
        </Link>
        <KeyboardDoubleArrowRightOutlinedIcon />
        <p>{component.name}</p>
      </div>
      <h1>{component.name}</h1>
      <div>{component.element}</div>
    </div>
  );
}
