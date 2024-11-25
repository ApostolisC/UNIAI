'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import PersonCard from '@/src/components/PersonCard/PersonCard';
import { Team } from '@/data/teams'; // Adjust path as needed
import { Person } from '@/data/uniaiMembersData'; // Adjust path as needed

const MeetTheTeamPage = () => {
    const [teams, setTeams] = useState<Team[]>([]);
    const [people, setPeople] = useState<Person[]>([]);
    const [isPhone, setIsPhone] = useState(false);

    const borderColors = ['#9202D8', '#FF8210'];

    useEffect(() => {
        const handleResize = () => {
            setIsPhone(window.innerWidth <= 768); // Changed to a smaller breakpoint for mobile
        };

        // Initial check on mount
        handleResize();

        // Listen for resize events
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Added empty dependency array to avoid repeated event listeners

    useEffect(() => {
        import('@/data/teams').then((module) => setTeams(module.teams));
        import('@/data/uniaiMembersData').then((module) => setPeople(module.default));

        // Cleanup
        return () => {
            setTeams([]);
            setPeople([]);
        };
    }, []);

    // Function to group people by teams
    const groupPeopleByTeams = (): Record<string, Person[]> => {
        const groupedPeople: Record<string, Person[]> = {};

        teams.forEach((team) => {
            const members = people.filter((person) => team.members.includes(person.id));
            groupedPeople[team.title] = members;
        });

        return groupedPeople;
    };

    const teamsWithMembers = groupPeopleByTeams();

    return (
        <div>
            <div className="flex flex-col md:flex-row w-full bg-gray-200 rounded-b-full py-[8vh] md:py-[4vh] mb-10 
                            bg-gradient-to-bl md:bg-gradient-to-l from-[#FF7D07] to-[#9202D8]">
                {/* Left Column (Image) */}
                <div className="w-full md:w-1/2 flex justify-center items-center md:mt-10 mb-5 ">
                    <Image src="/image-removebg-preview.png" alt="Logo" width={200} height={155} className="max-w-full h-auto -mt-16 md:-mt-0 mb-20 md:mb-0 rounded-lg" />
                </div>

                {/* Right Column (Heading) */}
                <div className="w-full md:w-1/2 flex justify-center items-center mb-10">
                    <h2 className="text-5xl md:text-5xl lg:text-5xl font-bold text-center">Meet The Team</h2>
                </div>
            </div>

            <div className="p-6 w-[95vw] md:w-[70vw] mx-auto text-left">
                <p className="mt-4 text-wrap text-[22px] text-left">In any organization, people are the most important element in achieving its vision. Meet the team behind UniAI, whose members share a passion and enthusiasm for AI!</p>
            </div>

            {/* Display Teams and Members */}
            {Object.entries(teamsWithMembers).map(([teamTitle, members], index) => (
                <div key={index} className="p-6 w-full md:w-[75vw] mx-auto text-left">
                    <h2 className="text-[56px] w-[70vw] ml-[2.5vw]">{index < 2 ? "Meet the" : "Meet Team"} <span className="text-[#FF8210]">{teamTitle}</span></h2>
                    <hr className="border-[#A754C8] w-full md:w-[75vw] mb-6"></hr>
                    <div
                        className={`p-12 mx-auto flex ${isPhone ? 'flex-col items-center space-y-6' : 'justify-center'} flex-wrap gap-8`}
                    >
                        {members.map((person) => (
                            <div key={person.id} className="max-w-[15rem] w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <PersonCard 
                                    person={{ ...person, name: person.name_eng, position: person.position ?? person.university_eng }} 
                                    borderColor={borderColors[Number(person.id) % borderColors.length]} 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div className="mb-20"></div>
        </div>
    );
};

export default MeetTheTeamPage;
