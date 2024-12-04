import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Ingredient {
    name: string;
    amount: string;
}

interface Step {
    title: string;
    content: string;
}

interface RecipeLayoutProps {
    title: string;
    description: string;
    prepTime: string;
    cookTime: string;
    totalTime: string;
    ingredients: Ingredient[];
    steps: Step[];
}

export default function RecipeLayout({
    title,
    description,
    prepTime,
    cookTime,
    totalTime,
    ingredients,
    steps
}: RecipeLayoutProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-3">
                <Card className="bg-card text-card-foreground">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold">{title}</CardTitle>
                        <p>{description}</p>
                    </CardHeader>
                    <CardContent>
                        <p>Prep Time: {prepTime} | Cook Time: {cookTime} | Total Time: {totalTime}</p>
                    </CardContent>
                </Card>
            </div>
            <div className="md:col-span-1">
                <Card className="bg-card text-card-foreground">
                    <CardHeader>
                        <CardTitle>Ingredients</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-5 space-y-2">
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient.amount} {ingredient.name}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
            <div className="md:col-span-2">
                <Card className="bg-card text-card-foreground">
                    <CardHeader>
                        <CardTitle>Instructions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            {steps.map((step, index) => (
                                <AccordionItem key={index} value={`step-${index + 1}`}>
                                    <AccordionTrigger>Step {index + 1}: {step.title}</AccordionTrigger>
                                    <AccordionContent>{step.content}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

