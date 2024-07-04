'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import PersonCard from '../../components/PersonCard/PersonCard';
import { Team } from '../../data/teams'; // Adjust path as needed
import { Person } from '../../data/uniaiMembersData'; // Adjust path as needed

const BecomePartnerPage = () => {
    const [teams, setTeams] = useState<Team[]>([]);
    const [people, setPeople] = useState<Person[]>([]);
    const [isPhone, setIsPhone] = useState(false);

    const borderColors = ['#9202D8', '#FF8210'];

    useEffect(() => {
        const handleResize = () => {
            setIsPhone(window.innerWidth <= 1024);
        };

        // Initial check on mount
        handleResize();

        // Listen for resize events
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Added empty dependency array to avoid repeated event listeners

    useEffect(() => {
        // Mock data loading from files (replace with actual fetch logic)
        import('../../data/teams').then((module) => setTeams(module.teams));
        import('../../data/uniaiMembersData').then((module) => setPeople(module.default));

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
            <div className="flex flex-col md:flex-row w-full bg-gray-200 rounded-b-full py-[4vh] mb-10 bg-gradient-to-l from-[#FF7D07] to-[#9202D8]">
                {/* Left Column (Image) */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <Image src="/image-removebg-preview.png" alt="Logo" width={250} height={200} className="max-w-full h-auto rounded-lg" />
                </div>

                {/* Right Column (Heading) */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center">Meet The Team</h2>
                </div>
            </div>

            <div className="p-6 w-[70vw] mx-auto text-left">
                <p className="mt-4 text-wrap text-[22px] text-left">In any organization, people are the most important element in achieving its vision. Meet the team behind UniAI, whose members share a passion and enthusiasm for AI!</p>
            </div>

            {/* Display Teams and Members */}
            {Object.entries(teamsWithMembers).map(([teamTitle, members], index) => (
                <div key={index} className="p-6 w-[75vw] mx-auto text-left">
                    <h2 className="text-[56px] w-[70vw] ml-[2.5vw]">{index<2 ? "Meet the" : "Meet Team"} <span className="text-[#FF8210]">{teamTitle}</span></h2>
                    <hr className="border-[#A754C8] w-[75vw]"></hr>
                    <div
                        className={`p-12 mx-auto ${
                            members.length<2? 'grid grid-cols-4 mx-[25vw] ': members.length<3 ? 'grid grid-cols-4 gap-24 mx-80 ' : members.length < 4 ? 'grid grid-cols-4 gap-16 mx-[10vw]' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12'
                        } ${isPhone ? 'sm:w-full lg:w-full' : 'sm:w-[100vw] lg:w-[70vw]'} ${isPhone ? 'mx-0' : 'mx-[15vw]'}`}
                    >
                        {members.map((person) => (
                            <PersonCard key={person.id} person={{ ...person, position: '' }} borderColor={borderColors[Number(person.id) % borderColors.length]} />
                        ))}
                    </div>
                </div>
            ))}

            <div className="mb-20"></div>
        </div>
    );
};

export default BecomePartnerPage;
