import { Skeleton } from "./skeleton";

/**
 * Skeleton loader for course cards in CoursesSection
 */
export function CourseCardSkeleton() {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)]">
      {/* Gradient top border placeholder */}
      <Skeleton className="h-1.5 w-full rounded-none" />

      <div className="p-8 lg:p-10">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <Skeleton className="w-16 h-16 rounded-2xl" />
          <div className="flex-1">
            <Skeleton className="h-7 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </div>

        {/* Tags */}
        <div className="flex gap-2 mb-5">
          <Skeleton className="h-8 w-28 rounded-full" />
          <Skeleton className="h-8 w-36 rounded-full" />
        </div>

        {/* Description */}
        <div className="space-y-2 mb-6">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>

        {/* Features */}
        <div className="mb-6">
          <Skeleton className="h-4 w-32 mb-3" />
          <div className="space-y-2.5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="w-2 h-2 rounded-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <Skeleton className="h-24 w-full rounded-xl mb-6" />

        {/* CTA Button */}
        <Skeleton className="h-14 w-full rounded-xl" />
      </div>
    </div>
  );
}

/**
 * Skeleton loader for the courses section grid
 */
export function CoursesSectionSkeleton() {
  return (
    <section className="py-28 bg-gradient-to-b from-white via-background-secondary/50 to-background-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-2/3 mx-auto mb-6" />
          <Skeleton className="h-6 w-1/2 mx-auto" />
        </div>

        {/* Course cards grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {[1, 2, 3, 4].map((i) => (
            <CourseCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Skeleton loader for the hero section
 */
export function HeroSectionSkeleton() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <Skeleton className="h-5 w-40 mb-4" />
            <Skeleton className="h-16 w-full mb-2" />
            <Skeleton className="h-16 w-3/4 mb-6" />
            <div className="space-y-2 mb-8">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-5/6" />
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="w-5 h-5 rounded-full" />
                  <Skeleton className="h-4 w-32" />
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Skeleton className="h-14 w-64 rounded-xl" />
              <Skeleton className="h-14 w-40 rounded-xl" />
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <Skeleton className="aspect-[4/3] w-full rounded-2xl" />
            {/* Floating card skeleton */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <Skeleton className="w-12 h-12 rounded-full" />
                <div>
                  <Skeleton className="h-4 w-16 mb-1" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Skeleton loader for FAQ accordion items
 */
export function FAQSkeleton() {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-80 mx-auto mb-4" />
          <Skeleton className="h-5 w-96 mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-card rounded-xl p-5">
              <Skeleton className="h-6 w-4/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Generic content skeleton for sections
 */
export function ContentSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className="h-4"
          style={{ width: `${100 - i * 10}%` }}
        />
      ))}
    </div>
  );
}
