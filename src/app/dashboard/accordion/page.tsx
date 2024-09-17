import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: "item-1",
    question: "Is it accesible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern",
  },
  {
    id: "item-2",
    question: "How do I get started?",
    answer: "You can start by reading the documentation.",
  },
  {
    id: "item-3",
    question: "Can I use it on mutiple projects?",
    answer: "Yes. It's licensed under MIT license",
  },
  {
    id: "item-4",
    question: "Type options?",
    answer: "Types available: single, multiple",
  }
];

export default function Page() {
  return (
    <div>
      <Accordion type="single" className="w-full">

        {
          items.map((item) => (
            <AccordionItem value={item.id} key={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))
        }
        
      </Accordion>
    </div>
  );
}
