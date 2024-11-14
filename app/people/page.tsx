import Image from "next/image";

const labMembers = [
    {
        name: "Elise Name",
        title: "Title",
        image: "/images/Elise.jpg",
    },
    {
        name: "Name Lastname",
        title: "Title",
        image: "/images/JUN_1004 copy.jpg",
    },
    {
        name: "Name Lastname",
        title: "Title",
        image: "/images/JUN_1014 copy[17691].jpg",
    },
    {
        name: "Name Lastname",
        title: "Title",
        image: "/images/JUN_1033 copy.jpg",
    },
    {
        name: "Name Lastname",
        title: "Title",
        image: "/images/JUN_1040 copy.jpg",
    },
    {
        name: "Name Lastname",
        title: "Title",
        image: "/images/JUN_1055 copy.jpg",
    },
];

export default function People() {
    return (
        <div className="flex flex-col items-center p-8 text-black">
            <h2 className="w-2/3 text-3xl font-semibold mt-4 text-left">Principal Investigator</h2>
            <div className="flex items-start space-x-6 py-12 w-2/3">
                <Image
                    src="/images/Currie resized.jpg.jfif"
                    alt="Mark Currie"
                    width="280"
                    height="280"
                    className="mr-6 float-left"
                />
                <div className="">
                    <h2 className="text-2xl font-bold uppercase">
                        Mark Currie, PhD
                    </h2>
                    <p className="font-semibold italic">Principal Investigator</p>
                    <p className="mt-1">
                        Cell & Systems Biology, University of Toronto
                    </p>

                    <div className="mt-4">
                        <h3 className="font-bold">Research Areas</h3>
                        <p className="">
                            Cell Biology, Developmental Biology, Genetics / Genomics, Molecular Biology, <br />Pathology, Proteomics, Structural Biology
                        </p>
                    </div>

                    <div className="mt-4">
                        <h3 className="font-bold">Education</h3>
                        <p className="">
                            B.Sc. (Hons.) Queen’s University
                        </p>
                        <p className="">
                            Ph.D. Queen’s University
                        </p>
                    </div>
                </div>
            </div>
            <h1 className="w-2/3 text-3xl font-semibold mb-8 text-left">Lab Members</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {labMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="w-64 h-80 relative mb-4">
                            <Image
                                src={member.image}
                                alt={`${member.name} photo`}
                                layout="fill"
                                objectFit="cover"
                                className=""
                            />
                        </div>
                        <h2 className="text-lg font-semibold">{member.name}</h2>
                        <p className="text-gray-600">{member.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
