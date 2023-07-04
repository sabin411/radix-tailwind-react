// package
import * as Toolbar from "@radix-ui/react-toolbar";
import {
  FontBoldIcon,
  FontItalicIcon,
  StrikethroughIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TextAlignCenterIcon,
} from "@radix-ui/react-icons";

// constants
const toggleItemContainerStyling = `
  flex items-center gap-[4px]
`;
const commonStyling = `          
inline-flex
text-[14px]
outline-none
items-center
rounded-[4px]
text-slate-700
justify-center
flex-[0_0_auto]
ToolbarToggleItem
h-[25px] px-[4px]

hover:bg-indigo-100
hover:text-indigo-700

focus-within:ring-2 
focus-within:relative
focus-within:ring-indigo-500

data-[state=on]:bg-indigo-200
data-[state=on]:text-indigo-700
`;

const separatorStyling = `
  w-[1px] h-5
  bg-slate-300
  mx-2
`;

const ToolbarDemo = () => {
  return (
    <Toolbar.Root
      className="ToolbarRoot
      px-5 py-2 m-5
      flex rounded-md
      items-center
      bg-slate-100 shadow-md
      "
      aria-label="Formatting options"
    >
      <Toolbar.ToggleGroup
        type="multiple"
        className={`${toggleItemContainerStyling}`}
        aria-label="Text formatting"
      >
        <Toolbar.ToggleItem
          className={`${commonStyling}`}
          value="bold"
          aria-label="Bold"
        >
          <FontBoldIcon height={20} width={20} />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem
          className={`${commonStyling}`}
          value="italic"
          aria-label="Italic"
        >
          <FontItalicIcon height={20} width={20} />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem
          className={`${commonStyling}`}
          value="strikethrough"
          aria-label="Strike through"
        >
          <StrikethroughIcon height={20} width={20} />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>

      <Toolbar.Separator className={`${separatorStyling}`} />

      <Toolbar.ToggleGroup
        type="single"
        defaultValue="center"
        aria-label="Text alignment"
        className={`${toggleItemContainerStyling}`}
      >
        <Toolbar.ToggleItem
          className={`${commonStyling}`}
          value="left"
          aria-label="Left aligned"
        >
          <TextAlignLeftIcon height={20} width={20} />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem
          className={`${commonStyling}`}
          value="center"
          aria-label="Center aligned"
        >
          <TextAlignCenterIcon height={20} width={20} />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem
          className={`${commonStyling}`}
          value="right"
          aria-label="Right aligned"
        >
          <TextAlignRightIcon height={20} width={20} />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>

      <Toolbar.Separator className={`${separatorStyling}`} />

      <Toolbar.Link
        className={`
        ${commonStyling} 
        bg-transparent 
        
        hover:bg-transparent 
        hover-text-indigo-700

        focus-within:bg-transparent
        focus-within:text-indigo-700
        `}
        href="#"
        target="_blank"
        style={{ marginRight: 10 }}
      >
        Edited 2 hours ago
      </Toolbar.Link>

      <Toolbar.Button
        className={`
        outline-none
        rounded-[4px]
        bg-indigo-600
        text-slate-100
        px-[14px] py-[5px] ml-auto

        hover:bg-indigo-500
        hover:text-slate-200

        focus-within:ring-2
        focus-within:ring-offset-2
        focus-within:ring-indigo-500
        `}
      >
        Share
      </Toolbar.Button>
    </Toolbar.Root>
  );
};

export default ToolbarDemo;
