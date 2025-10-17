import { Button } from '@/components/ui/button'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

interface Recipe {
  title: string,
  image: string,
  time: string,
  description: string,
  vegan: boolean,
  id: string
}

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/recipes`, {
    next: {
      revalidate: 60 // revalidate the data every 60 seconds
    }
  })

  if (!result.ok) {
    throw new Error('Failed to fetch recipes')
  }

  await new Promise(resolve => setTimeout(resolve, 2000)) // keeping the delay for loading state demo

  return result.json()
}

export default async function Home() {
  const recipes = await getRecipes()

  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {recipes.map(recipe => (
          <Card key={recipe.id} className="flex flex-col justify-between">
            <CardHeader>
              <div className="flex gap-4 items-center">
                <Avatar> 
                  <AvatarImage src={`${recipe.image}`} alt={recipe.title} />
                  <AvatarFallback>
                    {recipe.title.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{recipe.title}</CardTitle>
                  <CardDescription>{recipe.time} mins</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>View Recipe</Button>
              {recipe.vegan && <Badge variant={'secondary'}>Vegan</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}