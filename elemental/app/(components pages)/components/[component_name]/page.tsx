import { componentMappings } from "@/app/Constants/componentsList";
import Link from "next/link";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import UIGalleryComponent from "@/app/Components/UIGallery/UIGalleryComponent";
import { getFileContent } from "@/app/Utils/files";
import ConstructionIcon from '@mui/icons-material/Construction';
interface PageProps {
  params: Promise<{ component_name: string }>;
}

export default async function Page({ params }: PageProps) {
  const componentName = (await params).component_name;
  const component = componentMappings[componentName];

  if (!component) {
    return <div>Component not found</div>;
  }

  // Add file contents to each element
  const elementsWithFiles = component.elements.map((element) => ({
    ...element,
    fileGroups: element.fileGroups.map((group) => ({
      ...group,
      files: group.files.map((file) => ({
        ...file,
        content: getFileContent(file.path, file.language),
      })),
    })),
  }));

  return (
    <div className="h-full flex flex-col">
      <div className="flex text-grayText">
        <Link href="/components" className="hover:underline">
          All Components
        </Link>
        <KeyboardDoubleArrowRightOutlinedIcon />
        <span>{component.name}</span>
      </div>
      <h1>{component.name}</h1>

      {elementsWithFiles.length > 0 ? (
        <>
          <div className="flex flex-col gap-10 pb-10 h-full">
            {elementsWithFiles.map((element, index) => (
              <UIGalleryComponent
                title={element.title}
                key={index}
                fileGroups={element.fileGroups}
              >
                {element.component}
              </UIGalleryComponent>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-1 flex-col text-center items-center justify-center p-10 ">
            <h2 className="text-2xl font-semibold ">
              No Components Available at the moment
            </h2>
            <ConstructionIcon sx={{fontSize:"120px"}}/>
            <p className="text-gray-500 mt-2">
              This section is currently under development. Stay tuned for
              updates!
            </p>
          </div>
        </>
      )}
    </div>
  );
}
