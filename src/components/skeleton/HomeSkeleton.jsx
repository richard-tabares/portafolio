

export const HomeSkeleton = () => (

    <section className="mt-10">
        <div className="grid grid-cols-1 place-items-center">
            <div className="rounded-full bg-gray-200 w-32 h-32"></div>
        </div>
        <article className="mt-8 grid gap-2">
            <div className="h-4 bg-gray-200 rounded w-[100%]"></div>
            <div className="h-4 bg-gray-200 rounded w-[80%]"></div>
            <div className="h-4 bg-gray-200 rounded w-[90%]"></div>
            <div className="h-4 bg-gray-200 rounded w-[40%]"></div>
        </article>
    </section>

)