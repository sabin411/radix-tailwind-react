import React from "react";

// Radix UI
import * as Accordion from "@radix-ui/react-accordion";
import * as Separator from "@radix-ui/react-separator";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const AccordionDemo = () => {
  return (
    <div className="flex justify-center py-5">
      <Accordion.Root
        className="AccordionRoot w-[400px] rounded-md bg-slate-100 shadow-md"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        <Accordion.Item
          className="
          AccordionItem
          rounded-tl-md 
          rounded-tr-md 
          overflow-hidden

          shadow-[0_1px_0_rgba(0,0,0,0.7)]
          z-[2]
          focus-within:z-[1] 
          focus-within:relative 
          focus-within:shadow-outline
          "
          value="item-1"
        >
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </Accordion.Item>

        <Separator.Root
          color="#888"
          className="SeparatorRoot bg-slate-300 h-[1px] w-full"
        />

        <Accordion.Item
          className="
          overflow-hidden 

          
          focus-within:z-[1] 
          focus-within:relative 
          focus-within:shadow-outline"
          value="item-2"
        >
          <AccordionTrigger className="">Is it unstyled?</AccordionTrigger>
          <AccordionContent>
            Yes. It's unstyled by default, giving you freedom over the look and
            feel.
          </AccordionContent>
        </Accordion.Item>

        <Separator.Root
          color="#888"
          className="SeparatorRoot bg-slate-300 h-[1px] w-full"
        />

        <Accordion.Item
          className="
          rounded-bl-md 
          rounded-br-md 
          overflow-hidden 
          
          focus-within:z-[1] 
          focus-within:relative 
          focus-within:shadow-outline"
          value="item-3"
        >
          <AccordionTrigger>Can it be animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's unstyled by default, giving you freedom over the look and
            feel.
          </AccordionContent>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
};

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  {
    children: React.ReactNode;
    className?: string;
  }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header>
    <Accordion.Trigger
      className={`
      group
      outline-none
      px-5 h-[45px] w-full 
      flex items-center justify-between 
      bg-slate-100 text-indigo-500 
      ${className}`}
      outline-none
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className="
        duration-300 
        rotate-0
        transition-transform
        group-data-[state=closed]:rotate-180 
        ease-[cubic-bezier(0.87, 0, 0.13, 1)]
        "
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children: React.ReactNode;
  }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={`
    AccordionContent
    bg-indigo-100 
    text-slate-700 
    overflow-hidden 
    
    data-[state=open]:animate-slide-down 
    data-[state=closed]:animate-slide-up 
    
    ${className} `}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText px-5 py-[15px]">{children}</div>
  </Accordion.Content>
));

export default AccordionDemo;
