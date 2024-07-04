export interface Team {
    title: string;
    members: string[];
}

export const teams: Team[] = [
    {
        title: "Founders",
        members:['0', '1']
    },
    {
        title: "Board",
        members:['2', '3', '4' ]
    },
    {
        title: "Legal and Finance",
        members:['23','22' ]
    },
    {
        title: "Marketing & Social Media",
        members:['24', '25', '26', '27', '41', '28']
    },
    {
        title: "Partners & Sponsors",
        members:['29', '30', '31', '32', '33', '34']
    },
    {
        title: "IT & Data",
        members:['16', '17', '18', '19', '20','21']
    },
    {
        title: "Community",
        members:['6','7', '8']
    },
    {
        title: "Education",
        members:['9', '10', '11', '12', '13', '14', '15']
    },
    {
        title: "Events & Experience",
        members:['35', '36', '37', '38', '39', '40']
    },{
        title: "Makeathon Lead",
        members:['5']
    },
]

export default teams;