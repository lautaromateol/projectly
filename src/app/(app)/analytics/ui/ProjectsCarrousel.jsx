import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { ProjectInfo } from ".";

export function ProjectsCarrousel({ projects }) {
  return (
    <section className="w-full max-w-6xl mx-auto space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Projects Info</h2>
        <h3 className="text-sm font-light text-gray-500">Review your projects key information</h3>
      </div>
      {
        projects.length > 0 && (
          <Carousel>
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id}>
                  <ProjectInfo project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )
      }
    </section>
  );
}
