export interface Team {
    title: string;
    description: string;
    members: string[];
}

export const teams: Team[] = [
    {
        title: "Founders",
        description: "",
        members:['0', '1']
    },
    {
        title: "Board",
        description: "",
        members:['2', '3', '4' ]
    },
    {
        title: "Legal and Finance",
        description: "The L & F department is responsible for the legal and financial matters of the organisation. Specifically, department members are in charge of managing and allocating the organisation’s financial resources for the activities of other departments. Additionally, this department handles any grant and partnership contracts, and takes on the organisation’s border compliance with the legislative Framework.\nIf you enjoy seeing the big picture and have an interest in the legal and financial field, this department is for you!\nRemember, if this sounds intriguing but you feel you may not have enough prior knowledge, don’t worry! Learning is part of the process!",
        members:['23','22' ]
    },
    {
        title: "Marketing & Social Media",
        description: "The Marketing and social media department is responsible for creating the UniAI brand, taking care of both the organisation’s aesthetics and graphics, as well as its online presence. The creativity duties of the department include generating content for social media, designing campaigns to promote the organisation’s vision and mission, as well as creating merch for our members.\nWe are looking for people who are eager to explore the world of marketing: design skills and marketing knowledge, interest in social media, passion for research, writing skills and communication skills. Skills in streaming, photography and design are highly valued.",
        members:['24', '25', '26', '27', '41', '28']
    },
    {
        title: "Partners & Sponsors",
        description: "None of the things we try to achieve would be possible without our valuable partnerships. From providing much-needed snacks during breaks in our activities, to spreading our initiatives across different communication channels and partnering with companies for grand projects, the Partners & Sponsors team takes action.\nIf you have communication skills (or want to develop them), enjoy interacting and communicating with people, have an interest in sales and above all believe you can communicate UniAI’s vision to the outside world, we want you on the team!",
        members:['29', '30', '31', '32', '33', '34']
    },
    {
        title: "IT & Data",
        description: "The role of the department is twofold. On the one hand, the technical part (IT) has as its main task the creation, maintenance and development of our website, the organisation and management of internal and external communication channels (Slack, Drive and Discord respectively), while at the same time, it aspires to develop a very creative development part, whose possibilities are limited only by the ideas of its members! On the other hand, the department is responsible for analysing data coming from other departments in order to create reports for stakeholders.\nWe are looking for creative individuals with technical knowledge who are interested in learning and implementing Front- and Backend technologies. In particular, we are looking for individuals who are interested in and experienced with technologies such as Figma, WordPress, Google Analytics, Microsoft Excel/Google Sheets, Power BI and Python. If you like organisation and are willing to test your technical knowledge and learn, don’t hesitate to join our department!",
        members:['16', '17', '18', '19', '20','21']
    },
    {
        title: "Community",
        description: "The driving force of UniAI is its members, and the Community department is there for them. The department’s goal is to strengthen the sense of community and build bonds within our community, by organising internal activities that empower us as a team and by taking care of selecting suitable new members according to each department’s requirements. There are no specific skills or requirements. We are looking for individuals who are motivated, who enjoy interacting with people and organising social events from start to finish. We need people to plan and organise the recruitment process and conduct interviews. Members of the department take full ownership of their projects, promoting the initiative through their actions and interpersonal skills.",
        members:['6','7', '8']
    },
    {
        title: "Education",
        description: "The Education department is responsible for gathering and creating educational materials related to artificial intelligence and organising relevant workshops. At the same time, the department is responsible for curating talks and taking care of the content of educational or informative presentations and posts. Within this department there is a lot of freedom for initiatives involving research and potential actions in schools. We are looking for motivated people who want to delve deeper into issues related to artificial intelligence, seek educational materials (e.g., online courses), or even create them. So, if you have research and communication skills and want to deliver presentations and workshops for our educational events, the Education department is for you!",
        members:['9', '10', '11', '12', '13', '14', '15']
    },
    {
        title: "Events & Experience",
        description: "The events and experience team is the one responsible for planning and organising our events. Its responsibilities, in addition to finding and booking suitable venues for the respective activities, include the broader technical coordination of the events (logistics), proposing and experimenting with new projects, and organising the largest event we aim for, our first own Makeathon.\nIf you enjoy organising, if you are creative and possess strong communication skills, have an interest in project management and want to create unforgettable experiences for those participating in our activities, do not hesitate to apply and become a member of the Events & Experience team!",
        members:['35', '36', '37', '38', '39', '40']
    },{
        title: "Makeathon Lead",
        description: "",
        members:['5']
    },
]

export default teams;