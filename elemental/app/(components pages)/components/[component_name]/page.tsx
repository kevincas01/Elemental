import { componentMappings } from "@/app/Constants/componentsList";
import Link from "next/link";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import UIGalleryComponent from "@/app/Components/UIGallery/UIGalleryComponent";
import { getFileContent } from "@/app/Utils/files";
import ConstructionIcon from '@mui/icons-material/Construction';
interface PageProps {
  params: Promise<{ component_name: string }>;
}

export async function generateStaticParams() {
  return Object.keys(componentMappings).map(component_name => ({
    component_name,
  }));
}

export default async function Page({ params }: PageProps) {
  const componentName = (await params).component_name;
  const component = componentMappings[componentName];

  if (!component) {
    return <div>Component not found</div>;
  }

  // Add file contents to each element
  const elementsWithFiles = await Promise.all(
    component.elements.map(async (element) => {
      const Component = (await import(`@/app/Components/UIGallery/${element.componentPath}`)).default;
  
      return {
        ...element,
        component: <Component />,
        fileGroups: await Promise.all(
          element.fileGroups.map(async (group) => ({
            ...group,
            files: await Promise.all(
              group.files.map(async (file) => ({
                ...file,
                content: await getFileContent(file.path, file.language),
              }))
            ),
          }))
        ),
      };
    })
  );
  
  return (
    <div className="h-full flex flex-col">
      <div className="flex text-grayText">
        <Link href="/components" className="hover:underline">
          All Components
        </Link>
        <KeyboardDoubleArrowRightOutlinedIcon />
        <span>{component.name}</span>
      </div>
      <h1 className="text-primary">{component.name}</h1>

      {elementsWithFiles.length > 0 ? (
        <>
          <div className="flex flex-col gap-10 pb-10">
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
          <div className="flex flex-1 flex-col text-center items-center justify-center">
            <h2 className="text-2xl font-semibold ">
              No components available at the moment
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
