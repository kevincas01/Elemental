import { componentMappings } from "@/app/Constants/componentsList";
import Link from "next/link";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import UIGalleryComponent from "@/app/Components/UIGallery/UIGalleryComponent";
import { getFileContent } from "@/app/Utils/files";

interface PageProps {
  params: { component_name: string };
}

export default function Page({ params }: PageProps) {
  const component = componentMappings[params.component_name];

  if (!component) {
    return <div>Component not found</div>;
  }

  // Add file contents to each element
  const elementsWithFiles = component.elements.map((element) => ({
    ...element,
    files: element.files.map((file) => ({
      ...file,
      content: getFileContent(file.path), // Load file content here
    })),
  }));

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
        {elementsWithFiles.map((element, index) => (
          <UIGalleryComponent title={element.title} key={index} files={element.files}>
            {element.component}
          </UIGalleryComponent>
        ))}
      </div>
    </div>
  );
}
