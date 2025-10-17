import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = () => {
    return (  
        <Card className="flex flex-col justify-between">
            <CardHeader className="flex flex-row gap-4 items-center">
                <Skeleton className="w-12 h-12 rounded-full"></Skeleton>  
                <div>
                    <Skeleton className="h-6 w-[180px]"></Skeleton>
                    <Skeleton className="h-4 w-[100px] mt-2"></Skeleton>
                </div>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 flex-grow mt-4"></Skeleton>  
              <Skeleton className="h-4 flex-grow mt-4"></Skeleton>  
              <Skeleton className="h-4 w-1/2 mt-4"></Skeleton>  
            </CardContent>
            <CardFooter className="flex justify-between">
              <Skeleton className="h-12 w-28"></Skeleton>  
            </CardFooter>
          </Card>
    );
}
 
export default SkeletonCard;