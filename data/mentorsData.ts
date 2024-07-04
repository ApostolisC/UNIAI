export interface Person {
    image: string;
    name: string;
    name_eng: string;
    position: string;
    position_eng: string;
    linkedin: string;
}

// Array of person objects
const people: Person[] = [
    {
        image: '/individuals/diomidis_spinellis-Κωστας-Ρηγανας.jpg', // Replace with actual image paths
        name: 'Διομήδης Σπινέλλης',
        name_eng: 'Diomidis Spinellis',
        position: 'Contributor',
        position_eng: 'Contributor',
        linkedin: 'https://www.linkedin.com/in/dspinellis/',
    },
    {
        image: '/individuals/George_Vouros-Andriani-Nikolaou-150x150.jpg', // Replace with actual image paths
        name: 'Γεώργιος Βούρος',
        name_eng: 'George Vouros',
        position: 'Contributor',
        position_eng: 'Contributor',
        linkedin: ''
    },
    {
        image: '/individuals/Dimitris_Karlis-Andriani-Nikolaou-150x150.png', // Replace with actual image paths
        name: 'Δημήτριος Καρλής',
        name_eng: 'Dimitris Karlis',
        position: 'Contributor',
        position_eng: 'Contributor',
        linkedin: 'https://www.linkedin.com/in/dimitris-karlis-45b9a0139/'
    },
    {
        image: '/individuals/christine_nikolaou.jpg', // Replace with actual image paths
        name: 'Χριστίνα Νικολάου',
        name_eng: 'Christine Nikolaou',
        position: 'Mentor',
        position_eng: 'Mentor',
        linkedin: 'https://www.linkedin.com/in/christinenikolaou/'
    },
    {
        image: '/individuals/Screenshot-2023-12-08-144642.png', // Replace with actual image paths
        name: 'Ασπασία Γκότση',
        name_eng: 'Aspasia Gkotsi',
        position: 'Mentor',
        position_eng: 'Mentor',
        linkedin: 'https://www.linkedin.com/in/aspasiagkotsi'
    },
    {
        image: '/individuals/photo-600x600.png', // Replace with actual image paths
        name: 'Γιώργος Γιαννακόπουλος',
        name_eng: 'Giorgos Giannakopoulos',
        position: 'Contributor',
        position_eng: 'Contributor',
        linkedin: 'https://www.linkedin.com/in/ggianna/'
    },
    {
        image: '/individuals/dimitris_vassilakis-442x450.jpeg', // Replace with actual image paths
        name: 'Δημήτρης Βασιλάκης',
        name_eng: 'Dimitris Vassilakis',
        position: 'Contributor',
        position_eng: 'Contributor',
        linkedin: 'http://linkedin.com/in/dimitri-vassilakis'
    },
    {
        image: '/individuals/1692641899053-600x600.jpg', // Replace with actual image paths
        name: 'Δημήτριος Φωτεινός ',
        name_eng: 'Dimitrios Foteinos',
        position: 'Contributor',
        position_eng: 'Contributor',
        linkedin: 'https://www.linkedin.com/in/dimitrios-foteinos-9008941b8/'
    },

    {
        image: '/individuals/Nikos_Spanos-Iraklis-Premptis-600x600.jpg', // Replace with actual image paths
        name: 'Νίκος Σπανός',
        name_eng: 'Nikos Spanos',
        position: 'Contributor',
        position_eng: 'Contributor',
        linkedin: 'https://www.linkedin.com/in/spanosnikos'
    },

    {
        image: '/individuals/ion_petropoulos-e1708352151431.png', // Replace with actual image paths
        name: 'Ίων Πετρόπουλος',
        name_eng: 'Ion Petropoulos',
        position: 'Mentor',
        position_eng: 'Mentor',
        linkedin: 'https://www.linkedin.com/in/ion-petropoulos-081a34130'
    },

    // Add more mentors as needed
];

export default people;
