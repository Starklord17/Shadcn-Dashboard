import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Layers, Paintbrush, Accessibility } from 'lucide-react';

export default function Page() {
  const features = [
    { title: "Accessible", icon: Accessibility, description: "Built with accessibility in mind" },
    { title: "Customizable", icon: Paintbrush, description: "Easy to customize and extend" },
    { title: "Composable", icon: Layers, description: "Flexible component composition" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in">
        Shadcn/ui: Accessible and Customizable Components
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <div 
            key={feature.title}
            className={`animate-fade-in-up`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Card className="bg-gray-800 border-gray-700 transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold">
                  <feature.icon className="w-6 h-6 mr-2" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="text-center animate-fade-in" style={{ animationDelay: '500ms' }}>
        <Link href="/dashboard/data-table" passHref>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300">
            Explore Data Table
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}