import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from 'lucide-react';

const recipes = [
    { id: 1, title: "Methamphetamine", description: "Perfect for any occasion" },
    { id: 2, title: "C-4", description: "Improvised C-4" },
    { id: 3, title: "Semtex", description: "Little more powerful than U.S C-4." },
    { id: 4, title: "Flashbang", description: "Makeshift flashbang" },
    { id: 5, title: "Napalm", description: "Homemade napalm" },
    { id: 6, title: "Quick money method", description: "Catalytic converter theft" },
];

export default function Home() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">What will it be?</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                    <Link to={`/recipe/${recipe.id}`}>
                        <Card key={recipe.id}>
                            <CardHeader>
                                {recipe.id === 1 ? (
                                    <div className="flex items-center gap-2">
                                        <Star />
                                        <CardTitle>{recipe.title}</CardTitle>
                                    </div>
                                ) : (
                                    <CardTitle>{recipe.title}</CardTitle>
                                )}
                            </CardHeader>
                            <CardContent>
                                <p>{recipe.description}</p>
                                <Link
                                    to={`/recipe/${recipe.id}`}
                                    className="mt-2 inline-block text-neutral-400 hover:text-neutral-500"
                                >
                                    View Recipe
                                </Link>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}

